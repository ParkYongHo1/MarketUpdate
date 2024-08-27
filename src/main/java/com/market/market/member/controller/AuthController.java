package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.market.market.member.dto.EmailCheckDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.dto.PhoneCheckDto;
import com.market.market.member.service.AuthService;
import com.market.market.member.service.MailService;
import com.market.market.member.service.SmsService;



@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    MailService mailService;
    
    @Autowired 
    SmsService smsService;

    @Autowired
    AuthService authService;
    
    private Map<String,String> resultMap = new HashMap<>();
    Map<String, Object> responseMap = new HashMap<>();


    @PostMapping(value = "/fetch-email")    
    public Map<String,Object> fetchEmail(@RequestBody MemberDto memberDto){
    
        String email = memberDto.getId();
        mailService.fetchEmail(email);

        responseMap.put("status", "200");
        return responseMap;
    }

    @PostMapping("/checknum-email")
    public Map<String,Object> CheckNumEmail(@RequestBody @Valid EmailCheckDto emailCheckDto){
         Boolean Checked=mailService.CheckAuthNum(emailCheckDto.getId(),emailCheckDto.getCheckNum());
        if(Checked){
            responseMap.put("status", "200");
            return responseMap;
        }
        else{
            responseMap.put("status", "405");
            return responseMap;
        }
    }

    @PostMapping("/fetch-phone")
    public Map<String, Object> fetchPhone(@RequestBody MemberDto memberDto){
        String phone = memberDto.getPhone();
        smsService.fetchPhone(phone);
        
    
        responseMap.put("status", "200");
        return responseMap;
    }

    @PostMapping("/checknum-phone")
    public Map<String,Object> CheckNumPhone(@RequestBody @Valid PhoneCheckDto phoneCheckDto){
         Boolean Checked=smsService.CheckAuthNum(phoneCheckDto.getPhone(),phoneCheckDto.getCheckNum());
        if(Checked){
            responseMap.put("status", "200");
            return responseMap;
        }
        else{
            responseMap.put("status", "405");
            return responseMap;
        }
    }

    


}