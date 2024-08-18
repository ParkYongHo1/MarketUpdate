package com.market.market.product.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.market.market.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
            System.out.println("======RequestIMAGE======"+product_image.toString());
            System.out.println("Address: " + address);
            System.out.println("Category: " + category.toString());
            System.out.println("Content: " + content);
            System.out.println("Jibun Address: " + jibun_address);
            System.out.println("Latitude: " + latitude);
            System.out.println("Longitude: " + longitude);
            System.out.println("Price: " + price);
            System.out.println("Reg_member: " + reg_member);
            System.out.println("Title: " + title);
    
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


    // @PostMapping(value = "/image")
    // public Map<String, Object> imageUpload(@RequestParam Map<String, MultipartFile> files)
    // {
    //    productService.imageUpload(files);
    //    return resultMap;
    // }
}
