import FormContainer from "../atoms/FormContainer";
import LoginInputBox from "../molecules/LoginInputBox";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import DisabledButton from "../atoms/DisabledButton";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, emailError, passwordError } from "../../../slices/userSlice";

const LoginForm = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", user);

      if (
        res.data.userEmail !== "emailError" &&
        res.data.userPassword !== "passwordError"
      ) {
        dispatch(login(user));
        if (res.data.userAddress == null) {
          {
            /* 처음 로그인 시 */
          }
          navigate("/adduserinfo");
        } else {
          navigate("/");
        }

        console.log(
          "email : " + user.userEmail + " password : " + user.userPassword
        );
      } else if (res.data.userEmail === "emailError") {
        dispatch(emailError());
      } else if (res.data.userPassword === "passwordError") {
        dispatch(passwordError());
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Validate if both email and password are filled
  const isFormValid = user.userEmail !== "" && user.userPassword !== "";

  return (
    <FormContainer onSubmit={handleLogin}>
      <Title>로그인</Title>
      <LoginInputBox />
      {isFormValid ? (
        <Button type="submit">로그인</Button>
      ) : (
        <DisabledButton disabled>로그인하기</DisabledButton>
      )}
    </FormContainer>
  );
};

export default LoginForm;
