package com.market.market.product.service;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import com.market.market.member.dto.LocationDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.entity.Member;
import com.market.market.member.repository.MemberRepository;
import com.market.market.product.dto.ProductDto;
import com.market.market.product.dto.ProductLikeDto;
import com.market.market.product.entity.Product;
import com.market.market.product.entity.ProductLike;
import com.market.market.product.repository.ProductLikeRepository;
import com.market.market.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.mysql.cj.protocol.x.OkBuilder;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Service
public class ProductService {

    @Value("${spring.file.path}")
    private String uploadDir;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    ProductLikeRepository productLikeRepository;

    private Map<String, Object> respoonseMap = new HashMap<>();

    public Map<String, Object> writeProduct(Map<String,Object> body)
    {
        respoonseMap.clear();

        log.info("Body : "+body.toString());
        
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
                    .member_id(id)
                    .build();
    
            //Member member =Member.toEntity(MemberDto.builder().id(id).build());
    
            productRepository.save(Product.toEntity(productDto));

            log.info("====물품등록성공====");
            respoonseMap.put("status", "200");
        }catch(Exception e)
        {
            log.info("====물품등록실패====");
            log.info("에러 : "+e.getMessage());
            respoonseMap.put("status", "400");
        }

       return respoonseMap;
    }

    public Map<String, Object> productDetail(Long productSeq)
    {
        respoonseMap.clear();

        try{
            Product product= productRepository.findById(productSeq).orElseThrow();
            ProductDto productDto = ProductDto.toDto(product);

            int viewCnt = productDto.getView_cnt() + 1;
            productDto.setView_cnt(viewCnt);

            productRepository.save(Product.toEntity(productDto));

            Member member = memberRepository.findById(product.getMember().getId()).orElseThrow();

            MemberDto memberDto = MemberDto.toDto(member);

            log.info("productDto : "+productDto.toString());
            log.info("memberDto : "+memberDto.toString());

            respoonseMap.put("status","200");
            respoonseMap.put("product", productDto);
            respoonseMap.put("member", memberDto);

        }catch(Exception e)
        {
            log.info("Error Message : ",e.getMessage());
            respoonseMap.put("status", "400");
        }
        
        return respoonseMap;
    }


    public List<String> imageUpload(List<MultipartFile> files)
    {
        List<String> uploadPath = new ArrayList<>();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");

        try {

            log.info("파일 경로 : "+uploadDir);

            File uploadDirFile = new File(uploadDir);

            if (!uploadDirFile.exists()) {
                boolean dirsCreated = uploadDirFile.mkdirs();

                if (!dirsCreated) {
                    throw new IOException("디렉터리 생성 실패: " + uploadDir);
                }
            }

            for (MultipartFile file : files) {
                DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss_SSSSSSSSS");
                String currentTime = LocalDateTime.now().format(dtf);
                String originalFilename = file.getOriginalFilename();
                String fileExtension = "";
                if (originalFilename != null && originalFilename.contains(".")) {
                    fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
                }

                String uuid = UUID.randomUUID().toString().substring(0,8);

                String newFilename = currentTime+"_"+uuid + fileExtension;

                String filePath = uploadDir + newFilename;

                file.transferTo(new File(filePath));

                uploadPath.add(newFilename);
           }

        } catch (IOException e) {
            log.info("Error Message : "+e.getMessage());
        }

        return uploadPath;
    }

    public List<ProductDto> getRecentProducts() {
        List<Product> products = productRepository.findTop5ByOrderByRegDateDesc();
        return products.stream().map(product -> mapToDto(product)).collect(Collectors.toList());
    }

     // 카테고리를 포함하는 상품 조회 서비스
    public List<ProductDto> getProductsByCategory(String category) {
        List<Product> products = productRepository.findTop5ByCategoryContainingOrderByRegDateDesc(category);

        return products.stream().map(product -> mapToDto(product)).collect(Collectors.toList());
    }

    private ProductDto mapToDto(Product product) {

        LocationDto locationDto = new LocationDto();
        locationDto.setAddress(product.getAddress());
        locationDto.setLatitude(product.getLatitude());
        locationDto.setJibun_address(product.getJibunAddress());
        locationDto.setLongitude(product.getLongitude());

        Date regDate = product.getRegDate();

        String productImages = product.getProductImage().replace("[", "").replace("]", "");
    
        // Product 엔티티를 ProductDto로 매핑
        return ProductDto.builder()
                .product_seq(product.getProductSeq())
                .title(product.getTitle())
                .reg_date(regDate) // 변환된 Date 객체를 전달
                .product_image(Arrays.asList(productImages.split(",")))
                .price(product.getPrice())
                .location(locationDto)
                .category(List.of(product.getCategory().split(","))) // 가정: 카테고리가 콤마로 구분된 문자열
                .build();
    }


    public Map<String,Object> productLike(Map<String,Object> body)
    {
        respoonseMap.clear();

        try{
            Long productSeq = Long.parseLong(body.get("product-seq").toString());
            String memberId = (String)body.get("email");

            ProductLikeDto dto = new ProductLikeDto();

            dto.setProduct_seq(productSeq);
            dto.setMember_id(memberId);

            ProductLike entity = ProductLike.toEntity(dto);

            Product productEntity = Product.builder().productSeq(productSeq).build();
            Member memberEntity = Member.builder().id(memberId).build();

            Long likeSeq = productLikeRepository.countByProductSeqAndMemberId(productEntity,memberEntity);

            if(likeSeq == null)
            {
                productLikeRepository.save(entity);
            }else{
                productLikeRepository.deleteById(likeSeq);
            }

            updateLikeCnt(productSeq);

            respoonseMap.put("status","200");
        }catch (Exception e)
        {
            respoonseMap.put("status","400");
            log.info("Error Message : "+e.getMessage());
        }

        return respoonseMap;
    }


    public void updateLikeCnt(Long productSeq)
    {
        try{
            Long likeCnt = productLikeRepository.countByProduct_ProductSeq(productSeq);

            Product product = productRepository.findById(productSeq).orElseThrow();

            ProductDto productDto = ProductDto.toDto(product);

            productDto.setLike_cnt(likeCnt.intValue());
            productDto.setProduct_seq(productSeq);

            productRepository.save(Product.toEntity(productDto));

            log.info("좋아요 개수 : "+productDto.getLike_cnt());

        } catch (Exception e)
        {
            log.info("Error Message",e.getMessage());
        }

    }


}
