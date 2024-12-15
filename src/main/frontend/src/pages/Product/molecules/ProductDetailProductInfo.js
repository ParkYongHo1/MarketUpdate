import React, { useEffect } from "react"; // useEffect 추가
import { useSearchParams } from "react-router-dom"; // useSearchParams 추가
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DetailInfoContentBox from "../atom/ProductDetailContent/DetailInfoContentBox";
import DetailInfoContentCategori from "../atom/ProductDetailContent/DetailInfoContentCategori";
import DetailInfoContentInfo from "../atom/ProductDetailContent/DetailInfoContentInfo";
import DetailInfoContentSubBox from "../atom/ProductDetailContent/DetailInfoContentSubBox";
import DetailInfoContentTitle from "../atom/ProductDetailContent/DetailInfoContentTitle";
import DetailInfoRight from "../atom/ProductDetailContent/DetailInfoRight";
import BoldFont from "../atom/ProductDetailContent/BoldFont";
import BtnDiv from "../atom/ProductDetailUser/BtnDiv";
import FlexButton from "../atom/ProductDetailUser/FlexButton";
import SubButton from "../atom/ProductDetailUser/SubButton";
import axios from "axios"; // axios import 추가
import { useSelector } from "react-redux";

const ProductDetailProductInfo = ({ product }) => {
  const userEmail = useSelector((state) => state.user.user.id);

  // 채팅 시작 함수
  const startChat = async () => {
    console.log({
      productSeq: product?.product?.product_seq,
      masterEmail: product?.product?.member_id,
      participantEmail: userEmail,
    });

    try {
      await axios.post(`/chat/startChat`, {
        productSeq: product?.product?.product_seq,
        masterEmail: product?.product?.member_id,
        participantEmail: userEmail,
      });
    } catch (error) {}
  };

  return (
    <DetailInfoRight>
      <BoldFont>
        <span>상품정보</span>
      </BoldFont>
      <DetailInfoContentBox>
        <DetailInfoContentSubBox>
          <DetailInfoContentTitle>
            <span style={{ marginLeft: "5%" }}>거래지역</span>
          </DetailInfoContentTitle>
          <DetailInfoContentInfo>
            {product?.product?.location?.address || "주소 정보가 없습니다"}
          </DetailInfoContentInfo>
        </DetailInfoContentSubBox>
        <DetailInfoContentCategori>
          <DetailInfoContentTitle>
            <span>카테고리</span>
          </DetailInfoContentTitle>
          <DetailInfoContentInfo>
            {product?.product?.category || "카테고리 정보가 없습니다"}
          </DetailInfoContentInfo>
        </DetailInfoContentCategori>
      </DetailInfoContentBox>
      <BtnDiv>
        <FlexButton onClick={startChat}>채팅하기</FlexButton>
        <SubButton>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </SubButton>
      </BtnDiv>
    </DetailInfoRight>
  );
};

export default ProductDetailProductInfo;
