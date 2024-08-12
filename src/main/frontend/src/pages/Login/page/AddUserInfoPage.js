import Body from "../atoms/Body";
import AddUserInfoForm from "../templates/AddUserInfoForm";
import { useState } from "react";
import Form from "../atoms/Form";
import Button from "../atoms/Button";
import axios from "axios";
import { useSelector } from "react-redux";
const AddUserInfoPage = () => {
  const user = useSelector((state) => state.user.user);

  const handleAddUserInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/member/add-info", user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <Body>
      <div>
        <Form onSubmit={handleAddUserInfo}>
          <AddUserInfoForm></AddUserInfoForm>
          {user.location.address !== null && user.nickname !== "" ? (
            <Button type="submit">저장하기</Button>
          ) : (
            <Button disabledButton disabled>
              저장하기
            </Button>
          )}
        </Form>
      </div>
    </Body>
  );
};

export default AddUserInfoPage;
