import SocialButton from "../atoms/SocialButton";
import SocialButtonImg from "../atoms/SocialButtonImg";
import { KAKAO_AUTH_URL } from "../../../OAuth/OAuth";
const SocialLoginForm = () => {
  return (
    <SocialButton to={`${KAKAO_AUTH_URL}`}>
      <SocialButtonImg
        src={process.env.PUBLIC_URL + "/kakaologo.png"}
        alt="kakaoimg"
        width={"32px"}
      />
      카카오 로그인
    </SocialButton>
  );
};

export default SocialLoginForm;
