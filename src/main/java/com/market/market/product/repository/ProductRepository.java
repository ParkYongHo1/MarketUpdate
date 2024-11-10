package com.market.market.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.market.market.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT * FROM product p ORDER BY p.reg_date DESC LIMIT 5",nativeQuery = true)
    List<Product> findTop5ByOrderByRegDateDesc();

    @Query(value = "SELECT * FROM product p WHERE p.category LIKE %:category% ORDER BY p.reg_date DESC DESC LIMIT 5",nativeQuery = true)
    List<Product> findTop5ByCategoryContainingOrderByRegDateDesc(String category);

    List<Product> findByMember_Id(String id);

} 