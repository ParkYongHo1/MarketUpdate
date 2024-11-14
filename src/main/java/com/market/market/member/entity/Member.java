package com.market.market.member.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.io.IOException;

import javax.persistence.AttributeConverter;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Converter;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.market.market.member.dto.LocationDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.util.Authority;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "member")
@Getter
@ToString
@Builder
@DynamicUpdate
@AllArgsConstructor
@NoArgsConstructor
public class Member implements UserDetails{

    @Id
    @Column(length = 100, nullable = false, unique = true)
    private String id;

    @Column(length = 100,nullable = false)
    private String password;

    @Column(length = 20)
    private String phone;  

    @Column(length = 20, unique = true)
    private String nickname;  

    // @Column(columnDefinition = "TEXT", nullable = false)
    // private String location;

    @Column
    private String address;

    @Column
    private String jibun_address;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column(columnDefinition = "TEXT")
    private String profile_image; 
    
    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Column
    @ColumnDefault("36.5")
    @Builder.Default
    private double manner_temp = 36.5;

    //0 : 일반 로그인 , 1 : 소셜 로그인
    @Column
    @ColumnDefault("0")
    @Builder.Default
    private int auth = 0;

    
    @Column(name = "category")
    private String category;  // List<String>으로 정의

    @Column(length = 10)
    private String birth;

    // 0: 사용자, 1 : 관리자
    @Column
    @ColumnDefault("0")
    @Builder.Default
    private int level = 0;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getUsername() {
        return this.id;
    }

    public static Member toEntity(MemberDto dto)
    {
        LocationDto location = dto.getLocation();

        // LocationDto가 null인지 체크
        String address = (location != null) ? location.getAddress() : null;
        String jibunAddress = (location != null) ? location.getJibun_address() : null;
        Double longitude = (location != null) ? location.getLongitude() : null;
        Double latitude = (location != null) ? location.getLatitude() : null;


        return Member.builder()
        .id(dto.getId())
        .password(dto.getPassword())
        .phone(dto.getPhone())
        .nickname(dto.getNickname())
        .address(address)
        .jibun_address(jibunAddress)
        .longitude(longitude)
        .latitude(latitude)
        .profile_image(dto.getProfile_image())
        .manner_temp(dto.getManner_temp())
        .auth(dto.getAuth())
        .category(dto.getCategory())
        .birth(dto.getBirth())
        .level(dto.getLevel())
        .build();
    }


}
