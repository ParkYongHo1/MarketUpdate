package com.market.market.member.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class JwtDto {
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private long accessTokenExpiresIn;
}
