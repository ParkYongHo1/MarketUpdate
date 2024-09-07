package com.market.market.member.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.market.market.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member,String>{
    Optional<Member> findById(String id);
    boolean existsById(String email);
    boolean existsByNickname(String nickname); // 닉네임 중복 메서드
    
    @Query("SELECT m.password from Member m WHERE m.id = :id")
    String findPwById(@Param("id")String id);

    @Query("SELECT COUNT(m) from Member m WHERE m.phone = :phone")
    int searchByPhone(@Param("phone") String phone);

    @Query("SELECT m.id from Member m WHERE m.phone = :phone")
    String findIdByPhone(@Param("phone")String phone);

    @Modifying
    @Transactional
    @Query("UPDATE Member m SET m.password = :putPw WHERE m.id = :id")
    void settingPw(@Param("id") String id, @Param("putPw") String putPw);
}