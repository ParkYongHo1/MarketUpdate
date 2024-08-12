package com.market.market.product.controller;

import java.util.HashMap;
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
    public Map<String, Object> writeProduct(@RequestBody Map<String,Object> body)
    {

        System.out.println("======RequestBody======"+body.toString());

       resultMap = productService.writeProduct(body); 
       return resultMap;
    }

    // @PostMapping(value = "/image")
    // public Map<String, Object> imageUpload(@RequestParam Map<String, MultipartFile> files)
    // {
    //    productService.imageUpload(files);
    //    return resultMap;
    // }
}
