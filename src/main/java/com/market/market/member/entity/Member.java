package com.market.market.member.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.core.type.TypeReference;
import com.market.market.member.dto.LocationDto;
import com.market.market.member.dto.MemberDto;

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
@AllArgsConstructor
@NoArgsConstructor
public class Member implements UserDetails{

    @Id
    @Column(length = 20)
    private String id;

    @Column(length = 20,nullable = false)
    private String password;

    @Column(length = 30)
    private String email;  

    @Column(length = 20)
    private String phone;  

    @Column(length = 20)
    private String nickname;  

    @Column(columnDefinition = "TEXT")
    private String location;

    @Column(columnDefinition = "TEXT")
    private String profile_image; 
    
    @Column
    @ColumnDefault("36.5")
    @Builder.Default
    private double manner_temp = 36.5;

    //0 : 일반 로그인 , 1 : 소셜 로그인
    @Column
    @ColumnDefault("0")
    @Builder.Default
    private int auth = 0;

    @Column(length = 20)
    private String category;

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
        throw new UnsupportedOperationException("Unimplemented method 'getUsername'");
    }

    public static Member toEntity(MemberDto dto)
    {
        String locations = "";
         try {
            if (dto.getLocation() != null) {
                locations = dto.getLocation().toString();
            }
        } catch (Exception e) {
            System.out.println("Error Message : "+e.getMessage());           
        }


        return Member.builder()
        .id(dto.getId())
        .password(dto.getPassword())
        .email(dto.getEmail())
        .phone(dto.getPhone())
        .nickname(dto.getNickname())
        .location(locations)
        .profile_image(dto.getProfile_image())
        .manner_temp(dto.getManner_temp())
        .auth(dto.getAuth())
        .category(dto.getCategory())
        .birth(dto.getBirth())
        .level(dto.getLevel())
        .build();
    }


}
