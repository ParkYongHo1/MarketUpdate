import { useState } from "react";
import Form from "../atoms/Form";
import FindByPasswordInputBox from "../molecules/FindByPasswordInputBox";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import axios from "axios";
const FindByPasswordForm = () => {
  const [user, setUser] = useState({
    userEmail: "",
  });
  const handleFindPasswordInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/find-password", user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleFindPasswordInfo}>
      <Title find>비밀번호 찾기</Title>
      <FindByPasswordInputBox
        user={user}
        setUser={setUser}
      ></FindByPasswordInputBox>
      <Button type="submit">이메일 발송하기</Button>
    </Form>
  );
};
export default FindByPasswordForm;
