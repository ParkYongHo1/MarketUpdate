package com.market.market.product.controller;

import java.util.HashMap;
import java.util.Map;

import com.market.market.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/write")
    public Map<String, Object> writeProduct(@RequestBody Map<String,Object> body)
    {
       Map<String, Object> resultMap = new HashMap<>();
       productService.writeProduct(body);

        return resultMap;
    }
}
