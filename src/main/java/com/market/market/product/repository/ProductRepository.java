package com.market.market.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.market.market.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p ORDER BY p.reg_date DESC")
    List<Product> findTop10ByOrderByRegDateDesc();

    @Query("SELECT p FROM Product p WHERE p.category LIKE %:category%")
    List<Product> findByCategoryContaining(@Param("category") String category);
    

    List<Product> findByMember_Id(String id);

} 