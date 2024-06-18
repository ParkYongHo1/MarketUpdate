import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import SignUpForm from "../templates/SignUpForm";

const SignUpPage = () => {
  return (
    <Body>
      <LoginContainer>
        <SignUpForm></SignUpForm>
      </LoginContainer>
    </Body>
  );
};

export default SignUpPage;
