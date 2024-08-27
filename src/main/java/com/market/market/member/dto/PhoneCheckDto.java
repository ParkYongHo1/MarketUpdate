package com.market.market.member.dto;


import javax.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class PhoneCheckDto {
   
    @NotEmpty(message = "전화번호를 입력해 주세요")
    private String phone;

    @NotEmpty(message = "인증 번호를 입력해 주세요")
    private String checkNum;
}