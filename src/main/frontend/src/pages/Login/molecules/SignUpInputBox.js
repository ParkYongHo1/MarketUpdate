import Input from "../atoms/Input";
import PTag from "../atoms/PTag";
import { useState } from "react";
import Message from "../atoms/Message";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slices/userSlice";
import Button from "../atoms/Button";
import Div from "../atoms/Div";

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
    <form>
      <PTag>이메일 주소*</PTag>
      <Div flex margin>
        <Input
          send
          onChange={onChangeInput}
          name="userEmail"
          value={user.userEmail}
          type="email"
          placeholder="예시) carrot@carrot.com"
          required
        />
        <Button send>인증번호전송</Button>
      </Div>
      <Message ok>해당 이메일로 인증번호를 전송해드렸습니다.</Message>
      <Message fail>이미 가입된 이메일입니다.</Message>
      <Div margin>
        <Input
          name="userEmail"
          value={user.userEmail}
          type="email"
          placeholder="이메일 인증번호를 입력해주세요"
          required
        />
      </Div>
      <Message ok>인증번호가 일치합니다.</Message>

      <PTag>휴대폰 번호*</PTag>
      <Div flex margin>
        <Input
          send
          onChange={onChangeInput}
          name="userPhone"
          value={user.userPhone}
          type="text"
          placeholder="예시) 01012345678"
          maxLength={11}
          required
        />
        <Button send>인증번호전송</Button>
      </Div>
      <Message ok>해당 번호로 인증번호를 전송해드렸습니다.</Message>

      <Div margin>
        <Input
          onChange={onChangeInput}
          name="userPhone"
          value={user.userPhone}
          type="text"
          placeholder="휴대폰 인증번호를 입력해주세요"
          maxLength={11}
          required
        />
      </Div>
      <Message ok>인증번호가 일치합니다.</Message>
      <PTag>비밀번호*</PTag>
      <Div margin>
        <Input
          onChange={onChangeInput}
          name="userPassword"
          value={user.userPassword}
          type="password"
          placeholder="영문자 + 숫자 + 특수문자를 포함하여 8자 이상 입력해주세요"
          required
        />
      </Div>
      <PTag>비밀번호 확인*</PTag>
      <Div margin>
        <Input
          onChange={onChangePasswordCheck}
          name="passwordCheck"
          value={passwordCheck}
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
          required
        />
      </Div>
    </form>
  );
};

export default LoginInputBox;
