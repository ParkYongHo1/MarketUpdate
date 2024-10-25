package com.market.market.product.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.market.market.product.dto.ProductDto;
import com.market.market.product.entity.Product;
import com.market.market.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/product")
public class ProductController {

    @Autowired
    ProductService productService;

    Map<String, Object> resultMap = new HashMap<>();

    @PostMapping(value = "/write")
    public Map<String,Object> writeProduct(@RequestPart("product_image") List<MultipartFile> product_image,
                                @RequestParam("address") String address,
                                @RequestParam("category") List<String> category,
                                @RequestParam("content") String content,
                                @RequestParam("jibunAddress") String jibun_address,
                                @RequestParam("latitude") double latitude,
                                @RequestParam("longitude") double longitude,
                                @RequestParam("price") String price,
                                @RequestParam("reg_member") String reg_member,
                                @RequestParam("title") String title)
        {
            log.info("======RequestIMAGE======"+product_image.toString());
            log.info("Address: " + address);
            log.info("Category: " + category.toString());
            log.info("Content: " + content);
            log.info("Jibun Address: " + jibun_address);
            log.info("Latitude: " + latitude);
            log.info("Longitude: " + longitude);
            log.info("Price: " + price);
            log.info("Reg_member: " + reg_member);
            log.info("Title: " + title);
    
            Map<String, Object> productData = new HashMap<>();
            productData.put("address",address);
            productData.put("category",category);
            productData.put("content",content);
            productData.put("jibun_address",jibun_address);
            productData.put("latitude",latitude);
            productData.put("longitude",longitude);
            productData.put("price",price);
            productData.put("reg_member",reg_member);
            productData.put("title",title);
            productData.put("product_image",product_image);
    
           resultMap = productService.writeProduct(productData);
           return resultMap;
        }


    @GetMapping(value = "/detail")
    public @ResponseBody Map<String,Object> productDetail(@RequestParam(name = "product_seq") String productSeq){
        log.info("productSeq : "+productSeq);

        resultMap = productService.productDetail(Long.parseLong(productSeq));

        return resultMap;
    }

    @GetMapping("/select")
    public List<ProductDto> getRecentProducts() {
        return productService.getRecentProducts(10);
        
    }

    @GetMapping("/select-category")
      public List<ProductDto> getProductsByCategory(@RequestParam String category) {
        return productService.getProductsByCategory(category);
    }

    @PostMapping("/product-like")
    public @ResponseBody Map<String,Object> productLike(@RequestBody Map<String,Object> body)
    {
        return productService.productLike(body);
    }



}
