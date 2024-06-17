import FormContainer from "../atoms/FormContainer";
import LoginInputBox from "../molecules/LoginInputBox";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", user);
      console.log(res.data);
      if (res.data == "success") {
        console.log(
          "email : " + user.userEmail + "password : " + user.userPassword
        );
      } else {
        console.log("fail");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <FormContainer onSubmit={handleLogin}>
      <Title>로그인</Title>
      <LoginInputBox setUser={setUser} user={user} />
      <Button type="submit">로그인</Button>
    </FormContainer>
  );
};

export default LoginForm;
