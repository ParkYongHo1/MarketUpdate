package com.market.market.controller;

import org.springframework.web.bind.annotation.RestController;

import com.market.market.dto.User;
import com.market.market.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;    

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        System.out.println("로그인 진입");
        System.out.println("userEmail : " + user.getUserEmail() + " userPassword : " + user.getUserPassword());
        User loginResult = userService.login(user.getUserEmail(), user.getUserPassword());
        System.out.println("로그인 결과: " + loginResult);
        return loginResult; // 로그인 결과로 유저 객체 반환
    }
    
    @GetMapping("/user/fetchEmail")
    public List<String> fetchEmail() {
        System.out.println("모든 유저 이메일 호출 진입");
        System.out.println(userService.getAllUserEmails());
        return userService.getAllUserEmails();
    }
    
    @PostMapping("/user/signup")
    public String signup(@RequestBody User user) {
        System.out.println("회원가입 진입");
        System.out.println("userEmail : " + user.getUserEmail() + " userPassword : " + user.getUserPassword());
        
        return "hi";
    }


    @GetMapping("/user/test")
    public List<String> test() {
        System.out.println("모든 유저 이메일 호출 진입2");
        System.out.println(userService.getAllUserEmails());
        return userService.getAllUserEmails();
    }
}
