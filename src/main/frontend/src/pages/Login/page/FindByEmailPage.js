import Body from "../atoms/Body";
import FindByEmailForm from "../templates/FindByEmailForm";
import { useState } from "react";
import Form from "../atoms/Form";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

import PTag from "../atoms/PTag";
import axios from "axios";
import Message from "../atoms/Message";
import Div from "../atoms/Div";
const FindByEmailPage = () => {
  const [okPage, setOkpage] = useState(false);
  const [failPage, setFailPage] = useState(false);

  const [user, setUser] = useState({
    userPhone: "",
  });
  const handleFindEmailInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/find-email", user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Body>
      <div>
        <>
          {!okPage && (
            <Form onSubmit={handleFindEmailInfo}>
              <Title find>이메일 아이디찾기</Title>
              <FindByEmailForm user={user} setUser={setUser}></FindByEmailForm>
              {failPage == true && (
                <Message fail>일치하는 휴대폰 번호가 없습니다.</Message>
              )}
              <Button type="submit">이메일 아이디 찾기</Button>
            </Form>
          )}
          {okPage && (
            <Form>
              <Title find>이메일 주소를 찾았습니다.</Title>
              <PTag>이메일 주소</PTag>
              <PTag sub>q*******3@naver.com</PTag>
              <Div flex>
                <Button middleButton>비밀번호 찾기</Button>
                <Button middleBlackButton>로그인하기</Button>
              </Div>
            </Form>
          )}
          {failPage && (
            <Form>
              <Title find>이메일 아이디찾기</Title>
              <FindByEmailForm user={user} setUser={setUser}></FindByEmailForm>
              <Message fail>일치하는 휴대폰 번호가 없습니다.</Message>
              <Button type="submit">이메일 아이디 찾기</Button>
            </Form>
          )}
        </>
      </div>
    </Body>
  );
};

export default FindByEmailPage;
