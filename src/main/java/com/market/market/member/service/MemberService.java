package com.market.market.member.service;

import java.util.HashMap;
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

import com.market.jwt.TokenProvider;
import com.market.market.member.dto.JwtDto;
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
}
