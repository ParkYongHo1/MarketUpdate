package com.market.market;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.market.market.member.repository" , "com.market.market.product.repository","com.market.market.chatting.repository"})
@EntityScan(basePackages = {"com.market.market.member.entity","com.market.market.product.entity","com.market.market.chatting.entity"})
@ComponentScan(basePackages = {"com.market"})
public class MarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketApplication.class, args);
	}

}
