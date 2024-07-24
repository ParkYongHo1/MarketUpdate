package com.market.market.member.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.market.market.member.dto.MemberDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "member")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {

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
    private double manner_temp;

    //0 : 일반 로그인 , 1 : 소셜 로그인
    @Column
    private int auth;

    @Column(length = 20)
    private String category;

    @Column(length = 10)
    private String birth;

    // 0: 사용자, 1 : 관리자
    @Column
    private int level;

    public static Member toEntity(MemberDto dto)
    {
        return Member.builder()
        .id(dto.getId())
        .password(dto.getPassword())
        .email(dto.getEmail())
        .phone(dto.getPhone())
        .nickname(dto.getNickname())
        .location(dto.getLocation())
        .profile_image(dto.getProfile_image())
        .manner_temp(dto.getManner_temp())
        .auth(dto.getAuth())
        .category(dto.getCategory())
        .birth(dto.getBirth())
        .level(dto.getLevel())
        .build();
    }
}
