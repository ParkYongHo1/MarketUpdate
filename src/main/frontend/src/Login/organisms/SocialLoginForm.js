import SocialButton from "../atoms/SocialButton";
import SocialButtonImg from "../atoms/SocialButtonImg";
import SocialButtonText from "../atoms/SocialButtonText";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
