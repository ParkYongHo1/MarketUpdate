import LoginInput from "../atoms/LoginInput";
import PTag from "../atoms/PTag";
const LoginInputBox = ({ setUser, user }) => {
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
      <PTag>비밀번호</PTag>
      <LoginInput
        value={user.userPassword}
        name="userPassword"
        onChange={onChangeInput}
      />
    </>
  );
};
export default LoginInputBox;
