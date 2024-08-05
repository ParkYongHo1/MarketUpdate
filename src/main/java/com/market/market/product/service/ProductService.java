package com.market.market.product.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.market.market.member.dto.LocationDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.product.dto.ProductDto;
import com.market.market.product.entity.Product;
import com.market.market.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mysql.cj.protocol.x.OkBuilder;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    private Map<String, Object> respoonseMap = new HashMap<>();

    public void writeProduct(Map<String,Object> body)
    {
        Map<String,Object> locations = (Map)body.get("location");

        LocationDto locationDto = LocationDto.builder()
                .address(locations.get("address").toString())
                .latitude(locations.get("latitude").toString())
                .longitude(locations.get("longitude").toString())
                .jibunAddress(locations.get("jibunAddress").toString())
                .build();

        List<String> product_image = (List)body.get("product-image");
        List<String> category = (List)body.get("category");
        int price = (int)body.get("price");
        String content = body.get("content").toString();
        String title = body.get("title").toString();
        String id = body.get("reg-member").toString();

        // 현재 시간의 LocalDateTime을 가져옴
        LocalDateTime localDateTime = LocalDateTime.now();

        // LocalDateTime을 Date로 변환
        Date reg_date = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());


        ProductDto productDto = ProductDto.builder()
                .title(title)
                .price(price)
                .content(content)
                .category(category)
                .product_image(product_image)
                .locationDto(locationDto)
                .reg_date(reg_date)
                .build();

        Member member =Member.toEntity(MemberDto.builder().id(id).build());

        productRepository.save(Product.toEntity(productDto,member));

        System.out.println("DTO : "+productDto.toString());
    }

}
