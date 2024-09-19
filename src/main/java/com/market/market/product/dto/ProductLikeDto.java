package com.market.market.product.dto;

import com.market.market.product.entity.ProductLike;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductLikeDto {

    private Long like_seq;

    private Long product_seq;

    private String member_id;

    public static ProductLikeDto toDto(ProductLike entity)
    {
        return ProductLikeDto.builder()
                .like_seq(entity.getLike_seq())
                .product_seq(entity.getProduct().getProductSeq())
                .member_id(entity.getMember().getId())
                .build();
    }
}
