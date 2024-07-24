package com.market.market.member.controller;

import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    //JPA 사용예제
    @Autowired
    MemberRepository memberRepository;

    @RequestMapping(value = "/test")
    public void test()
    {

        MemberDto memberDto = MemberDto.builder()
        .id("test4")
        .password("1234")
        .email("test@naver.com")
        .phone("01012345678")
        .nickname("테스트")
        .build();


        //Builder를 사용한 Insert
        Member member = Member.toEntity(memberDto);

        memberRepository.save(member);

        //전체 조회
        List<Member> memberList = memberRepository.findAll();

        System.out.println("모든 멤버 리스트 : "+memberList);
    }

}