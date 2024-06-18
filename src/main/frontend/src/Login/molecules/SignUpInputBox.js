import LoginInput from "../atoms/LoginInput";
import PTag from "../atoms/PTag";
import { useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";
import OkMessage from "../atoms/OkMessage";
import Message from "../atoms/Message";

const LoginInputBox = ({
  userEmail,
  signUpInfo,
  setSignUpInfo,
  passwordCheck,
  setPasswordCheck,
  emailMessage,
  setEmailMessage,
  passwordMessage,
  setPasswordMessage,
  phoneMessage,
  setPhoneMessage,
}) => {
  const onChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });

    if (name === "userEmail") {
      validateEmail(value);
    }

    if (name === "userPhone") {
      validatePhone(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailMessage(false);
    } else {
      setEmailMessage(true);
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^01[016789][0-9]{3,4}[0-9]{4}$/;
    if (phoneRegex.test(phone)) {
      setPhoneMessage(true);
    } else {
      setPhoneMessage(false);
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
        required
      />
      <>
        {/* 이메일 메시지 확인 */}
        {signUpInfo.userEmail.length === 0 || emailMessage === null ? (
          <Message>.</Message>
        ) : emailMessage === false &&
          !userEmail.includes(signUpInfo.userEmail) ? (
          <ErrorMessage>올바르지 않은 형식입니다.</ErrorMessage>
        ) : userEmail.includes(signUpInfo.userEmail) ? (
          <ErrorMessage>중복된 이메일입니다.</ErrorMessage>
        ) : (
          emailMessage &&
          !userEmail.includes(signUpInfo.userEmail) &&
          signUpInfo.userEmail.length > 0 && (
            <OkMessage>사용가능한 이메일입니다.</OkMessage>
          )
        )}
      </>
      {/* 휴대폰 번호 입력 */}
      <PTag>휴대폰 번호*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userPhone"
        value={signUpInfo.userPhone}
        type="text"
        placeholder="예시) 01012345678"
        maxLength={11}
        required
      />
      {/* 휴대폰 메시지 확인 */}
      {signUpInfo.userPhone.length === 0 || phoneMessage === null ? (
        <Message>.</Message>
      ) : phoneMessage === false ? (
        <ErrorMessage>올바르지 않은 형식입니다.</ErrorMessage>
      ) : (
        phoneMessage && <OkMessage>유효한 형식입니다.</OkMessage>
      )}
      {/* 비밀번호 입력 */}
      <PTag>비밀번호*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userPassword"
        value={signUpInfo.userPassword}
        type="password"
        required
      />

      {/* 비밀번호 확인 입력 */}
      <PTag>비밀번호 확인*</PTag>
      <LoginInput
        onChange={onChangePasswordCheck}
        name="passwordCheck"
        value={passwordCheck}
        type="password"
        required
      />
      {passwordCheck.length === 0 ? (
        <Message>.</Message>
      ) : passwordMessage === false ? (
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      ) : (
        passwordMessage && <OkMessage>비밀번호가 일치합니다.</OkMessage>
      )}
    </>
  );
};

export default LoginInputBox;
