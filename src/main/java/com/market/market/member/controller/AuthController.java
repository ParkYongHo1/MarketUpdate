package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.hibernate.validator.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.member.dto.EmailCheckDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.service.AuthService;
import com.market.market.member.service.MailService;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @Autowired
    MailService mailService;
    
    private Map<String,String> resultMap = new HashMap<>();

    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public @ResponseBody Map<String,String> test(@RequestBody Map<String,String> body)
    {
        resultMap = authService.insertTest(body);
        return resultMap;
    }

    @RequestMapping(value = "/fetch-email", method = RequestMethod.POST)
    @ResponseBody
    public int fetchEmail(@RequestBody MemberDto memberDto){
        
        String email = memberDto.getEmail();
        mailService.fetchEmail(email);
        return 200;
    }

    @PostMapping("/checknum-email")
    public int CheckNumEmail(@RequestBody @Valid EmailCheckDto emailCheckDto){
       
        Boolean Checked=mailService.CheckAuthNum(emailCheckDto.getEmail(),emailCheckDto.getCheckNum());
        if(Checked){
            return 200;
        }
        else{
            return 405;
        }
    }
}