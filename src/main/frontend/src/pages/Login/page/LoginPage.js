import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import LoginForm from "../templates/LoginForm";
import FindUserInfoFormContainer from "../atoms/FindUserInfoFormContainer";
import FindUserInfoFormSpanTag from "../atoms/FindUserInfoFormSpanTag";
import StyledLink from "../atoms/StyledLink";
import SocialLoginForm from "../templates/SocialLoginForm";
const LoginPage = () => {
  return (
    <Body>
      <LoginContainer>
        <LoginForm></LoginForm>
        <FindUserInfoFormContainer>
          <FindUserInfoFormSpanTag>
            <StyledLink to="/signup">이메일 가입</StyledLink>
          </FindUserInfoFormSpanTag>
          |
          <FindUserInfoFormSpanTag>
            <StyledLink to="/findemail">이메일 찾기</StyledLink>
          </FindUserInfoFormSpanTag>
          |
          <FindUserInfoFormSpanTag>
            <StyledLink to="/findpassword">비밀번호 찾기</StyledLink>
          </FindUserInfoFormSpanTag>
        </FindUserInfoFormContainer>
        <SocialLoginForm></SocialLoginForm>
        <a href="/oauth2/authorization/google">google login</a>
      </LoginContainer>
    </Body>
  );
};

export default LoginPage;
