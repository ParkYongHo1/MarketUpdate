import SocialButton from "../atoms/SocialButton";
import SocialButtonImg from "../atoms/SocialButtonImg";

const SocialLoginForm = () => {
  return (
    <SocialButton type="submit">
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
