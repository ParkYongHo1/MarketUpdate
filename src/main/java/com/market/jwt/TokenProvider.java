package com.market.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import com.market.market.exception.JwtCustomException;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.market.market.member.dto.JwtDto;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SecurityException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TokenProvider {

    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "Bearer";
    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 60;
    private static final long REFRESH_TOKEN_EXPIRE_TIME = 1000 * 60 * 60 * 24 * 7;

    private final Key key;

    public TokenProvider(@Value("${jwt.secret.key}") String secretKey){
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public JwtDto generateTokenDto(Authentication authentication){

        String authorities = authentication.getAuthorities().stream()
        .map(GrantedAuthority::getAuthority)
        .collect(Collectors.joining(","));

        long now = (new Date()).getTime();

        Map<String,Object> claims = new HashMap<>();

        String id = authentication.getName();

        claims.put("id", id);

        log.info("ID : "+id);
        log.info("Auth : "+authorities);

        //Access Token 생성
        Date accessTokenExpiresIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
        String accessToken = Jwts.builder()
        .setSubject(id)
        .setClaims(claims)
        .claim(AUTHORITIES_KEY, authorities)
        .setExpiration(accessTokenExpiresIn)
        .signWith(key,SignatureAlgorithm.HS256)
        .compact();

        //Refresh Token 생성
        String refreshToken = Jwts.builder()
        .setExpiration(new Date(now + REFRESH_TOKEN_EXPIRE_TIME))
        .signWith(key, SignatureAlgorithm.HS256)
        .compact();

        return JwtDto.builder()
            .grantType(BEARER_TYPE)
            .accessToken(accessToken)
            .accessTokenExpiresIn(accessTokenExpiresIn.getTime())
            .refreshToken(refreshToken)
            .build();
    }


    public Authentication getAuthentication(String accessToken)
    {
        Claims claims = parseClaims(accessToken);

        if(claims.get(AUTHORITIES_KEY) == null)
        {
            throw new RuntimeException("권한 정보가 없는 토큰입니다.");
        }

        Collection<? extends GrantedAuthority> authorities = Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                                                            .map(SimpleGrantedAuthority::new)
                                                            .collect(Collectors.toList());

    
        UserDetails principal = new User(claims.get("id").toString(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, "",authorities);
    }

    public boolean validateToken(String token)
    {
        try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch(SecurityException | MalformedJwtException e){
            log.info("잘못된 JWT 서명입니다.");
        } catch(ExpiredJwtException e){
            log.info("만료된 JWT 토큰입니다.");
        } catch(UnsupportedJwtException e){
            log.info("지원되지 않는 JWT 토큰입니다.");
        } catch(IllegalArgumentException e){
            log.info("JWT 토큰이 잘못되었습니다.");
        }
        return false;
    }

//    public Map<String,Object> checkAccessToken(String accessToken)
//    {
//        Map<String,Object> responseMap = new HashMap<>();
//        try{
//            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken);
//            responseMap.put("status","200");
//        } catch(SecurityException | MalformedJwtException e){
//            responseMap.put("status","400");
//            responseMap.put("message","잘못된 JWT 서명입니다.");
//            log.info("잘못된 JWT 서명입니다.");
//        } catch(ExpiredJwtException e){
//            responseMap.put("status","400");
//            responseMap.put("message","만료된 JWT 토큰입니다.");
//            log.info("만료된 JWT 토큰입니다.");
//        } catch(UnsupportedJwtException e){
//            responseMap.put("status","400");
//            responseMap.put("message","지원되지 않는 JWT 토큰입니다.");
//            log.info("지원되지 않는 JWT 토큰입니다.");
//        } catch(IllegalArgumentException e){
//            responseMap.put("status","400");
//            responseMap.put("message","JWT 토큰이 잘못되었습니다.");
//            log.info("JWT 토큰이 잘못되었습니다.");
//        }
//        return responseMap;
//    }

    public void checkAccessToken(String accessToken)
    {
        try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken);
        } catch (SecurityException | MalformedJwtException e) {
            throw new JwtCustomException("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            throw new JwtCustomException("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            throw new JwtCustomException("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            throw new JwtCustomException("JWT 토큰이 잘못되었습니다.");
        }
    }



    private Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken).getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }
}
