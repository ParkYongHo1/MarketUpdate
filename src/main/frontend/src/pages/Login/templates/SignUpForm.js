import axios from "axios";
import Button from "../atoms/Button";
import FormContainer from "../atoms/FormContainer";
import Title from "../atoms/Title";
import SignUpInputBox from "../molecules/SignUpInputBox";
import DisabledButton from "../atoms/DisabledButton";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmail as fetchEmailAction } from "../../../slices/userSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [userEmail, setUserEmail] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [phoneMessage, setPhoneMessage] = useState(false);

  useEffect(() => {
    const fetchEmailData = async () => {
      try {
        const res = await axios.get("/api/user/fetchEmail");
        dispatch(fetchEmailAction(res.data));
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchEmailData();
  }, [dispatch]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/signup", user);
      console.log(user);
      if (res.data === "hi") console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer onSubmit={handleSignUp}>
      <Title>회원가입</Title>
      <SignUpInputBox
        userEmail={userEmail}
        passwordCheck={passwordCheck}
        setPasswordCheck={setPasswordCheck}
        emailMessage={emailMessage}
        setEmailMessage={setEmailMessage}
        passwordMessage={passwordMessage}
        setPasswordMessage={setPasswordMessage}
        phoneMessage={phoneMessage}
        setPhoneMessage={setPhoneMessage}
      />
      {emailMessage && phoneMessage && passwordMessage ? (
        <Button type="submit">가입하기</Button>
      ) : (
        <DisabledButton disabled>가입하기</DisabledButton>
      )}
    </FormContainer>
  );
};

export default SignUpForm;
