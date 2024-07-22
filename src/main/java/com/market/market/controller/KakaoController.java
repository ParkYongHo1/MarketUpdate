package com.market.market.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.dto.Member;
import com.market.market.dto.User;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class KakaoController {

    @PostMapping("/kakaologin")
    public String login(@RequestBody Member user) {
       
        System.out.println("Received user email: " + user.getEmail());
        System.out.println("Received user image: " + user.getProfile_image());
        return user.getEmail(); // 로그인 결과로 유저 객체 반환
    }
}
