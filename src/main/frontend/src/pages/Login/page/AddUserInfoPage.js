import Body from "../atoms/Body";
import AddUserInfoForm from "../templates/AddUserInfoForm";
import { useState } from "react";
import Form from "../atoms/Form";
import Button from "../atoms/Button";
import axios from "axios";
const AddUserInfoPage = () => {
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
    <Body>
      <div>
        <Form onSubmit={handleAddUserInfo}>
          <AddUserInfoForm
            user={user}
            setUser={setUser}
            birthMessage={birthMessage}
            setBirthMessage={setBirthMessage}
          ></AddUserInfoForm>
          {birthMessage &&
          user.userAddress !== "" &&
          user.userName !== "" &&
          user.userCategory.length !== 0 ? (
            <Button type="submit">저장하기</Button>
          ) : (
            <Button disabledButton>저장하기</Button>
          )}
        </Form>
      </div>
    </Body>
  );
};

export default AddUserInfoPage;
