package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.member.service.MyPageService;

@RestController
@RequestMapping(value = "/mypage")
public class MyPageController {
    
    @Autowired
    MyPageService mypageService;

    Map<String, Object> responseMap = new HashMap<>();

    @GetMapping("/my-product")
    public Map<String,Object> MyProduct(@RequestParam(name="id") String id) {
        responseMap = mypageService.getMyProduct(id);
        System.out.println("responseMap" + responseMap);
        return responseMap;
    }

}
