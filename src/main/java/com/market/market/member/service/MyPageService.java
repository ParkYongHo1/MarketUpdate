package com.market.market.member.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.member.repository.MemberRepository;
import com.market.market.pagination.dto.PaginationDto;
import com.market.market.product.dto.ProductDto;
import com.market.market.product.entity.Product;
import com.market.market.product.entity.ProductLike;
import com.market.market.product.repository.ProductLikeRepository;
import com.market.market.product.repository.ProductRepository;

@Service
public class MyPageService {
    
    @Autowired
    ProductRepository productRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    ProductLikeRepository productLikeRepository;

    MemberDto memberDto;

    public Map<String,Object> getMyProduct(String id, int page, int offset){
        PaginationDto paginationDto = caculatePage(page, offset);
        int start =  paginationDto.getStartIndex();
        int end = paginationDto.getEndIndex();

        List<Map<String, Object>> resultList = new ArrayList<>();
        Map<String,Object> resultMap = new HashMap<>();
    
        int totalPage = totalPageCount(offset, id);

        List<Product> productList = productRepository.findByMember_Id(id, start, end);
        String nickname = memberRepository.getNickname(id);
        resultMap.put("nickname", nickname);

        for (int i = 0; i < productList.size(); i++) {
            Map<String, Object> productMap = new HashMap<>();
           
            productMap.put("product", ProductDto.toDto(productList.get(i)));
            resultList.add(productMap);
        }

        resultMap.put("products", resultList);
        resultMap.put("totalPage", totalPage);
        return resultMap;
    }

    public Map<String,Object> getLikeProduct(String id, int page, int offset){
        PaginationDto paginationDto = caculatePage(page, offset);
        int start =  paginationDto.getStartIndex();
        int end = paginationDto.getEndIndex();

        List<Map<String, Object>> resultList = new ArrayList<>();
        Map<String,Object> resultMap = new HashMap<>();
        
        List<ProductLike> product_seq = productLikeRepository.getProductSeq(id);
        
        List<Product> productList = new ArrayList<>();
        for(ProductLike like : product_seq)
        {
            productList.add(productRepository.findLikeByProduct_seq(like.getProduct().getProductSeq(), start, end));
        }

        String nickname = memberRepository.getNickname(id);
        resultMap.put("nickname", nickname);

        for (int i = 0; i < productList.size(); i++) {
            Map<String, Object> productMap = new HashMap<>();
           
            productMap.put("product", ProductDto.toDto(productList.get(i)));
            resultList.add(productMap);
        }

        resultMap.put("products", resultList);

        int totalPage = totalLikePageCount(offset, productList.size());

        resultMap.put("totalPage", totalPage);
        return resultMap;
    }



    public Map<String,Object> getPageIn(String id){
        Map<String,Object> resultMap = new HashMap<>();
    
        Optional<Member> memberList = memberRepository.findById(id);
       
        resultMap.put("state", "200");
        resultMap.put("member", memberList);
      

        return resultMap;
    }

    private PaginationDto caculatePage(int page, int offset){
        PaginationDto paginationDto = new PaginationDto();

        int startIndex = (page - 1) * offset + 1;
        int endIndex = page * offset;

        paginationDto.setStartIndex(startIndex);
        paginationDto.setEndIndex(endIndex);

        return paginationDto;
    }

    private int totalPageCount(int offset, String id){
        long totalItems = productRepository.countMyProducts(id);  
        return (int) ((totalItems + offset - 1) / offset); 
    }

    private int totalLikePageCount(int offset, int productsize){
        return (int) ((productsize + offset - 1) / offset); 
    }



}
