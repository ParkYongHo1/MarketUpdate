import { useState } from "react";
import FormContainer from "../atoms/FormContainer";
import AddUserInfoInputBox from "../molecules/AddUserInfoInputBox";
import Button from "../atoms/Button";
import DisabledButton from "../atoms/DisabledButton";
import axios from "axios";
const AddUserInfoForm = () => {
  const [user, setUser] = useState({
    userName: "",
    userBirth: "",
    userAddress: "",
    userCategory: [],
    latitude: "",
    longitude: "",
  });
  const handleAddUserInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/add-info", user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  const [birthMessage, setBirthMessage] = useState(false);
  return (
    <FormContainer onSubmit={handleAddUserInfo}>
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
