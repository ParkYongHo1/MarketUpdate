package com.market.market.member.dto;

import com.market.market.member.entity.RefreshToken;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RefreshTokenDto {
    
    String key;

    String value;

    public static RefreshTokenDto toDto(RefreshToken entity)
    {
        return RefreshTokenDto.builder()
        .key(entity.getKey())
        .value(entity.getValue())
        .build();
    }

    public RefreshTokenDto updateValue(String token) {
        this.value = token;
        return this;
    }
}
