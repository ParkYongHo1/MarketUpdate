import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ProductDiv from "../atom/ProductDetailUser/ProductDiv";
import ProductLeftDiv from "../atom/ProductDetailUser/ProductLeftDiv";
import ProductRightDiv from "../atom/ProductDetailUser/ProductRightDiv";
import ProductInfoDiv from "../atom/ProductDetailUser/ProductInfoDiv";
import KakaoMapApi from "../molecules/KakaoMapApi";
import ProductImgSwiper from "../molecules/ProductImgSwiper";
import Title from "../../Login/atoms/Title";
import ProductWarningMsg from "../molecules/ProductWarningMsg";
import MiddleFont from "../atom/ProductDetailUser/MiddleFont";
import FlexDiv from "../../Login/atoms/FlexDiv";
import useTimeAgo from "../../../hooks/useTimeAgo";
import DetailInfoSub from "../atom/ProductDetailUser/DetailInfoSub";
import DetailFont from "../atom/ProductDetailUser/DetailFont";
import FontDot from "../atom/ProductDetailUser/FontDot";
import ProductDetailProductInfo from "../molecules/ProductDetailProductInfo";
import ProductDetailWriterInfo from "../molecules/ProductDetailWriterInfo";

const ProductDetailProductInfoTemplates = () => {
  const contentTime = useTimeAgo("2024-06-20 11:22:00");
  return (
    <ProductDiv>
      <ProductLeftDiv>
        <ProductImgSwiper></ProductImgSwiper>
      </ProductLeftDiv>
      <ProductRightDiv>
        <ProductInfoDiv>
          <FlexDiv>
            <Title>제목</Title>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              style={{ cursor: "pointer" }}
            />
          </FlexDiv>
          <MiddleFont>150,000원</MiddleFont>
          <DetailInfoSub>
            <DetailFont>
              <span>{contentTime}</span>
              <FontDot>·</FontDot>
              <span>조회</span>
              <span>0</span> <FontDot>·</FontDot>
              <span>관심 0 </span>
            </DetailFont>
          </DetailInfoSub>
          <ProductDetailWriterInfo></ProductDetailWriterInfo>
          <ProductWarningMsg></ProductWarningMsg>
          <KakaoMapApi></KakaoMapApi>
          <ProductDetailProductInfo></ProductDetailProductInfo>
        </ProductInfoDiv>
      </ProductRightDiv>
    </ProductDiv>
  );
};
export default ProductDetailProductInfoTemplates;
