package com.market.market.member.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.market.market.member.dto.RefreshTokenDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@Entity
@Table(name="refresh_token")
@ToString
@Builder
@AllArgsConstructor
public class RefreshToken {

    @Id
    @Column(name = "rt_key")
    private String key;

    @Column(name ="rt_value")
    private String value;

    public static RefreshToken toEntity(RefreshTokenDto dto)
    {
        return RefreshToken.builder()
        .key(dto.getKey())
        .value(dto.getValue())
        .build();
    }

}
