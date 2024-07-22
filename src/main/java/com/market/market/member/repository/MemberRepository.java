package com.market.market.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.market.market.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member,Long>{

}