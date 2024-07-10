import LoginInput from "../atoms/LoginInput";
import PTag from "../atoms/PTag";
import { useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";
import OkMessage from "../atoms/OkMessage";
import Message from "../atoms/Message";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slices/userSlice";

const LoginInputBox = ({
  userEmail,
  passwordCheck,
  setPasswordCheck,
  emailMessage,
  setEmailMessage,
  passwordMessage,
  setPasswordMessage,
  phoneMessage,
  setPhoneMessage,
}) => {
  const user = useSelector((state) => state.user.user);
  const fetchEmail = useSelector((state) => state.user.fetchEmail);
  const dispatch = useDispatch();
  console.log(user);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));

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
    } else if (fetchEmail.includes(email)) {
      setEmailMessage("duplicate");
    } else {
      setEmailMessage(true);
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^01[016789][0-9]{3,4}[0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneMessage(false);
    } else {
      setPhoneMessage(true);
    }
  };

  const onChangePasswordCheck = (e) => {
    const value = e.target.value;
    setPasswordCheck(value);
    setPasswordMessage(value === user.userPassword);
  };

  return (
    <>
      <PTag>이메일 주소*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userEmail"
        value={user.userEmail}
        type="email"
        placeholder="예시) carrot@carrot.com"
        required
      />
      <>
        {user.userEmail === "" || emailMessage === null ? (
          <Message>.</Message>
        ) : emailMessage === false ? (
          <ErrorMessage>올바르지 않은 형식입니다.</ErrorMessage>
        ) : emailMessage === "duplicate" ? (
          <ErrorMessage>중복된 이메일입니다.</ErrorMessage>
        ) : (
          <OkMessage>사용가능한 이메일입니다.</OkMessage>
        )}
      </>
      <PTag>휴대폰 번호*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userPhone"
        value={user.userPhone}
        type="text"
        placeholder="예시) 01012345678"
        maxLength={11}
        required
      />
      {user.userPhone === "" || phoneMessage === null ? (
        <Message>.</Message>
      ) : phoneMessage === false ? (
        <ErrorMessage>올바르지 않은 형식입니다.</ErrorMessage>
      ) : (
        <OkMessage>유효한 형식입니다.</OkMessage>
      )}
      <PTag>비밀번호*</PTag>
      <LoginInput
        onChange={onChangeInput}
        name="userPassword"
        value={user.userPassword}
        type="password"
        required
      />
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
        <OkMessage>비밀번호가 일치합니다.</OkMessage>
      )}
    </>
  );
};

export default LoginInputBox;
