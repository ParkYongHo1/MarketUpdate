import axios from "axios";
import Button from "../atoms/Button";
import FormContainer from "../atoms/FormContainer";
import Title from "../atoms/Title";
import SignUpInputBox from "../molecules/SignUpInputBox";
import DisabledButton from "../atoms/DisabledButton";
import { React, useState, useEffect } from "react";
const SignUpForm = () => {
  const [userEmail, setUserEmail] = useState([]);
  const [signUpInfo, setSignUpInfo] = useState({
    userEmail: "",
    userPhone: "",
    userPassword: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [phoneMessage, setPhoneMessage] = useState(false);
  console.log("이메일 " + emailMessage);
  console.log("phone :  " + phoneMessage);
  console.log("password " + passwordMessage);
  console.log("passwordcheck " + passwordCheck);
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res = await axios.get("/api/user/fetchEmail");
        setUserEmail(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchEmail();
  }, []);
  const handleSignUP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/signup", signUpInfo);
      console.log("hi");
      if (res.data == "hi") console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer onSubmit={handleSignUP}>
      <Title>회원가입</Title>
      <SignUpInputBox
        userEmail={userEmail}
        signUpInfo={signUpInfo}
        setSignUpInfo={setSignUpInfo}
        passwordCheck={passwordCheck}
        setPasswordCheck={setPasswordCheck}
        emailMessage={emailMessage}
        setEmailMessage={setEmailMessage}
        passwordMessage={passwordMessage}
        setPasswordMessage={setPasswordMessage}
        phoneMessage={phoneMessage}
        setPhoneMessage={setPhoneMessage}
      ></SignUpInputBox>
      {emailMessage && phoneMessage && passwordMessage ? (
        <Button type="submit">가입하기</Button>
      ) : (
        <DisabledButton disabled>가입하기</DisabledButton>
      )}
    </FormContainer>
  );
};

export default SignUpForm;
