import LoginFormContainer from "../atoms/LoginFormContainer";
import LoginInputBox from "../molecules/LoginInputBox";
import LoginButton from "../atoms/LoginButton";
import Title from "../atoms/Title";
const LoginForm = () => {
  return (
    <LoginFormContainer>
      <Title>로그인</Title>
      <LoginInputBox />
      <LoginButton>로그인</LoginButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
