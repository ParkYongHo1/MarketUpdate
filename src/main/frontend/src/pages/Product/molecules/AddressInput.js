import Button from "../../Main/atoms/StyledLink";
import Modal from "react-modal";
import DaumPostcode from "react-daum-postcode";
import Xbtn from "../../Login/atoms/Xbtn";
import { useState } from "react";
import Input from "../atom/Input";
import { useDispatch, useSelector } from "react-redux";
import { write } from "../../../slices/productSlice";
const AddressInput = ({ user, setUser }) => {
  const geoCoder = new window.kakao.maps.services.Geocoder();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const handleUser = (e) => {
    const { name, value } = e.target;
    dispatch(write({ ...product, [name]: value }));
  };

  const handleComplete = (data) => {
    setIsModalOpen(false); // 주소 선택 시 모달 닫기

    // 주소로 위도 경도 값 얻기
    geoCoder.addressSearch(data.address, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        dispatch(
          write({
            ...product,
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
  return (
    <>
      <Input
        onChange={handleUser}
        name="address"
        type="text"
        readOnly
        placeholder="주소를 입력해주세요."
        value={product.address}
      />
      <Button type="button" button onClick={() => setIsModalOpen(true)}>
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
export default AddressInput;
