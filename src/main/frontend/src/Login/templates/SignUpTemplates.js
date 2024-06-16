import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import SignUpForm from "../organisms/SignUpForm";

const SignUpTemplates = () => {
  return (
    <Body>
      <LoginContainer>
        <SignUpForm></SignUpForm>
      </LoginContainer>
    </Body>
  );
};

export default SignUpTemplates;
