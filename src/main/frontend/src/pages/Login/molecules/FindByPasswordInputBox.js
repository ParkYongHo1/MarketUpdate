import PTag from "../atoms/PTag";
import LoginInput from "../atoms/LoginInput";
import InfoMessage from "../atoms/InfoMessage";
const FindByPassowrdInputBox = ({ user, setUser }) => {
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <InfoMessage>
        가입시 등록했던 이메일 주소를 입력하면 <br />
        이메일주소로 임시 비밀번호를 알려드리겠습니다.
      </InfoMessage>

      <PTag>이메일 주소*</PTag>
      <LoginInput
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

export default FindByPassowrdInputBox;
