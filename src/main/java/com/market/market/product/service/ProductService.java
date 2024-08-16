package com.market.market.product.service;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;

import com.market.market.member.dto.LocationDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.product.dto.ProductDto;
import com.market.market.product.entity.Product;
import com.market.market.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mysql.cj.protocol.x.OkBuilder;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProductService {

    private static String uploadDir = "C:/market/images/";

    @Autowired
    ProductRepository productRepository;

    private Map<String, Object> respoonseMap = new HashMap<>();

    public Map<String, Object> writeProduct(Map<String,Object> body)
    {

        System.out.println("Body : "+body.toString());
        
        try{
            LocationDto locationDto = LocationDto.builder()
                    .address(body.get("address").toString())
                    .latitude((double) body.get("latitude"))
                    .longitude((double)body.get("longitude"))
                    .jibun_address(body.get("jibun_address").toString())
                    .build();


            List<String> category = (List)body.get("category");
            int price = Integer.parseInt(body.get("price").toString());
            String content = body.get("content").toString();
            String title = body.get("title").toString();
            String id = body.get("reg_member").toString();
    
            // 현재 시간의 LocalDateTime을 가져옴
            LocalDateTime localDateTime = LocalDateTime.now();
    
            // LocalDateTime을 Date로 변환
            Date reg_date = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());

            //파일 업로드 및 경로 저장
            List<String> uploadPath = imageUpload((List<MultipartFile>)body.get("product_image"));
    
            ProductDto productDto = ProductDto.builder()
                    .title(title)
                    .price(price)
                    .content(content)
                    .category(category)
                    .product_image(uploadPath)
                    .location(locationDto)                
                    .reg_date(reg_date)
                    .build();
    
            Member member =Member.toEntity(MemberDto.builder().id(id).build());
    
            productRepository.save(Product.toEntity(productDto,member));

            System.out.println("====물품등록성공====");
            respoonseMap.put("status", "200");
        }catch(Exception e)
        {
            System.out.println("====물품등록실패====");
            System.out.println("에러 : "+e.getMessage());
            respoonseMap.put("status", "400");
        }

       return respoonseMap;
    }



    public List<String> imageUpload(List<MultipartFile> files)
    {
        List<String> uploadPath = new ArrayList<>();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");

        try {


            File uploadDirFile = new File(uploadDir);

            if (!uploadDirFile.exists()) {
                boolean dirsCreated = uploadDirFile.mkdirs();

                if (!dirsCreated) {
                    throw new IOException("디렉터리 생성 실패: " + uploadDir);
                }
            }

            for (MultipartFile file : files) {

                String currentTime = sdf.format(new Date());
                String originalFilename = file.getOriginalFilename();
                String fileExtension = "";
                if (originalFilename != null && originalFilename.contains(".")) {
                    fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
                }

                String uuid = UUID.randomUUID().toString();
                String newFilename = currentTime+"_"+uuid + fileExtension;

                String filePath = uploadDir + newFilename;

                file.transferTo(new File(filePath));

                uploadPath.add(filePath);
            }

        } catch (IOException e) {
            e.printStackTrace();
            // 예외 처리 로직을 추가합니다.
        }

        return uploadPath;
    }

}
