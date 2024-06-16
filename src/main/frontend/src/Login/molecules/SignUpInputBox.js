import LoginInput from "../atoms/LoginInput";
import LoginPTag from "../atoms/LoginPTag";
import LoginButton from "../atoms/LoginButton";
import { React, useState } from "react";
const LoginInputBox = () => {
  return (
    <>
      {/* 모든 유저 데이터 불러와서 이메일 검증*/}
      <LoginPTag>이메일 주소*</LoginPTag>
      <LoginInput onChange={{}} />
      <LoginPTag>비밀번호*</LoginPTag>
      <LoginInput />
      <LoginPTag>비밀번호 확인*</LoginPTag>
      <LoginInput />
      <input type="checkbox" id="1"></input>
      <label htmlFor="1">동의</label>
    </>
  );
};
export default LoginInputBox;
