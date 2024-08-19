import Input from "../atoms/Input";
import PTag from "../atoms/PTag";
import Modal from "react-modal";
import Xbtn from "../atoms/Xbtn";
import { useState, useEffect, useRef } from "react";
import Message from "../atoms/Message";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setEmailMessage,
  setPhoneMessage,
  setCheckPassword,
  setPassword,
  isEmailState,
  sendEmail,
} from "../../../slices/userSlice";
import Button from "../atoms/Button";
import Div from "../atoms/Div";
import axios from "axios";
import EmailModal from "../molecules/EmailModal";
import PhoneModal from "../molecules/PhoneModal";
const SignUpForm = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const user = useSelector((state) => state.user.user);
  const emailMessage = useSelector((state) => state.user.emailMessage);
  const phoneMessage = useSelector((state) => state.user.phoneMessage);
  const isNotPassword = useSelector((state) => state.user.isNotPassword);
  const checkPassword = useSelector((state) => state.user.checkPassword);
  const isEmailTaken = useSelector((state) => state.user.isEmailTaken);
  const isPhoneTaken = useSelector((state) => state.user.isPhoneTaken);
  const dispatch = useDispatch();
  const [emailModal, setEmailModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [isNotEmail, setIsNotEmail] = useState("");
  const [isNotPhone, setIsNotPhone] = useState("");
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
    if (name === "phone") {
      validatePhone(value);
    }
    if (name === "email") {
      validateEmail(value);
    }
    if (name === "password") {
      validatePassword(value);
    }
    if (name === "passwordCheck") {
      setPasswordCheck(value);
      validatePasswordMatch(value, user.userPassword);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsNotEmail("이메일 주소를 정확히 입력해주세요");
    } else {
      setIsNotEmail("유효한 이메일입니다.");
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^01[016789][0-9]{3,4}[0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
      setIsNotPhone("휴대폰 번호를 정확히 입력해주세요.");
    } else {
      setIsNotPhone("");
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      dispatch(
        setPassword({
          ...isNotPassword,
          message: "NO",
        })
      );
    } else {
      dispatch(
        setPassword({
          ...isNotPassword,
          message: "YES",
        })
      );
    }
  };

  const validatePasswordMatch = (passwordCheck, password) => {
    if (passwordCheck !== password) {
      dispatch(
        setCheckPassword({
          ...checkPassword,
          message: "NO",
        })
      );
    } else {
      dispatch(
        setCheckPassword({
          ...checkPassword,
          message: "YES",
        })
      );
    }
  };
  console.log(user.email);
  /********************
   * 이메일 인증번호 전송 API(/auth/fetch-email)
   ********************/
  const onSendEmail = async (e) => {
    console.log(isNotEmail);

    if (!user.id) {
      setIsNotEmail("이메일 주소를 입력해주세요");
      emailInputRef.current.focus();
      return;
    } else if (isNotEmail === "유효한 이메일입니다.") {
      setEmailModal(true);
      try {
        const res = await axios.post("/auth/fetch-email", {
          id: user.id,
        });
        if (res.data == 200) {
          dispatch(
            setEmailMessage({
              ...emailMessage,
              message: "해당 이메일로 인증메일을 보내드렸습니다.",
              isEmailTaken: "",
            })
          );

          setEmailModal(true);
        } else if (res.data == 405) {
          dispatch(
            setEmailMessage({
              ...emailMessage,
              message: "이미 존재하는 이메일입니다.",
              isEmailTaken: "NO",
            })
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  /********************
   * 휴대폰 인증번호 전송 API(/auth/fetch-phone)
   ********************/
  const onSendPhone = async (e) => {
    console.log(user.phone);

    if (!user.phone) {
      setIsNotPhone("휴대폰 번호를 입력해주세요");
      phoneInputRef.current.focus();
      return;
    }
    setPhoneModal(true);
    try {
      const res = await axios.post("/auth/fetch-phone", {
        phone: user.phone,
      });
      if (res.data == 200) {
        dispatch(
          setPhoneMessage({
            ...phoneMessage,
            message: "해당 휴대폰 번호로 인증번호를 전송했습니다.",
            isPhoneTaken: "",
          })
        );
        setPhoneModal(true);
      } else if (res.data == 405) {
        setPhoneMessage({
          ...phoneMessage,
          message: "이미 존재하는 휴대폰 번호입니다.",
          isPhoneTaken: "NO",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PTag>이메일 주소*</PTag>
      <Div flex margin>
        <Input
          send
          ref={emailInputRef} // 참조 추가
          onChange={onChangeInput}
          name="email"
          value={user.email}
          type="email"
          placeholder="예시) carrot@carrot.com"
          required
        />
        <Button
          send
          onClick={() => {
            onSendEmail();
          }}
        >
          인증메일전송
        </Button>
      </Div>
      {isEmailTaken === "" && isNotEmail !== "" ? (
        <Message fail>{isNotEmail}</Message>
      ) : isEmailTaken === "YES" ? (
        <Message ok>{emailMessage}</Message>
      ) : (
        <Message fail>{emailMessage}</Message>
      )}
      {setEmailModal && (
        <Modal
          style={customModalStyles}
          isOpen={emailModal}
          appElement={document.getElementById("root")}
        >
          <Xbtn onClick={() => setEmailModal(false)}>X</Xbtn>
          <EmailModal
            emailModal={emailModal}
            setEmailModal={setEmailModal}
          ></EmailModal>
        </Modal>
      )}

      <PTag>휴대폰 번호*</PTag>
      <Div flex margin>
        <Input
          send
          ref={phoneInputRef} // 참조 추가
          onChange={onChangeInput}
          name="phone"
          value={user.phone}
          type="text"
          placeholder="예시) 01012345678"
          maxLength={11}
          required
        />
        <Button
          send
          onClick={() => {
            onSendPhone();
          }}
        >
          인증번호전송
        </Button>
      </Div>
      {isPhoneTaken === "" && isNotPhone !== "" ? (
        <Message fail>{isNotPhone}</Message>
      ) : isPhoneTaken === "YES" ? (
        <Message ok>{phoneMessage}</Message>
      ) : (
        <Message fail>{phoneMessage}</Message>
      )}
      {setPhoneModal && (
        <Modal
          style={customModalStyles}
          isOpen={phoneModal}
          appElement={document.getElementById("root")}
        >
          <Xbtn onClick={() => setPhoneModal(false)}>X</Xbtn>
          <PhoneModal
            phoneModal={phoneModal}
            setPhoneModal={setPhoneModal}
          ></PhoneModal>
        </Modal>
      )}
      <PTag>비밀번호*</PTag>
      <Div margin>
        <Input
          onChange={onChangeInput}
          name="password"
          value={user.password}
          type="password"
          placeholder="영문자 + 숫자 + 특수문자를 포함하여 8자 이상 입력해주세요"
          required
        />
        {isNotPassword === "NO" ? (
          <Message fail>
            비밀번호는 영문자, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다.
          </Message>
        ) : (
          isNotPassword === "YES" && (
            <Message ok> 사용가능한 비밀번호입니다.</Message>
          )
        )}
      </Div>
      <PTag>비밀번호 확인*</PTag>
      <Div margin>
        <Input
          onChange={onChangeInput}
          name="passwordCheck"
          value={passwordCheck}
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
          required
        />
      </Div>
      {checkPassword !== "" && checkPassword === "NO" ? (
        <Message fail>비밀번호가 일치하지 않습니다.</Message>
      ) : (
        checkPassword === "YES" && <Message ok> 비밀번호가 일치합니다.</Message>
      )}
    </>
  );
};

const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    zIndex: "10",
    top: "0",
    left: "0",
  },
  content: {
    width: "600px",
    height: "500px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "none",
  },
};

export default SignUpForm;
