import { useState } from "react";
import FormContainer from "../atoms/FormContainer";
import AddUserInfoInputBox from "../molecules/AddUserInfoInputBox";
import Button from "../atoms/Button";
import DisabledButton from "../atoms/DisabledButton";
const AddUserInfoForm = () => {
  const [user, setUser] = useState({
    userName: "",
    userBirth: "",
    userAddress: "",
    userCategory: [],
    latitude: "",
    longitude: "",
  });
  console.log(user);
  const [birthMessage, setBirthMessage] = useState(false);
  return (
    <FormContainer>
      <AddUserInfoInputBox
        user={user}
        setUser={setUser}
        birthMessage={birthMessage}
        setBirthMessage={setBirthMessage}
      ></AddUserInfoInputBox>
      {birthMessage &&
      user.userAddress !== "" &&
      user.userName !== "" &&
      user.userCategory.length !== 0 ? (
        <Button type="submit">저장하기</Button>
      ) : (
        <DisabledButton disabled>저장하기</DisabledButton>
      )}
    </FormContainer>
  );
};
export default AddUserInfoForm;
