package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.market.market.member.dto.MemberDto;
import com.market.market.member.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    Map<String, Object> responseMap = new HashMap<>();

    @PostMapping(value = "/login")
    public @ResponseBody Map<String,Object> login(@RequestBody Map<String,Object> body)
    {

        System.out.println("====Request Body====" + body.toString());
        
        Map<String,Object> responseMap = memberService.login(body);


        System.out.println("응답 값 : "+responseMap.toString());

        return responseMap;
    }

    @PostMapping(value = "/request-token")
    public @ResponseBody Map<String,Object> requestToken(@RequestBody Map<String,String> tokenData){
        Map<String,Object> responseMap = new HashMap<>();
        responseMap = memberService.reissue(tokenData);

        return responseMap;
    }

    @PostMapping(value = "/add-info")
    public @ResponseBody Map<String, Object> adduserinfo(@RequestBody Map<String, Object> body) {
        System.out.println("===Request Body===" + body.toString());

    
        Map<String, Object> resultMap = memberService.adduserinfo(body);
        return resultMap;
    } 

    @PostMapping("/check-nickname")
    public ResponseEntity<Map<String, String>> checkNickname(@RequestBody Map<String, String> body) {
        String nickname = body.get("nickname");
        Map<String, String> response = new HashMap<>();

        if (memberService.isNicknameTaken(nickname)) {
            response.put("status", "400");
            response.put("message", "닉네임이 이미 있습니다.");
        } else {
            response.put("status", "200");
            response.put("message", "닉네임이 사용가능합니다.");
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping(value="/signup")
    public Map<String, Object> signUp(@RequestBody MemberDto memberDto){
        int checked =memberService.signUp(memberDto);

        if(checked == 200){
            responseMap.put("status", "200");
            return responseMap;
        }
        else if(checked == 405){
            responseMap.put("status", "405");
            return responseMap;
        }else{
            responseMap.put("status", "400");
            return responseMap;
        }

    }
}
