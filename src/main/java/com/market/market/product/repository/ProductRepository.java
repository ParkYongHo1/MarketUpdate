package com.market.market.product.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.market.market.member.entity.Member;
import com.market.market.product.entity.Product;
import com.market.market.product.entity.ProductLike;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT * FROM product p ORDER BY p.reg_date DESC LIMIT 5",nativeQuery = true)
    List<Product> findTop5ByOrderByRegDateDesc();

    @Query(value = "SELECT * FROM product p WHERE p.category LIKE %:category% ORDER BY p.reg_date DESC DESC LIMIT 5",nativeQuery = true)
    List<Product> findTop5ByCategoryContainingOrderByRegDateDesc(String category);

    @Query(value = "SELECT * FROM (SELECT p.*, ROW_NUMBER() OVER (ORDER BY p.reg_date DESC) AS row_num FROM Product p WHERE p.member_id =:id) AS numbered WHERE row_num BETWEEN :start AND :end", nativeQuery = true)
    List<Product> findByMember_Id(@Param("id")String id, @Param("start")int start, @Param("end")int end);
    
    @Query(value = """
        SELECT * FROM (
            SELECT p.*, ROW_NUMBER() OVER (ORDER BY p.reg_date DESC) AS row_num 
            FROM Product p
            WHERE p.product_seq =:product_seq
        ) AS numbered 
        WHERE row_num BETWEEN :start AND :end
        """, nativeQuery = true)
        Product findLikeByProduct_seq(@Param("product_seq")Long product_seq, @Param("start")int start, @Param("end")int end);

    @Query(value="SELECT COUNT(*) FROM Product p WHERE p.member_id =:id", nativeQuery=true)
    long countMyProducts(@Param("id") String id);
} 