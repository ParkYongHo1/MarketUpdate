import LoginButton from "../atoms/LoginButton";
import LoginFormContainer from "../atoms/LoginFormContainer";
import Title from "../atoms/Title";
import SignUpInputBox from "../molecules/SignUpInputBox";
const SignUpForm = () => {
  return (
    <LoginFormContainer>
      <Title>회원가입</Title>
      <SignUpInputBox></SignUpInputBox>
      <LoginButton onSubmit={{}}>가입하기</LoginButton>
    </LoginFormContainer>
  );
};

export default SignUpForm;
