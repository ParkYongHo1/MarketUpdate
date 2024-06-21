import ErrorMessage from "../atoms/ErrorMessage";
import LoginInput from "../atoms/LoginInput";
import PTag from "../atoms/PTag";
import { useSelector } from "react-redux";

const LoginInputBox = ({ setUser, user }) => {
  const emailError = useSelector((state) => state.user.emailError);
  const passwordError = useSelector((state) => state.user.passwordError);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <PTag>이메일 주소</PTag>
      <LoginInput
        value={user.userEmail}
        name="userEmail"
        onChange={onChangeInput}
      />
      {emailError && !passwordError && (
        <ErrorMessage>일치하는 이메일 주소가 없습니다.</ErrorMessage>
      )}
      <PTag>비밀번호</PTag>
      <LoginInput
        value={user.userPassword}
        name="userPassword"
        onChange={onChangeInput}
      />
      {passwordError && (
        <ErrorMessage>일치하는 비밀번호가 없습니다.</ErrorMessage>
      )}
    </>
  );
};

export default LoginInputBox;
