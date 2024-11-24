package com.market.market.pagination.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.market.market.product.entity.Product;

@Repository
public interface PaginationRepository extends JpaRepository<Product, Long> {
    
    @Query(value = "SELECT * FROM (SELECT p.*, ROW_NUMBER() OVER (ORDER BY p.reg_date DESC) AS row_num FROM Product p WHERE p.category LIKE %:category%) AS numbered WHERE row_num BETWEEN :start AND :end", nativeQuery = true)
    List<Product> getPaginationTime(
        @Param("category") String category,
        @Param("start") int start,
        @Param("end") int end
    );

    @Query(value = "SELECT * FROM (SELECT p.*, ROW_NUMBER() OVER (ORDER BY p.like_cnt DESC) AS row_num FROM Product p WHERE p.category LIKE %:category%) AS numbered WHERE row_num BETWEEN :start AND :end", nativeQuery = true)
    List<Product> getPaginationLike(
        @Param("category") String category,
        @Param("start") int start,
        @Param("end") int end
    );

    @Query(value = "SELECT * FROM (SELECT p.*, ROW_NUMBER() OVER (ORDER BY p.view_cnt DESC) AS row_num FROM Product p WHERE p.category LIKE %:category%) AS numbered WHERE row_num BETWEEN :start AND :end", nativeQuery = true)
    List<Product> getPaginationView(
        @Param("category") String category,
        @Param("start") int start,
        @Param("end") int end
    );
    
}
