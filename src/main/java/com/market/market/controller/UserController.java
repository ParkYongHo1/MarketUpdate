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
@RequestMapping("api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        System.out.println("로그인 진입");
        User loggedInUser = userService.login(user.getUserEmail(), user.getUserPassword());
        System.out.println(loggedInUser);
        if(loggedInUser != null){
            return "success";
        }else{
            return "fail";
        }
    }
    
    @GetMapping("/user/fetchEmail")
    public List<String> fetchEmail() {
        System.out.println(userService.getAllUserEmails());
        return userService.getAllUserEmails();
    }
    
}
