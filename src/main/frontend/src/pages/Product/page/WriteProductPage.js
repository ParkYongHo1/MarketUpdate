import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Font from "../atom/Font";
import Span from "../atom/Span";
import Wrapper from "../atom/Wrapper";
import InputDiv from "../atom/InputDiv";
import FlexDiv from "../atom/FlexDiv";
import PositionDiv from "../atom/PositionDiv";
import Xbtn from "../atom/Xbtn";
import P from "../atom/P";
import Input from "../atom/Input";
import axios from "axios";
import SelectOptionGroup from "../molecules/SelectOptionGroup";
import Textarea from "../atom/Textarea";
import AddressInput from "../molecules/AddressInput";
import Button from "../atom/Button";
import DisabledButton from "../../Login/atoms/DisabledButton";

const WriteProduct = () => {
  const inputRef = useRef(null);
  const [showImages, setShowImages] = useState([]);
  const [user, setUser] = useState({
    productWriter: "",
    productTitle: "",
    productPrice: "",
    productCategory: [],
    productContent: "",
    productAddress: "",
    longitude: "",
    latitude: "",
    productJibunAddress: "",
  });

  const handleInputFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUploadImage = async (files) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]); // images라는 키로 formData에 저장
      console.log(formData);
    }

    try {
      const res = await axios.post("/product/image", formData);
      console.log(res);
      if (res.status == 200) {
        const data = await res.data;
        console.log("Images uploaded successfully:", data);
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const handleChangeImage = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 6) {
      imageUrlLists = imageUrlLists.slice(0, 6);
    }

    setShowImages(imageUrlLists);
    handleUploadImage(imageLists); // 선택한 이미지 벡엔드로 보내기
  };

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
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
  const handleProduct = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  return (
    <form encType="multipart/form-data" multiple>
      <input type="hidden"></input>
      <Wrapper>
        <Span>판매글 작성</Span>
        <Font padding>
          상품 이미지
          <Span required>*</Span>
        </Font>
        <P>❗최대 6장까지 등록가능합니다.</P>
        <FlexDiv>
          <InputDiv>
            <input
              type="file"
              hidden
              multiple
              ref={inputRef}
              accept="image/jpg, image/jpeg, image/png, image/gif"
              onChange={handleChangeImage}
            ></input>
            <FontAwesomeIcon
              onClick={handleInputFile}
              icon={faCloudArrowUp}
              style={{ color: "#74C0FC" }}
              size="3x"
            />
          </InputDiv>
          <FlexDiv>
            {showImages.map((image, id) => (
              <PositionDiv key={id}>
                <img
                  src={image}
                  alt={`${image}-${id}`}
                  width={100}
                  height={100}
                />
                <Xbtn onClick={() => handleDeleteImage(id)}>X</Xbtn>
              </PositionDiv>
            ))}
          </FlexDiv>
        </FlexDiv>

        <Font padding>
          상품제목<Span required>*</Span>
        </Font>
        <P>❗직관적인 상품명을 입력하시면 클릭률이 올라갑니다.</P>
        <Input
          onChange={handleProduct}
          type="text"
          placeholder="상품 제목을 입력해주세요"
          name="productTitle"
          value={user.productTitle}
        ></Input>
        <Font padding>
          상품가격<Span required>*</Span>
        </Font>
        <Input
          onChange={handleProduct}
          type="text"
          placeholder="상품 가격을 입력해주세요 "
          name="productPrice"
          value={user.productPrice}
        ></Input>
        <Font padding>
          상품카테고리<Span required>*</Span>
        </Font>
        <SelectOptionGroup
          setUser={setUser}
          user={user}
          options={checkOption}
          name="productCategory"
        ></SelectOptionGroup>
        <Font padding>거래희망장소</Font>
        <AddressInput user={user} setUser={setUser}></AddressInput>
        <Font padding>
          상품정보<Span required>*</Span>
        </Font>
        <Textarea
          onChange={handleProduct}
          rows="20"
          cols="100"
          wrap="hard"
          name="productContent"
          value={user.productContent}
        ></Textarea>
        {user.productTitle !== "" &&
        user.productPrice !== "" &&
        user.productContent !== "" &&
        user.productCategory?.length !== 0 ? (
          <Button type="submit">작성완료</Button>
        ) : (
          <DisabledButton disabled>작성완료</DisabledButton>
        )}
      </Wrapper>
    </form>
  );
};

export default WriteProduct;
