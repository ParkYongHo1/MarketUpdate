package com.market.market.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.market.market.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

} 