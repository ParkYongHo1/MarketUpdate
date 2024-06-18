import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import FindByEmailForm from "../templates/FindByEmailForm";
const FindByEmailPage = () => {
  return (
    <Body>
      <LoginContainer>
        <FindByEmailForm></FindByEmailForm>
      </LoginContainer>
    </Body>
  );
};

export default FindByEmailPage;
