package com.market.market.member.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties.Lettuce.Cluster.Refresh;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

        String auth = requestMemberData.get("auth").toString();
        Map<String, Object> responseMap = new HashMap<>();

        //일반 로그인
        if(auth.equals("0"))
        {

            System.out.println("===Login===");

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


            //일반 로그인
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(id,password);

            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

            JwtDto jwtDto = tokenProvider.generateTokenDto(authentication);

            RefreshTokenDto refreshTokenDto = RefreshTokenDto.builder()
            .key(authentication.getName())
            .value(jwtDto.getRefreshToken())
            .build();

            refreshTokenRepository.save(RefreshToken.toEntity(refreshTokenDto));

            MemberDto memberDto = MemberDto.toDto(member);

            System.out.println("Location : "+memberDto.getLocation().toString());

            responseMap.put("status", "200");
            responseMap.put("member", memberDto);
            responseMap.put("token", jwtDto);


        }
        //소셜 로그인
        else if(auth.equals("1"))
        {
            System.out.println("===KaKao Login===");

            String id = requestMemberData.get("email").toString();
            String nickname = requestMemberData.get("nickname").toString();
            String profile_img = requestMemberData.get("profile_image").toString();

            Member member = memberRepository.findById(id).orElse(null);
            //회원정보가 없을 때
            if (member == null) {
                MemberDto kakaoMemberDto = MemberDto.builder().auth(Integer.parseInt(auth)).id(id).nickname(nickname).profile_image(profile_img).password("kakao_password").build();
                memberRepository.save(Member.toEntity(kakaoMemberDto));

                member = memberRepository.findById(id).orElse(null);
            }

            MemberDto memberDto = MemberDto.toDto(member);

            responseMap.put("status", "200");
            responseMap.put("member", memberDto);
        }

        
        return responseMap;
    }

    @Transactional
    public JwtDto reissue(Map<String,String> requestJwtData){

        if(!tokenProvider.validateToken(requestJwtData.get("refresh_token").toString())){
            throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
        }

        Authentication authentication = tokenProvider.getAuthentication(requestJwtData.get("access_token").toString());


        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
        .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        if(!refreshToken.getValue().equals(requestJwtData.get("refresh_token"))){
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        JwtDto jwtDto = tokenProvider.generateTokenDto(authentication);

        RefreshTokenDto refreshTokenDto = RefreshTokenDto.builder().key(refreshToken.getKey()).value(refreshToken.getValue()).build();

        RefreshToken newRefreshToken = RefreshToken.toEntity(refreshTokenDto.updateValue(jwtDto.getRefreshToken()));
        refreshTokenRepository.save(newRefreshToken);

        return jwtDto;
    }

    @Transactional
    public Map<String,Object> adduserinfo(Map<String,Object> body){
        
        Map<String,Object> resultMap = new HashMap<>();

         Map<String, Object> locations = (Map<String, Object>) body.get("location");
        if (locations == null) {
            resultMap.put("status", "400");
            resultMap.put("message", "Location data is missing");
            return resultMap;
        }

    // Check if all required location fields are present and not null
    String address = (String) locations.get("address");
    double latitude = Double.parseDouble(locations.get("latitude").toString());
    double longitude = Double.parseDouble(locations.get("longitude").toString());
    String jibun_address = (String) locations.get("jibunAddress");

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

    // Check and handle nickname
    String nickname = (String) body.get("nickname");
    if (nickname == null || nickname.isEmpty()) {
        resultMap.put("status", "400");
        resultMap.put("message", "Nickname is required");
        return resultMap;
    }
    if (isNicknameTaken(nickname)) {
        resultMap.put("status", "400");
        resultMap.put("message", "Nickname is already taken");
        return resultMap;
    }

    // Process categories
    String categoryStr = body.get("category").toString();
    List<String> categories = categoryStr != null ? List.of(categoryStr.split(",")) : new ArrayList<>();

    String id = body.get("id") != null ? String.valueOf(body.get("id").toString()) : null;
    String password = (String) body.get("password"); // Ensure password is present

    if (password == null || password.isEmpty()) { // Check if password is provided
        resultMap.put("status", "400");
        resultMap.put("message", "Password is required");
        return resultMap;
    }

    // Build MemberDto and convert to Member entity
    MemberDto memberDto = MemberDto.builder()
            .id(id)
            .nickname(nickname)
            .birth((String) body.get("birth"))
            .location(locationDto)
            .category(categories.toString())
            .password(password)
            .build();

    Member member = Member.toEntity(memberDto);

    System.out.println("Insert value: " + member.toString());

    // Save entity
    memberRepository.save(member);

    // Set result map
    resultMap.put("status", "200");
    resultMap.put("message", "SUCCESS");

    return resultMap;
    }


    private boolean isNicknameTaken(String nickname) {
        return memberRepository.existsByNickname(nickname);
    }

}

