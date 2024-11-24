package com.market.market.member.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import com.market.market.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.market.market.member.dto.EmailCheckDto;
import com.market.market.member.dto.MemberDto;
import com.market.market.member.dto.PhoneCheckDto;
import com.market.market.member.service.AuthService;
import com.market.market.member.service.MailService;
import com.market.market.member.service.MemberService;
import com.market.market.member.service.SmsService;



@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    MailService mailService;
    
    @Autowired 
    SmsService smsService;

    @Autowired
    AuthService authService;
    
    @Autowired
    MemberService memberService;

    @Autowired
    MemberRepository memberRepository;
    
    private Map<String,String> resultMap = new HashMap<>();
    Map<String, Object> responseMap = new HashMap<>();

    @PostMapping(value = "/fetch-email")    
    public @ResponseBody  Map<String,Object> fetchEmail(@RequestBody Map<String,Object> emailData){
        String email = emailData.get("email").toString();

        boolean existsByEmail = memberRepository.existsById(email);

        if (existsByEmail) {
            responseMap.put("status",405);
            System.out.println("------------------계정 중복");
        }else{
            responseMap.put("status", "200");
            mailService.fetchEmail(email);
        }

        return responseMap;
    }

    @PostMapping("/checknum-email")
    public Map<String,Object> CheckNumEmail(@RequestBody Map<String,Object> emailData){
         Boolean Checked=mailService.CheckAuthNum(emailData.get("email").toString(),emailData.get("checkNum").toString());
         
        if(Checked){
            responseMap.put("status", "200");
            return responseMap;
        }
        else{
            responseMap.put("status", "405");
            return responseMap;
        }
    }

    @PostMapping("/fetch-phone")
    public Map<String, Object> fetchPhone(@RequestBody MemberDto memberDto){
        String phone = memberDto.getPhone();
        smsService.fetchPhone(phone);

        responseMap.put("status", "200");
        return responseMap;
    }

    @PostMapping("/checknum-phone")
    public Map<String,Object> CheckNumPhone(@RequestBody @Valid PhoneCheckDto phoneCheckDto){
        Boolean Checked=smsService.CheckAuthNum(phoneCheckDto.getPhone(),phoneCheckDto.getCheckNum());
        if(Checked){
            responseMap.put("status", "200");
            return responseMap;
        }
        else{
            responseMap.put("status", "405");
            return responseMap;
        }
    }

    @PostMapping("/findby-phone")
    public Map<String,Object> EmailFind(@RequestBody  Map<String, String> requestData){
        String phone = requestData.get("phone");
        Boolean Checked = memberService.memeberByPhone(phone);
        
        if(Checked == true){ 
           smsService.fetchPhone(phone);
           responseMap.put("status", "200");
        }else { 
            responseMap.put("status", "400");
        }
        return responseMap;
    }

    @PostMapping("/search-id")
    public Map<String, Object> SearchEmail(@RequestBody @Valid PhoneCheckDto phoneCheckDto){
        Boolean Checked=smsService.CheckAuthNum(phoneCheckDto.getPhone(),phoneCheckDto.getCheckNum()); //Num 체크 기능
        if(Checked){ 
            String id = memberService.searchId(phoneCheckDto.getPhone());

            responseMap.put("email", id);
            responseMap.put("status", "200");
            return responseMap;
        }
        else{
            responseMap.put("status", "400");
            return responseMap;
        }
    }

    @PostMapping("/findby-id")
    public Map<String,Object> PWFind(@RequestBody  Map<String, String> requestData){
        String id = requestData.get("email");
        Boolean Checked = memberService.memeberById(id);       
                
        if(Checked == true){ 
            mailService.fetchEmail(id);
            responseMap.put("status", "200");
         }else { 
             responseMap.put("status", "400");
         }
         return responseMap;
     }

    @PostMapping("/search-pw")
    public Map<String,Object> SearchPw(@RequestBody @Valid EmailCheckDto emailCheckDto){
        Boolean Checked=mailService.CheckAuthNum(emailCheckDto.getId(),emailCheckDto.getCheckNum());
        if(Checked){
           responseMap.put("status", "200");
           
           return responseMap;
       }
       else{
           responseMap.put("status", "400");
           return responseMap;
       }
   }

   @PostMapping("/setting-pw")
    public Map<String,Object> SettingPw(@RequestBody Map<String, Object> requestData){
        String id = (String) requestData.get("email");
        String newPw = (String) requestData.get("password");

        memberService.settingPw(id, newPw);
        
        responseMap.put("status", "200");
        return responseMap;
   }
}