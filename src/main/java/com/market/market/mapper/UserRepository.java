package com.market.market.mapper;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.market.market.dto.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT s FROM User s WHERE s.userEmail =?1")
    Optional<User> findByUserEmail(String userEmail);

    @Query("SELECT s FROM User s WHERE s.userPassword =?1")
    Optional<User> findByUserPassword(String userPassword);

    @Query("SELECT s.userEmail FROM User s")
    List<String> findAllUserEmails();

}