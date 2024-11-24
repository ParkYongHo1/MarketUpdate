package com.market.market.product.entity;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.product.dto.ProductDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "product")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_seq")
    private Long productSeq;

    @Column(length = 30)
    private String title;

    @Column(length = 300)
    private String content;

    @Column(name="reg_date")
    private Date regDate;

    @Column(columnDefinition = "TEXT", name="product_image")
    private String productImage;

    @Column(name="view_cnt")
    private int viewCnt;

    @Column(name="like_cnt")
    private int likeCnt;

    @Column
    private int price;

    @Column
    private String address;

    @Column(name="jibun_address")
    private String jibunAddress;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column(name="product_status")
    private int productStatus;

    @Column(length = 100)
    private String category;

   
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_id",nullable=false)
    private Member member;


    public static Product toEntity(ProductDto dto){
        String imagePath = "";
        String category = "";

        Member member = Member.builder().id(dto.getMember_id()).build();

        try {          
           if (dto.getCategory() != null){
               category = dto.getCategory().toString();
           }

           if(dto.getProduct_image() != null){
               imagePath = dto.getProduct_image().toString();
           }

       } catch (Exception e) {
           System.out.println("Error Message : "+e.getMessage());           
       }

       return Product.builder()
       .productSeq(dto.getProduct_seq())
       .title(dto.getTitle())
       .content(dto.getContent())
       .regDate(dto.getReg_date())
       .productImage(imagePath)
       .viewCnt(dto.getView_cnt())
       .likeCnt(dto.getLike_cnt())
       .price(dto.getPrice())
       .address(dto.getLocation().getAddress())
       .jibunAddress(dto.getLocation().getJibun_address())
       .latitude(dto.getLocation().getLatitude())
       .longitude(dto.getLocation().getLongitude())
       .productStatus(dto.getProduct_status())
       .category(category)
       .member(member)
       .build();
    }

}
