package com.market.market.member.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.market.market.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member,String>{
    Optional<Member> findById(String id);
    boolean existsByEmail(String email);
}