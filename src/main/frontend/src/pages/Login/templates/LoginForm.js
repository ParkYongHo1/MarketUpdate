import Message from "../atoms/Message";
import Input from "../atoms/Input";
import PTag from "../atoms/PTag";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };
  return (
    <>
      <PTag>이메일 주소</PTag>
      <Input value={user?.id} name="id" onChange={onChangeInput} />
      <PTag>비밀번호</PTag>
      <Input value={user?.password} type="password" name="password" onChange={onChangeInput} />
    </>
  );
};

export default LoginForm;
