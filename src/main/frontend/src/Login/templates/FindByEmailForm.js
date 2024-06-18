import { useState } from "react";
import FormContainer from "../atoms/FormContainer";
import FindByEmailInputBox from "../molecules/FindByEmailInputBox";
import FindTitle from "../atoms/FindTitle";
import Button from "../atoms/Button";
import ErrorMessage from "../atoms/ErrorMessage";
import ButtonDiv from "../atoms/ButtonDiv";
import MiddleButton from "../atoms/MiddleButton";
import MiddleBlackButton from "../atoms/MiddleBlackButton";
import PTag from "../atoms/PTag";
import SubPTag from "../atoms/SubPTag";
const FindByEmailForm = () => {
  const [okPage, setOkpage] = useState(true);
  const [failPage, setFailPage] = useState(false);

  const [user, setUser] = useState({
    userPhone: "",
  });
  return (
    <>
      {!okPage && !failPage && (
        <FormContainer>
          <FindTitle>이메일 아이디찾기</FindTitle>
          <FindByEmailInputBox
            user={user}
            setUser={setUser}
          ></FindByEmailInputBox>
          <Button type="submit">이메일 아이디 찾기</Button>
          <ErrorMessage>일치하는 휴대폰 번호가 없습니다.</ErrorMessage>
        </FormContainer>
      )}
      {okPage && (
        <FormContainer>
          <FindTitle>이메일 주소를 찾았습니다.</FindTitle>
          <PTag>이메일 주소</PTag>
          <SubPTag>q*******3@naver.com</SubPTag>
          <ButtonDiv>
            <MiddleButton>비밀번호 찾기</MiddleButton>
            <MiddleBlackButton>로그인하기</MiddleBlackButton>
          </ButtonDiv>
        </FormContainer>
      )}
      {failPage && (
        <FormContainer>
          <FindTitle>이메일 아이디찾기</FindTitle>
          <FindByEmailInputBox
            user={user}
            setUser={setUser}
          ></FindByEmailInputBox>
          <ErrorMessage>일치하는 휴대폰 번호가 없습니다.</ErrorMessage>
          <Button type="submit">이메일 아이디 찾기</Button>
        </FormContainer>
      )}
    </>
  );
};
export default FindByEmailForm;
