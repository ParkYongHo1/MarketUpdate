package com.market.market.product.entity;

import com.market.market.member.entity.Member;

import com.market.market.product.dto.ProductLikeDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "product_like")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long like_seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id",nullable=false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="product_seq",nullable=false)
    private Product product;

    public static ProductLike toEntity(ProductLikeDto dto)
    {
        Member member  = Member.builder().id(dto.getMember_id()).build();
        Product product = Product.builder().productSeq(dto.getProduct_seq()).build();

        return ProductLike.builder()
                .like_seq(dto.getLike_seq())
                .member(member)
                .product(product)
                .build();
    }

}
