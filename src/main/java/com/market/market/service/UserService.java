package com.market.market.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.market.dto.User;
import com.market.market.mapper.UserRepository;

@Service
public class UserService {
@Autowired
private UserRepository  userRepository;

    public User login(String userEmail, String userPassword){
        System.out.println("서비스 진입");
        return userRepository.findByUserEmail(userEmail)
        .filter(user -> user.getUserPassword().equals(userPassword))
        .orElse(null);
    }

    public List<String> getAllUserEmails() {
        return userRepository.findAllUserEmails();
    }


}
