import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import LoginForm from "../organisms/LoginForm";
import FindUserInfoForm from "../organisms/FindUserInfoForm";
import SocialLoginForm from "../organisms/SocialLoginForm";
const LoginTemplates = () => {
  return (
    <Body>
      <LoginContainer>
        <LoginForm></LoginForm>
        <FindUserInfoForm></FindUserInfoForm>
        <SocialLoginForm></SocialLoginForm>
      </LoginContainer>
    </Body>
  );
};

export default LoginTemplates;
