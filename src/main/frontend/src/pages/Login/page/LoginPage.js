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
import { login, setJwt, setUser } from "../../../slices/userSlice";
import Message from "../atoms/Message";
const LoginPage = () => {
  const user = useSelector((state) => state.user.user);
  const jwt = useSelector((state) => state.user.jwt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormValid = user?.id !== "" && user?.password !== "";
  const [fail, setFail] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/member/login", {
        id: user.id,
        password: user.password,
        auth: "0",
      });
      const memberData = res.data.member;
      const jwtData = {
        access: res.data.token.accessToken,
        expirationTime: res.data.token.accessTokenExpiresIn,
        refresh: res.data.token.refreshToken,
      };

      sessionStorage.setItem("jwt", JSON.stringify(jwtData));
      if (res.data.status == "200") {
        dispatch(login({ user: memberData }));
        dispatch(setJwt(jwtData));
        console.log(res.data);

        if (res.data.member.location.address == null) {
          navigate("/adduserinfo");
        } else {
          console.log("true22");
          navigate("/");
        }
      } else if (res.data.status == "400") {
        setFail(true);
        console.log("123");
      }
    } catch (e) {
      setFail(true);
      console.log("err");

      console.log(e);
    }
  };
  return (
    <Body>
      <div>
        <Form onSubmit={handleLogin}>
          <Title>로그인</Title>
          <LoginForm />
          {fail && (
            <Message style={{ marginTop: "10px" }} fail>
              일치하는 이메일/비밀번호가 없습니다.
            </Message>
          )}
          {isFormValid ? (
            <Button type="submit">로그인</Button>
          ) : (
            <Button disabledButton disabled>
              로그인하기
            </Button>
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
