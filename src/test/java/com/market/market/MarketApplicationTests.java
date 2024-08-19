package com.market.market;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;
import com.market.market.member.entity.Member;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.market.market.member.repository.MemberRepository;
import com.market.market.member.service.MemberService;

@SpringBootTest
class MarketApplicationTests {

	 @Mock
    private MemberRepository memberRepository;

    @InjectMocks
    private MemberService memberService;

    public MarketApplicationTests() {
        MockitoAnnotations.openMocks(this);
    }

}
