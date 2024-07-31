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
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, setJwt } from "../../../slices/userSlice";
const LoginPage = () => {
  const user = useSelector((state) => state.user.user);
  const jwt = useSelector((state) => state.user.jwt);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormValid = user?.email !== "" && user?.password !== "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/member/login", {
        email: user.email,
        password: user.password,
      });
      console.log(res.data);
      const jwtData = {
        access: res.data.token.accessToken,
        expirationTime: res.data.token.accessTokenExpiresIn,
        refresh: res.data.token.refreshToken,
      };

      sessionStorage.setItem("jwt", JSON.stringify(jwtData));
      if (res.data.status == "200") {
        dispatch(login(res.data.member));
        dispatch(setJwt(jwtData));
        if (res.data.member.location == null) {
          navigate("/adduserinfo");
        } else {
          navigate("/");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Body>
      <div>
        <Form onSubmit={handleLogin}>
          <Title>로그인</Title>
          <LoginForm />
          {isFormValid ? (
            <Button type="submit">로그인</Button>
          ) : (
            <Button disable>로그인하기</Button>
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
