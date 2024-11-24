package com.market.market.member.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import com.market.market.util.Authority;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.SecurityException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties.Lettuce.Cluster.Refresh;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.market.jwt.TokenProvider;
import com.market.market.member.dto.JwtDto;
import com.market.market.member.dto.LocationDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.dto.RefreshTokenDto;
import com.market.market.member.entity.Member;
import com.market.market.member.entity.RefreshToken;
import com.market.market.member.repository.MemberRepository;
import com.market.market.member.repository.RefreshTokenRepository;

import lombok.RequiredArgsConstructor;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    //private final MemberRepository memberRepository;
    //private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public Map<String,Object> login(Map<String,Object> requestMemberData){

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String auth = requestMemberData.get("auth").toString();
        Map<String, Object> responseMap = new HashMap<>();

        //일반 로그인
        if(auth.equals("0"))
        {
            log.info("===Login===");

            String id = requestMemberData.get("email").toString();
            String password = requestMemberData.get("password").toString();

            if (id == null || id.isEmpty() || password == null || password.isEmpty()) {          
                responseMap.put("status", "400");
                return responseMap;
            }

            Member member = memberRepository.findById(id)
            .orElse(null);

            //회원정보가 없을 때
            if (member == null) {
                responseMap.put("status", "400");
                return responseMap;
            }

            //패스워드가 일치하지 않을 때
            if (!passwordEncoder.matches(password, member.getPassword()))
            {
                responseMap.put("status", "400");
                return responseMap;
            }

            //일반 로그인
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(id,member.getPassword());

            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

            JwtDto jwtDto = tokenProvider.generateTokenDto(authentication);

            RefreshTokenDto refreshTokenDto = RefreshTokenDto.builder()
            .key(authentication.getName())
            .value(jwtDto.getRefreshToken())
            .build();

            refreshTokenRepository.save(RefreshToken.toEntity(refreshTokenDto));

            MemberDto memberDto = MemberDto.toDto(member);

            responseMap.put("status", "200");
            responseMap.put("member", memberDto);
            responseMap.put("token", jwtDto);
        }
        //소셜 로그인
        else if(auth.equals("1"))
        {
            log.info("===KaKao Login===");

            String id = requestMemberData.get("email").toString();
            String profile_img = requestMemberData.get("profile_image").toString();

            MemberDto memberDto = MemberDto.builder().id(id).password("kakaoPw").profile_image(profile_img).auth(1).build();

            memberRepository.save(Member.toEntity(memberDto));

            Member member = memberRepository.findById(id).orElse(null);

            //회원정보가 없을 때
            if (member == null) {
                member = memberRepository.findById(id).orElse(null);
            }          
            responseMap.put("status", "200");
            responseMap.put("member", MemberDto.toDto(member));
        }

        log.info("전달값 : "+responseMap.toString());

        return responseMap;
    }

    @Transactional
    public Map<String,Object> reissue(Map<String,String> requestJwtData){

        Map<String,Object> responseMap = new HashMap<>();

        try{
            if(!tokenProvider.validateToken(requestJwtData.get("refreshToken").toString())){
                throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
            }
    
            Authentication authentication = tokenProvider.getAuthentication(requestJwtData.get("accessToken").toString());

            RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
            .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

           // RefreshToken refreshToken = refreshTokenRepository.findByValue(requestJwtData.get("refreshToken"));
    
            if(!refreshToken.getValue().equals(requestJwtData.get("refreshToken"))){
                throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
            }
    
            JwtDto jwtDto = tokenProvider.generateTokenDto(authentication);
    
            RefreshTokenDto refreshTokenDto = RefreshTokenDto.builder().key(refreshToken.getKey()).value(refreshToken.getValue()).build();
    
            RefreshToken newRefreshToken = RefreshToken.toEntity(refreshTokenDto.updateValue(jwtDto.getRefreshToken()));
            refreshTokenRepository.save(newRefreshToken);

            responseMap.put("status", "200");
            responseMap.put("accessToken",jwtDto.getAccessToken());

        } catch(Exception e)
        {
            log.info("error Message : "+e.getMessage());
            responseMap.put("status", "400");
            responseMap.put("message",e.getMessage());
        }

        return responseMap;
    }


    @Transactional
    public Map<String, Object> adduserinfo(Map<String, Object> body) {
        Map<String, Object> resultMap = new HashMap<>();
    
        try {
            String address = (String) body.get("address");
            double latitude = body.containsKey("latitude") ? Double.parseDouble(body.get("latitude").toString()) : 0;
            double longitude = body.containsKey("longitude") ? Double.parseDouble(body.get("longitude").toString()) : 0;
            String jibun_address = (String) body.get("jibunAddress");
            
    
            if (address == null || latitude == 0 || longitude == 0 || jibun_address == null) {
                resultMap.put("status", "400");
                resultMap.put("message", "Incomplete location data");
                return resultMap;
            }
    
            LocationDto locationDto = LocationDto.builder()
                    .address(address)
                    .latitude(latitude)
                    .longitude(longitude)
                    .jibun_address(jibun_address)
                    .build();
    
                    String nickname = (String) body.get("nickname");
                    if (nickname == null || nickname.isEmpty()) {
                        resultMap.put("status", "400");
                        resultMap.put("message", "닉네임이 가능합니다");
                        return resultMap;
                    }
            
                    if (isNicknameTaken(nickname)) {
                        resultMap.put("status", "400");
                        resultMap.put("message", "닉네임이 이미 있습니다");
                        return resultMap;
                    }
    
        
            List<String> category = (List)body.get("category");
    
            String id = (String) body.get("email");
            String password = (String) body.get("password");
    
            if (password == null || password.isEmpty()) {
                resultMap.put("status", "400");
                resultMap.put("message", "Password is required");
                return resultMap;
            }
    
            MemberDto memberDto = MemberDto.builder()
                    .id(id)
                    .nickname(nickname)
                    .birth((String) body.get("birth"))
                    .location(locationDto)
                    .category(category.toString())  // List<String> 사용
                    .password(password)
                    .phone((String) body.get("phone"))
                    .build();
            Member member = Member.toEntity(memberDto);
            log.info("Saving Member: " + member);
    
            memberRepository.save(member);
    
            resultMap.put("status", "200");
            resultMap.put("message", "SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();
            resultMap.put("status", "500");
            resultMap.put("message", "Internal server error: " + e.getMessage());
        }
    
        return resultMap;
    }


    public Map<String,Object> checkAccessToken(Map<String,Object> tokenData)
    {
        return tokenProvider.checkAccessToken(tokenData.get("accessToken").toString());
    }

    public boolean isNicknameTaken(String nickname) {
        return memberRepository.existsByNickname(nickname);
    }


    public int signUp(MemberDto memberDto) {
        boolean existsByEmail = memberRepository.existsById(memberDto.getId());

        if (existsByEmail) {
         return 405;
        }
        try {
            signUpProc(memberDto);
            return 200;
        } catch (Exception e) {
            // 예외가 발생한 경우 400 Bad Request로 처리

            System.out.println("Error Message : "+e.getMessage());

            return 400; // 오류일 경우
        }
    }
    

    @Transactional
    public void signUpProc(MemberDto memberDto){              
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        memberDto.setPassword(passwordEncoder.encode(memberDto.getPassword()));
        memberDto.setId(memberDto.getId());
        memberDto.setPhone(memberDto.getPhone());
        memberDto.setLevel(Authority.ROLE_USER);

        Member member = Member.toEntity(memberDto);

        memberRepository.save(member);
    }

    public boolean memeberByPhone(String phone){
        int memberExist = 0;
        memberExist = memberRepository.searchByPhone(phone);

        if(memberExist == 0){
            return false;
        }else {
            return true;
        }
    }

    public String searchId(String phone){
        String id = memberRepository.findIdByPhone(phone);

        return id;
    }

    public boolean memeberById(String phone){
        
        return memberRepository.existsById(phone);
    }

    public void settingPw(String id, String newPw){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String putPw = passwordEncoder.encode(newPw);
       
        memberRepository.settingPw(id, putPw);
    }
}

