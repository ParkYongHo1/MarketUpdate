import Modal from "react-modal";
import DaumPostcode from "react-daum-postcode";
import Xbtn from "../atoms/Xbtn";
import CheckOptionGroup from "../molecules/CheckOptionGroup";
import { useState } from "react";
import PTag from "../atoms/PTag";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import Message from "../atoms/Message";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../slices/userSlice";
const AddUserInfoForm = () => {
  const geoCoder = new window.kakao.maps.services.Geocoder();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [birthMessage, setBirthMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const handleUser = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
    if (name == "birth") {
      validateEmail(value);
    }
  };

  const handleComplete = (data) => {
    setIsModalOpen(false); // 주소 선택 시 모달 닫기

    // 주소로 위도 경도 값 얻기
    geoCoder.addressSearch(data.address, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        dispatch(
          setUser({
            ...user,
            latitude: coords.getLat(),
            longitude: coords.getLng(),
            address: data.address,
            jibunAddress: data.jibunAddress,
          })
        );
      } else {
        console.error("Geocoder 실패:", status);
      }
    });
  };

  const validateEmail = (birth) => {
    const birthregex = /^[0-9]{8}$/;
    if (!birthregex.test(birth)) {
      setBirthMessage("NO");
    } else {
      setBirthMessage("YES");
    }
  };
  const checkOption = [
    { label: "의상", value: "의상" },
    { label: "식품", value: "식품" },
    { label: "가구", value: "가구" },
    { label: "전자기기", value: "전자기기" },
    { label: "도서", value: "도서" },
    { label: "뷰티", value: "뷰티" },
    { label: "나눔", value: "나눔" },
    { label: "기타", value: "기타" },
  ];
  console.log(user);

  return (
    <>
      <Title>추가 정보 입력하기</Title>
      <Message info>
        카테고리 선택시 해당 서비스의
        <br /> 목록을 추천해드릴게요
      </Message>
      <PTag>이름*</PTag>
      <Input
        onChange={handleUser}
        type="text"
        name="nickname"
        value={user.nickname}
        maxlength={8}
        placeholder="이름을 입력해주세요"
      />
      <PTag>생년월일*</PTag>
      <Input
        onChange={handleUser}
        type="text"
        name="birth"
        value={user.birth}
        maxLength={8}
        placeholder="에시) 20001207"
      />
      {/* 생년월일 확인 */}
      {birthMessage == "NO" ? (
        <Message fail>올바르지 않은 형식입니다.</Message>
      ) : (
        birthMessage == "YES" && <Message ok>유효한 형식입니다.</Message>
      )}
      <PTag>주소*</PTag>
      <Input
        onChange={handleUser}
        name="address"
        value={user.address}
        type="text"
        readOnly
        placeholder="주소를 입력해주세요."
      />
      <Button type="button" onClick={() => setIsModalOpen(true)}>
        주소 검색
      </Button>
      <Modal
        style={customModalStyles}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        appElement={document.getElementById("root")}
      >
        <Xbtn onClick={() => setIsModalOpen(false)}>X</Xbtn>
        <DaumPostcode onComplete={handleComplete} />
      </Modal>
      <PTag>관심 카테고리*</PTag>
      <CheckOptionGroup
        options={checkOption}
        name="category"
      ></CheckOptionGroup>
    </>
  );
};

const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
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
  },
};
export default AddUserInfoForm;
