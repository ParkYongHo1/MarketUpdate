package com.market.market.member.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.member.repository.MemberRepository;

@Service
public class AuthService {

    //JPA 사용예제
    @Autowired
    MemberRepository memberRepository;

    public Map<String,String> insertTest(Map<String,String> body)
    {

        //결과를 return        
        Map<String,String> resultMap = new HashMap<>();

        //DTO 세팅
        MemberDto memberDto = MemberDto.builder()
        .id(body.get("id"))
        .password(body.get("password"))
        .email(body.get("email"))
        .nickname(body.get("nickname")).build();

        
        //DTO -> Entity 변환
        Member member = Member.toEntity(memberDto);

        System.out.println("인서트 값 : "+member.toString());

        //Repository로 CRUD
        memberRepository.save(member);

        //결과값 세팅
        resultMap.put("STATUS", "200");
        resultMap.put("MESSAGE", "SUCCESS");

        return resultMap;
    }


    

}
