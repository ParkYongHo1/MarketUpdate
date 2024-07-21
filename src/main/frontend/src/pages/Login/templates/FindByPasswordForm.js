import PTag from "../atoms/PTag";
import Input from "../atoms/Input";
import Message from "../atoms/Message";
const FindByPasswordForm = ({ user, setUser }) => {
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <Message info>
        가입시 등록했던 이메일 주소를 입력하면 <br />
        이메일주소로 임시 비밀번호를 알려드리겠습니다.
      </Message>

      <PTag>이메일 주소*</PTag>
      <Input
        onChange={onChangeInput}
        name="userEmail"
        value={user.userEmail}
        type="email"
        maxLength={11}
        placeholder="예시) carrot@carrot.com"
      />
    </>
  );
};
export default FindByPasswordForm;
