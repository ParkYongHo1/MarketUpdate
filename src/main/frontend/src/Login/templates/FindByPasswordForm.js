import { useState } from "react";
import FormContainer from "../atoms/FormContainer";
import FindByPasswordInputBox from "../molecules/FindByPasswordInputBox";
import FindTitle from "../atoms/FindTitle";
import Button from "../atoms/Button";
const FindByPasswordForm = () => {
  const [user, setUser] = useState({
    userEmail: "",
  });
  return (
    <FormContainer>
      <FindTitle>비밀번호 찾기</FindTitle>
      <FindByPasswordInputBox
        user={user}
        setUser={setUser}
      ></FindByPasswordInputBox>
      <Button type="submit">이메일 발송하기</Button>
    </FormContainer>
  );
};
export default FindByPasswordForm;
