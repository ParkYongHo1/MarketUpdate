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

    @Autowired
    MemberRepository memberRepository;

    public String searchPw(String id){

        String pw = memberRepository.findPwById(id);

        return pw;
    }

}
