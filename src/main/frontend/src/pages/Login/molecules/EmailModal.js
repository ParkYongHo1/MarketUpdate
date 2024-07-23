import Body from "../atoms/Body";
import FindByPasswordForm from "../templates/FindByPasswordForm";
import { useState } from "react";
import Form from "../atoms/Form";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import PTag from "../atoms/PTag";
import Input from "../atoms/Input";
import Message from "../atoms/Message";
import axios from "axios";
import Div from "../atoms/Div";
import { useDispatch, useSelector } from "react-redux";
import { setEmailMessage } from "../../../slices/userSlice";

const EmailModal = ({ emailModal, setEmailModal }) => {
  const [checkNum, setCheckNum] = useState("");
  const [authState, setAuthState] = useState("");
  const dispatch = useDispatch();
  const emailMessage = useSelector((state) => state.user.emailMessage);

  /********************
   * 인증번호 확인 API (/suth/checknum-email)
   ********************/
  const onChangeInput = async (e) => {
    const { value } = e.target;
    setCheckNum(value);

    if (value.length === 6) {
      try {
        const res = await axios.post("/auth/checknum-email", {
          checkNum: value,
        });
        if (res.data == 200) {
          setAuthState("YES");
          dispatch(
            setEmailMessage({
              ...emailMessage,
              message: "이메일 인증이 완료되었습니다.",
              isEmailTaken: "YES",
            })
          );
        } else if (res.data == 400) {
          setAuthState("NO");
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Body>
      <div>
        <>
          <Title find>인증번호 확인</Title>
          <>
            <Message info>
              해당 이메일로 인증번호를 전송해드렸습니다
              <br />
              전송된 인증번호 6자리를 입력해주세요.
            </Message>

            <PTag>인증번호*</PTag>
            <Input
              onChange={onChangeInput}
              name="checkNum"
              value={checkNum}
              type="text"
              maxLength={6}
              placeholder="예시) 123456"
            />
          </>
          {authState === "" ? (
            <Message></Message>
          ) : authState === "YES" ? (
            <Message ok>인증번호가 일치합니다.</Message>
          ) : (
            <Message fail>인증번호가 일치하지 않습니다.</Message>
          )}

          <Div flex>
            {authState === "YES" ? (
              <Button
                middleBlackButton
                onClick={() => {
                  setEmailModal(false);
                }}
              >
                확인
              </Button>
            ) : (
              <Button middleBlackButton disabled>
                확인
              </Button>
            )}

            <Button middleButton>재전송</Button>
          </Div>
        </>
      </div>
    </Body>
  );
};

export default EmailModal;
