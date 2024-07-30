package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import javax.swing.JWindow;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.market.market.member.dto.JwtDto;
import com.market.market.member.service.MemberService;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping(value = "/login")
    public @ResponseBody Map<String,Object> login(@RequestBody Map<String,Object> body)
    {

        System.out.println("====Request Body====" + body.toString());

       //Map<String,Object> resultMap = new HashMap<>();
        
        Map<String,Object> responseMap = memberService.login(body);


        // resultMap.put("access_token" , responseMap.get("token").getAccessToken());
        // resultMap.put("refresh_token",jwtDto.getRefreshToken());
        // resultMap.put("token_expire",Long.toString(jwtDto.getAccessTokenExpiresIn()));

        return responseMap;
    }

    @RequestMapping(value="/test", method = RequestMethod.POST)
    public void test()
    {
        System.out.println("gd");
    }

}
