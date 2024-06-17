import LoginInput from "../atoms/LoginInput";
import PTag from "../atoms/PTag";
import { React, useEffect, useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";
import OkMessage from "../atoms/OkMessage";
import Message from "../atoms/Message";
const LoginInputBox = ({ userEmail }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailMessage, setEmailMessage] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const onChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "userEmail" && !emailRegex.test(value)) {
      setEmailMessage(false);
    } else {
      setEmailMessage(true);
    }
  };
  const onChangePasswordCheck = (e) => {
    const value = e.target.value;
    setPasswordCheck(value);
    if (value) {
      setPasswordMessage(value === signUpInfo.userPassword);
    } else {
      setPasswordMessage(null);
    }
  };
  return (
    <>
      {/* 이메일 주소 입력 */}
      <PTag>이메일 주소*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userEmail"
        value={signUpInfo.userEmail}
        type="email"
        placeholder="예시) carrot@carrot.com"
      />
      <>
        {/* 중복 여부 확인 */}
        {signUpInfo.userEmail.length == 0 || !emailMessage ? (
          <Message>.</Message>
        ) : signUpInfo.userEmail.length > 0 &&
          userEmail.includes(signUpInfo.userEmail) ? (
          <ErrorMessage>중복된 이메일입니다.</ErrorMessage>
        ) : (
          emailMessage &&
          !userEmail.includes(signUpInfo.userEmail) &&
          signUpInfo.userEmail.length > 0 && (
            <OkMessage>사용가능한 이메일입니다.</OkMessage>
          )
        )}
      </>
      {/* 비밀번호 입력 */}
      <PTag>비밀번호*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userPassword"
        value={signUpInfo.userPassword}
        type="password"
      />

      {/* 비밀번호 확인 입력 */}
      <PTag>비밀번호 확인*</PTag>
      <LoginInput
        onChange={onChangePasswordCheck}
        name="passwordCheck"
        value={passwordCheck}
        type="password"
      />
      {passwordCheck.length === 0 ? (
        <Message>.</Message>
      ) : passwordMessage === false ? (
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      ) : (
        passwordMessage && <OkMessage>비밀번호가 일치합니다.</OkMessage>
      )}
      {/* 동의 체크박스 */}
      <input type="checkbox" id="1" />
      <label htmlFor="1">동의</label>
    </>
  );
};

export default LoginInputBox;
