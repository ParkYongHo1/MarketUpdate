package com.market.market.member.controller;

import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.member.repository.MemberRepository;
import com.market.market.member.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    private Map<String,String> resultMap = new HashMap<>();

    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public @ResponseBody Map<String,String> test(@RequestBody Map<String,String> body)
    {
        resultMap = authService.insertTest(body);
        return resultMap;
    }

}