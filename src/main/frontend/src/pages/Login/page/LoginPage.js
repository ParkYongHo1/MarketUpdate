import Body from "../atoms/Body";
import LoginForm from "../templates/LoginForm";
import Div from "../atoms/Div";
import Span from "../atoms/Span";
import StyledLink from "../atoms/StyledLink";
import SocialButton from "../atoms/SocialButton";
import SocialButtonImg from "../atoms/SocialButtonImg";
import { KAKAO_AUTH_URL } from "../../../OAuth/OAuth";
import Form from "../atoms/Form";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, emailError, passwordError } from "../../../slices/userSlice";
const LoginPage = () => {
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
    <Body>
      <div>
        <Form onSubmit={handleLogin}>
          <Title>로그인</Title>
          <LoginForm />
          {isFormValid ? (
            <Button type="submit">로그인</Button>
          ) : (
            <Button disabled>로그인하기</Button>
          )}
        </Form>
        <Div login>
          <Span>
            <StyledLink to="/signup">이메일 가입</StyledLink>
          </Span>
          |
          <Span>
            <StyledLink to="/findemail">이메일 찾기</StyledLink>
          </Span>
          |
          <Span>
            <StyledLink to="/findpassword">비밀번호 찾기</StyledLink>
          </Span>
        </Div>
        <SocialButton to={`${KAKAO_AUTH_URL}`}>
          <SocialButtonImg
            src={process.env.PUBLIC_URL + "/kakaologo.png"}
            alt="kakaoimg"
            width={"32px"}
          />
          카카오 로그인
        </SocialButton>
      </div>
    </Body>
  );
};

export default LoginPage;
