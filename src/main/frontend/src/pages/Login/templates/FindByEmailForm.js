import PTag from "../atoms/PTag";
import Input from "../atoms/Input";
import Message from "../atoms/Message";
const FindByEmailForm = ({ user, setUser }) => {
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    setUser({ ...user, [name]: numericValue });
  };
  return (
    <>
      <Message info>
        가입시 등록했던 휴대폰 번호를 입력하면 <br />
        이메일의 일부를 알려드립니다.
      </Message>

      <PTag>휴대폰 번호*</PTag>
      <Input
        onChange={onChangeInput}
        name="phone"
        value={user.phone}
        type="test"
        maxLength={11}
        placeholder="예시) 01012345678"
      />
    </>
  );
};
export default FindByEmailForm;
