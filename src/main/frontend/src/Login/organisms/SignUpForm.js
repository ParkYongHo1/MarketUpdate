import axios from "axios";
import Button from "../atoms/Button";
import FormContainer from "../atoms/FormContainer";
import Title from "../atoms/Title";
import SignUpInputBox from "../molecules/SignUpInputBox";
import { React, useState, useEffect } from "react";
const SignUpForm = () => {
  const [userEmail, setUserEmail] = useState([]);
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res = await axios.get("api/user/fetchEmail");
        setUserEmail(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchEmail();
  }, []);
  return (
    <FormContainer>
      <Title>회원가입</Title>
      <SignUpInputBox userEmail={userEmail}></SignUpInputBox>
      <Button onSubmit={{}}>가입하기</Button>
    </FormContainer>
  );
};

export default SignUpForm;
