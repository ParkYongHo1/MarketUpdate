import javax.persistence.Column;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class MemberDto{
    private String id;
    private String password;
    private String email;  
    private String phone;  
    private String nickname;  
    private String location;
    private String profile_image; 
    private double manner_temp;
    private int auth;  //0 : 일반 로그인 , 1 : 소셜 로그인
    private String category;
    private String birth;
    private int level;  // 0: 사용자, 1 : 관리자
}