package com.market.market.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/member")
public class MemberController {

    @RequestMapping(value = "/test")
    public void test()
    {
        System.out.println("member 테스트");
    }

}
