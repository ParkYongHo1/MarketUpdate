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
    private String email;  
    private String phone;  
    private String nickname;  
    private LocationDto location;
    private String profile_image; 

    @Builder.Default
    private double manner_temp = 36.5;

    @Builder.Default
    private int auth = 0;  //0 : 일반 로그인 , 1 : 소셜 로그인
    private String category;
    private String birth;

    @Builder.Default
    private int level = 0;  // 0: 사용자, 1 : 관리자

    public static MemberDto toDto(Member entity)
    {

       ObjectMapper objectMapper = new ObjectMapper();
       LocationDto locations = new LocationDto();
        try {
            if (entity.getLocation() != null) {
                locations = objectMapper.readValue(entity.getLocation(), new TypeReference<LocationDto>() {});
            }
        } catch (Exception e) {
            System.out.println("Error Message : "+e.getMessage());           
        }

        return MemberDto.builder()
        .id(entity.getId())
        .password(entity.getPassword())
        .email(entity.getEmail())
        .phone(entity.getPhone())
        .nickname(entity.getNickname())
        .location(locations)
        .profile_image(entity.getProfile_image())
        .manner_temp(entity.getManner_temp())
        .auth(entity.getAuth())
        .category(entity.getCategory())
        .birth(entity.getBirth())
        .level(entity.getLevel())
        .build();
    }
}