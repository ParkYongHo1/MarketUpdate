import Body from "../atoms/Body";
import AddUserInfoForm from "../templates/AddUserInfoForm";
import { useState } from "react";
import Form from "../atoms/Form";
import Button from "../atoms/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddUserInfoPage = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const handleAddUserInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/member/add-info", user);
      if (res.data.status == "200") {
        navigate("/");
      }
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
          {user.address !== null && user.nickname !== "" ? (
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
