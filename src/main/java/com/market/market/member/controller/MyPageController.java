package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
    public Map<String,Object> MyProduct(@RequestParam(name="email") String id, @RequestParam(name="page") int page, @RequestParam(name = "offset")int offset) {
        responseMap = mypageService.getMyProduct(id, page, offset);
        
        return responseMap;
    }

    @GetMapping("/like-product")
    public Map<String,Object> LikeProduct(@RequestParam(name="email") String id, @RequestParam(name="page") int page, @RequestParam(name = "offset")int offset) {
        System.out.println("LikeProduct 진입");
        responseMap = mypageService.getLikeProduct(id, page, offset);
        
        return responseMap;
    }

    @GetMapping("/page-in")
    public Map<String,Object> PageIn(@RequestParam(name="email") String id){
        responseMap = mypageService.getPageIn(id);
        
        return responseMap;
    }


}
