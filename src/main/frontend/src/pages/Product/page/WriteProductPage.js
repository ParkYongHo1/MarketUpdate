import { useEffect, useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { write, reset } from "../../../slices/productSlice";

const WriteProduct = () => {
  const inputRef = useRef(null);
  const [showImages, setShowImages] = useState([]);
  const product = useSelector((state) => state.product.product);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(write({ ...product, reg_member: user.nickname }));
  }, []);
  console.log(product);

  const handleInputFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUploadImage = async (files) => {
    console.log(files[0]);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`images${[i]}`, files[i]); // images라는 키로 formData에 저장
    }
    try {
      const res = await axios.post("/product/image", formData);
      if (res.status === "200") {
        const data = await res.data;
        // Assuming the response contains an array of image URLs

        console.log("Images uploaded successfully:", data);
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  console.log(product);

  const handleChangeImage = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    const readAndEncodeImage = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    };
    Promise.all(Array.from(imageLists).map(readAndEncodeImage))
      .then((encodedImages) => {
        imageUrlLists.push(...encodedImages);
        if (imageUrlLists.length > 6) {
          imageUrlLists = imageUrlLists.slice(0, 6);
        }
        setShowImages(imageUrlLists);
        console.log(imageLists);
        dispatch(
          write({
            ...product,
            product_image: imageLists, // 이미지경로 저장
          })
        );
        handleUploadImage(product.product_image);
      })
      .catch((error) => {
        console.error("Error encoding images:", error);
      });
  };

  const handleDeleteImage = (id) => {
    const updatedImages = showImages.filter((_, index) => index !== id);
    setShowImages(updatedImages);
    dispatch(
      write({
        ...product,
        product_image: updatedImages, // Update Redux state with remaining images
      })
    );
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

  const handleProductChange = (e) => {
    const { name, value } = e.target;

    dispatch(write({ ...product, [name]: value }));
  };
  const heandleWriteProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/product/write", product);
      if (res.data.status == "200") {
        dispatch(reset()); // 상태 초기화
        setShowImages([]); // 로컬 이미지 상태 초기화
        console.log("good");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form encType="multipart/form-data" multiple onSubmit={heandleWriteProduct}>
      <input type="hidden" />
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
            />
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
                <img src={image} alt={`image-${id}`} width={100} height={100} />
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
          onChange={handleProductChange}
          type="text"
          placeholder="상품 제목을 입력해주세요"
          name="title"
          value={product.title || ""}
        />
        <Font padding>
          상품가격<Span required>*</Span>
        </Font>
        <Input
          onChange={handleProductChange}
          type="text"
          placeholder="상품 가격을 입력해주세요"
          name="price"
          value={product.price || ""}
        />
        <Font padding>
          상품카테고리<Span required>*</Span>
        </Font>
        <SelectOptionGroup options={checkOption} name="category" />
        <Font padding>거래희망장소</Font>
        <AddressInput
          user={product}
          setUser={(newLocation) =>
            dispatch(write({ ...product, location: newLocation }))
          }
        />
        <Font padding>
          상품정보<Span required>*</Span>
        </Font>
        <Textarea
          onChange={handleProductChange}
          rows="20"
          cols="100"
          wrap="hard"
          name="content"
          value={product.content || ""}
        />
        {product.title &&
        product.price &&
        product.content &&
        product.category?.length !== 0 ? (
          <Button type="submit">작성완료</Button>
        ) : (
          <Button disabled disabledButton>
            작성완료
          </Button>
        )}
      </Wrapper>
    </form>
  );
};

export default WriteProduct;
