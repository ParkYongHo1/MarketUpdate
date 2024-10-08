import Body from "../atoms/Body";
import SignUpForm from "../templates/SignUpForm";
import axios from "axios";
import Button from "../atoms/Button";
import Form from "../atoms/Form";
import Title from "../atoms/Title";

import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const isNotPassword = useSelector((state) => state.user.isNotPassword);
  const checkPassword = useSelector((state) => state.user.checkPassword);
  const isEmailTaken = useSelector((state) => state.user.isEmailTaken);
  const isPhoneTaken = useSelector((state) => state.user.isPhoneTaken);
  console.log(user);
  console.log("checkPassword==" + checkPassword);
  console.log("isNotPassword ==" + isNotPassword);
  /********************
   * 회원가입 API (/member/signup)
   ********************/
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/member/signup", user);
      console.log(user);
      console.log(res.data);
      
      if (res.data.status === "200") {
        navigate("/login");
      } else if (res.data === "400") {
        alert("일시적인 서버 에러가 발생했습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Body>
      <div>
        <Form onSubmit={handleSignUp}>
          <Title>회원가입</Title>
          <SignUpForm />
          {isNotPassword === "YES" &&
          isEmailTaken === "YES" &&
          isPhoneTaken === "YES" &&
          checkPassword === "YES" ? (
            <Button type="submit">가입하기</Button>
          ) : (
            <Button disabledButton disabled>
              가입하기
            </Button>
          )}
        </Form>
      </div>
    </Body>
  );
};

export default SignUpPage;
