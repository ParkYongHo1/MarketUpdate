import LoginInput from "../atoms/LoginInput";
import LoginPTag from "../atoms/LoginPTag";
const LoginInputBox = () => {
  return (
    <>
      <LoginPTag>이메일 주소</LoginPTag>
      <LoginInput />
      <LoginPTag>비밀번호</LoginPTag>
      <LoginInput />
    </>
  );
};
export default LoginInputBox;
