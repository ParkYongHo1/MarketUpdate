package com.market.market.member.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "member")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Member {

    @Id
    @Column(length = 20)
    private String id;

    @Column(length = 20,nullable = false)
    private String pwd;

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

    @Builder
    public Member(String id, String pwd, String email, String phone, String nickname, String location, 
        String profile_image, double manner_temp, int auth, String category, String birth, int level){
            this.id = id;
            this.pwd = pwd;
            this.email = email;
            this.phone = phone;
            this.nickname = nickname;
            this.location = location;
            this.profile_image = profile_image;
            this.manner_temp = manner_temp;
            this.auth = auth;
            this.category = category;
            this.birth = birth;
            this.level = level;
    }
}
