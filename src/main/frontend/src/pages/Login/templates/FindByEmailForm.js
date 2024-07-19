import { useState } from "react";
import Form from "../atoms/Form";
import FindByEmailInputBox from "../molecules/FindByEmailInputBox";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import ButtonDiv from "../atoms/ButtonDiv";
import MiddleButton from "../atoms/MiddleButton";
import MiddleBlackButton from "../atoms/MiddleBlackButton";
import PTag from "../atoms/PTag";
import SubPTag from "../atoms/SubPTag";
import axios from "axios";
import Message from "../atoms/Message";
const FindByEmailForm = () => {
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
    <>
      {!okPage && (
        <Form onSubmit={handleFindEmailInfo}>
          <Title find>이메일 아이디찾기</Title>
          <FindByEmailInputBox
            user={user}
            setUser={setUser}
          ></FindByEmailInputBox>
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
          <SubPTag>q*******3@naver.com</SubPTag>
          <ButtonDiv>
            <MiddleButton>비밀번호 찾기</MiddleButton>
            <MiddleBlackButton>로그인하기</MiddleBlackButton>
          </ButtonDiv>
        </Form>
      )}
      {failPage && (
        <Form>
          <Title find>이메일 아이디찾기</Title>
          <FindByEmailInputBox
            user={user}
            setUser={setUser}
          ></FindByEmailInputBox>
          <Message fail>일치하는 휴대폰 번호가 없습니다.</Message>
          <Button type="submit">이메일 아이디 찾기</Button>
        </Form>
      )}
    </>
  );
};
export default FindByEmailForm;
