package com.market.market.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/product")
        public class ProductController {
        @PostMapping("/image")
        public String handleImageUpload(@RequestParam("images") MultipartFile[] images) {
            for (MultipartFile image : images) {
                // 이미지 이름과 크기를 출력합니다.
                System.out.println("Image Name: " + image.getOriginalFilename());
                System.out.println("Image Size: " + image.getSize());
            }
            return "Images uploaded successfully!";
        }
}
