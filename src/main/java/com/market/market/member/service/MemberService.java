package com.market.market.member.service;

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
    public Map<String,String> adduserinfo(Map<String,String> body){
        
        Map<String,String> resultMap = new HashMap<>();

        LocationDto locations = new LocationDto();

        String nickname = body.get("nickname");
        if (nickname != null && !nickname.isEmpty()) {
            if (isNicknameTaken(nickname)) {
                resultMap.put("STATUS", "400");
                resultMap.put("MESSAGE", "fail");
                return resultMap;
            }
        }

         // 카테고리를 쉼표로 구분된 문자열로 입력받고, 이를 List<String>으로 변환
         List<String> categories = List.of(body.get("category").split(","));
         
        MemberDto memberDto = MemberDto.builder()
        .nickname(body.get("nickname"))
        .birth(body.get("birth"))
        .location(locations)
        .category(categories).build();

        Member member = Member.toEntity(memberDto);

        System.out.println("인서트 값 : "+member.toString());

        //Repository로 CRUD
        memberRepository.save(member);

        //결과값 세팅
        resultMap.put("STATUS", "200");
        resultMap.put("MESSAGE", "SUCCESS");

        return resultMap;
    }


    private boolean isNicknameTaken(String nickname) {
        return memberRepository.existsByNickname(nickname);
    }

}

