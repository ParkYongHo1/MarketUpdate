import FindUserInfoFormContainer from "../atoms/FindUserInfoFormContainer";
import FindUserInfoFormSpanTag from "../atoms/FindUserInfoFormSpanTag";

const FindUserInfoForm = () => {
  return (
    <FindUserInfoFormContainer>
      <FindUserInfoFormSpanTag>이메일 가입</FindUserInfoFormSpanTag>|
      <FindUserInfoFormSpanTag>이메일 찾기</FindUserInfoFormSpanTag>|
      <FindUserInfoFormSpanTag>비밀번호 찾기</FindUserInfoFormSpanTag>
    </FindUserInfoFormContainer>
  );
};

export default FindUserInfoForm;
