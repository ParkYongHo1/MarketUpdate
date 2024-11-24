package com.market.market.pagination.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.market.pagination.dto.PaginationDto;
import com.market.market.pagination.repository.PaginationRepository;
import com.market.market.product.dto.ProductDto;
import com.market.market.product.entity.Product;

@Service
public class PaginationService {

    @Autowired
    PaginationRepository paginationRepository;

    private Map<String, Object> respoonseMap = new HashMap<>();

    public Map<String, Object> getPagination(String filter, String category, int page, int offset){
        PaginationDto paginationDto = caculatePage(page, offset);
        int start =  paginationDto.getStartIndex();
        int end = paginationDto.getEndIndex();
        List<ProductDto> productList = new ArrayList<>();

        int totalPage = totalPageCount(offset);

        if(filter.equals("time")){
            try{
               
                for(Product product : paginationRepository.getPaginationTime(category, start, end))
                {
                    productList.add(ProductDto.toDto(product));
                }

                respoonseMap.put("product", productList);
                respoonseMap.put("status", 200);
            }catch(Exception e){
                respoonseMap.put("status", 400);
            }
        }else if(filter.equals("like")){
            try{

                for(Product product : paginationRepository.getPaginationLike(category, start, end))
                {
                    productList.add(ProductDto.toDto(product));
                }
               
                respoonseMap.put("product", productList);
                respoonseMap.put("status", 200);
            }catch(Exception e){
                respoonseMap.put("status", 400);
            }
        }else if(filter.equals("view")){
            try{
                for(Product product : paginationRepository.getPaginationView(category, start, end))
                {
                    productList.add(ProductDto.toDto(product));
                }
              
                respoonseMap.put("product", productList);
                respoonseMap.put("status", 200);
            }catch(Exception e){
                respoonseMap.put("status", 400);
            }
        }
        respoonseMap.put("totalPage", totalPage);
        return respoonseMap;
    }


    private PaginationDto caculatePage(int page, int offset){
        PaginationDto paginationDto = new PaginationDto();

        int startIndex = (page - 1) * offset + 1;
        int endIndex = page * offset;

        paginationDto.setStartIndex(startIndex);
        paginationDto.setEndIndex(endIndex);

        return paginationDto;
    }

    private int totalPageCount(int offset){
        long totalItems = paginationRepository.count();  
        return (int) ((totalItems + offset - 1) / offset); 
    }



}