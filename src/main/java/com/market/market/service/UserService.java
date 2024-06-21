package com.market.market.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.market.dto.User;
import com.market.market.mapper.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User login(String userEmail, String userPassword) {
        System.out.println("서비스 진입");
        Optional<User> optionalUser = userRepository.findByUserEmail(userEmail);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (user.getUserPassword().equals(userPassword)) {
                return user; // 로그인 성공 시 유저 객체 반환
            } else {
                user.setUserPassword("passwordError"); // 비밀번호가 틀린 경우
                return user;
            }
        } else {
            User user = new User();
            user.setUserEmail("emailError"); // 이메일이 틀린 경우
            return user;
        }
    }

    public List<String> getAllUserEmails() {
        return userRepository.findAllUserEmails();
    }
}
