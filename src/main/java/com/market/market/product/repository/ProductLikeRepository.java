package com.market.market.product.repository;

import com.market.market.product.entity.ProductLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductLikeRepository extends JpaRepository<ProductLike,Long> {
    Long countByProduct_ProductSeq(Long productSeq);
}
