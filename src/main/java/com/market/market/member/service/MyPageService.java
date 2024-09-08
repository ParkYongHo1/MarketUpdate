package com.market.market.member.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.member.repository.MemberRepository;
import com.market.market.product.entity.Product;
import com.market.market.product.repository.ProductRepository;

@Service
public class MyPageService {
    
    @Autowired
    ProductRepository productRepository;

    @Autowired
    MemberRepository memberRepository;

    public Map<String,Object> getMyProduct(String id){
        List<Map<String, Object>> resultList = new ArrayList<>();
        Map<String,Object> resultMap = new HashMap<>();
    
        List<Product> productList = productRepository.findByMember_Id(id);
        String nickname = memberRepository.getNickname(id);
        resultMap.put("nickname", nickname);

        for (int i = 0; i < productList.size(); i++) {
            Map<String, Object> productMap = new HashMap<>();
            productMap.put("status", "200");
            productMap.put("product-image", productList.get(i).getProduct_image());
            productMap.put("title", productList.get(i).getTitle());
            productMap.put("address", productList.get(i).getAddress());
            productMap.put("price", productList.get(i).getPrice());
            productMap.put("regtime", productList.get(i).getReg_date());
            
            resultList.add(productMap);
        }
        resultMap.put("products", resultList);

        return resultMap;
    }
}
