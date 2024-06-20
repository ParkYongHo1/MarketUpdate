import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import FindByPasswordForm from "../templates/FindByPasswordForm";
const FindByPasswordPage = () => {
  return (
    <Body>
      <LoginContainer>
        <FindByPasswordForm></FindByPasswordForm>
      </LoginContainer>
    </Body>
  );
};

export default FindByPasswordPage;
