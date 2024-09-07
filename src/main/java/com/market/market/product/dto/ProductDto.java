package com.market.market.product.dto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.market.market.member.dto.LocationDto;
import com.market.market.member.entity.Member;
import com.market.market.product.entity.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

    private int product_seq;

    private String title;

    private String content;

    private Date reg_date;

    private List<String> product_image;

    private int view_cnt;

    private int like_cnt;

    private int price;

    private LocationDto location;

    private int product_status;

    private List<String> category;

    public static ProductDto toDto(Product entity){
        String imagePath = "";
        String category = "";
        List<String> imagePathList = null;
        List<String> categoryList = null;
        LocationDto locations = new LocationDto();

        try {          

            locations.setAddress(entity.getAddress());
            locations.setJibun_address(entity.getJibun_address());
            locations.setLatitude(entity.getLatitude());
            locations.setLongitude(entity.getLongitude());

           if (entity.getCategory() != null){
               category = entity.getCategory();
               category = category.substring(1, category.length() - 1);
               
               categoryList = new ArrayList<>(Arrays.asList(category.split(", ")));
           }

           if(entity.getProduct_image() != null){
               imagePath = entity.getProduct_image();

               imagePath = imagePath.substring(1, imagePath.length() - 1);
               
               imagePathList = new ArrayList<>(Arrays.asList(imagePath.split(", ")));
           }

       } catch (Exception e) {
           System.out.println("Error Message : "+e.getMessage());           
       }

        return ProductDto.builder()
       .title(entity.getTitle())
       .content(entity.getContent())
       .reg_date(entity.getReg_date())
       .product_image(imagePathList)
       .location(locations)
       .view_cnt(entity.getView_cnt())
       .like_cnt(entity.getLike_cnt())
       .price(entity.getPrice())
       .product_status(entity.getProduct_status())
       .category(categoryList)
       .build();
       
    }

}
