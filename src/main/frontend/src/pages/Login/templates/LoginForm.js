import Message from "../atoms/Message";
import Input from "../atoms/Input";
import PTag from "../atoms/PTag";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const emailError = useSelector((state) => state.user.emailError);
  const passwordError = useSelector((state) => state.user.passwordError);
  console.log(user);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };
  return (
    <>
      <PTag>이메일 주소</PTag>
      <Input value={user.userEmail} name="userEmail" onChange={onChangeInput} />
      {emailError && !passwordError && (
        <Message fail>일치하는 이메일 주소가 없습니다.</Message>
      )}
      <PTag>비밀번호</PTag>
      <Input
        value={user.userPassword}
        name="userPassword"
        onChange={onChangeInput}
      />
      {passwordError && <Message fail>일치하는 비밀번호가 없습니다.</Message>}
    </>
  );
};

export default LoginForm;
