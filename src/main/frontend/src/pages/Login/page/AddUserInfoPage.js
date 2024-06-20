import Body from "../atoms/Body";
import LoginContainer from "../atoms/LoginContainer";
import AddUserInfoForm from "../templates/AddUserInfoForm";

const AddUserInfoPage = () => {
  return (
    <Body>
      <LoginContainer>
        <AddUserInfoForm></AddUserInfoForm>
      </LoginContainer>
    </Body>
  );
};

export default AddUserInfoPage;
