import Body from "../atoms/Body";
import FindByPasswordForm from "../templates/FindByPasswordForm";
import { useState } from "react";
import Form from "../atoms/Form";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import axios from "axios";
const FindByPasswordPage = () => {
  const [user, setUser] = useState({
    id: "",
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
    <Body>
      <div>
        <Form onSubmit={handleFindPasswordInfo}>
          <Title find>비밀번호 찾기</Title>
          <FindByPasswordForm
            user={user}
            setUser={setUser}
          ></FindByPasswordForm>
          <Button type="submit">이메일 발송하기</Button>
        </Form>
      </div>
    </Body>
  );
};

export default FindByPasswordPage;
