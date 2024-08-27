package com.market.market.member.service;

import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.market.market.util.RedisUtil;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;

@Service
public class SmsService {
    private int authNumber;

    @Autowired
    private RedisUtil redisUtil;

    @Value("${coolsms.api.phone}")
    private String phonenum;

    @Value("${coolsms.api.key}")
    private String apiKey;

    @Value("${coolsms.api.secret}")
    private String apiSecretKey;

    private DefaultMessageService messageService;

    @PostConstruct
    private void init() {
       
        this.messageService = NurigoApp.INSTANCE.initialize(apiKey, apiSecretKey, "https://api.coolsms.co.kr");
    }

    public void makeRandomNumber() {
        Random r = new Random();
        authNumber = 100000 + r.nextInt(900000); // 100000부터 999999까지의 숫자 생성
    }



    public String fetchPhone(String phone) {
      
        makeRandomNumber(); // 인증 번호 생성
        Message message = new Message();
        message.setFrom(phonenum); // 발신번호 설정
        message.setTo(phone); // 수신번호 설정
        message.setText("CARROT MARKET을 방문해주셔서 감사합니다.\r\n" +                        
                        "인증 번호는 " + authNumber + " 입니다\r\n" + 
                        "5분 이내로 인증해주시길 바랍니다. 인증번호를 제대로 입력해주세요");

        try {
            // SMS 전송
            messageService.send(message);
            System.out.println("SMS sent successfully");
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Failed to send SMS");
        }
        System.out.println("휴대폰 인증" + authNumber);
        // Redis에 인증번호 저장 (옵션)
        redisUtil.setDataExpire(Integer.toString(authNumber), phone, 60 * 5L); // 5분 동안 인증번호 유효

        return Integer.toString(authNumber);
    }

    public boolean CheckAuthNum(String phone, String authNum) {
        // Redis에서 인증번호에 해당하는 데이터를 가져옴
        String storedPhone = redisUtil.getData(authNum);
    
        // Redis 데이터가 null인지 체크
        if (storedPhone == null) {
            System.out.println("authNum == null ======");
            return false;
        }
        
        // 인증번호와 전화번호가 일치하는지 비교
        boolean isValid = storedPhone.equals(phone);
        
        if (isValid) {
            System.out.println("authNum == true =======");
        } else {
            System.out.println("authNum == false =======");
        }
        
        return isValid;
    }
    

}