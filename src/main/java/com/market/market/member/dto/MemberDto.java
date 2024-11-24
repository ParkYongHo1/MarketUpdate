package com.market.market.member.dto;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.FetchType;
import javax.persistence.Id;

import com.market.market.util.Authority;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.market.market.member.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto{
    private String id;
    private String password;  
    private String phone;  
    private String nickname;  
    private LocationDto location;
    private String profile_image;
    private Authority level;

    @Builder.Default
    private double manner_temp = 36.5;

    @Builder.Default
    private int auth = 0;  //0 : 일반 로그인 , 1 : 소셜 로그인
    private String category;
    private String birth;


    public static MemberDto toDto(Member entity)
    {

       LocationDto locations = new LocationDto();
        try {
            locations.setAddress(entity.getAddress());
            locations.setJibun_address(entity.getJibun_address());
            locations.setLatitude(entity.getLatitude());
            locations.setLongitude(entity.getLongitude());
            
        } catch (Exception e) {
            System.out.println("Error Message : "+e.getMessage());           
        }

        return MemberDto.builder()
        .id(entity.getId())
        .password(entity.getPassword())
        .phone(entity.getPhone())
        .nickname(entity.getNickname())
        .location(locations)
        .profile_image(entity.getProfile_image())
        .manner_temp(entity.getManner_temp())
        .auth(entity.getAuth())
        .category(entity.getCategory())
        .birth(entity.getBirth())
        .level(entity.getLevel())
        .level(entity.getLevel())
        .build();
    }
}