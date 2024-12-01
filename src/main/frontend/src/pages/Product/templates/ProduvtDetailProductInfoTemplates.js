import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import ProductDiv from "../atom/ProductDetailUser/ProductDiv";
import ProductLeftDiv from "../atom/ProductDetailUser/ProductLeftDiv";
import ProductRightDiv from "../atom/ProductDetailUser/ProductRightDiv";
import ProductInfoDiv from "../atom/ProductDetailUser/ProductInfoDiv";
import KakaoMapApi from "../molecules/KakaoMapApi";
import ProductImgSwiper from "../molecules/ProductImgSwiper";
import Title from "../../Login/atoms/Title";
import ProductWarningMsg from "../molecules/ProductWarningMsg";
import MiddleFont from "../atom/ProductDetailUser/MiddleFont";
import Div from "../../Login/atoms/Div";
import useTimeAgo from "../../../hooks/useTimeAgo";
import DetailInfoSub from "../atom/ProductDetailUser/DetailInfoSub";
import DetailFont from "../atom/ProductDetailUser/DetailFont";
import FontDot from "../atom/ProductDetailUser/FontDot";
import ProductDetailProductInfo from "../molecules/ProductDetailProductInfo";
import ProductDetailWriterInfo from "../molecules/ProductDetailWriterInfo";

const ProductDetailProductInfoTemplates = ({ product }) => {
  const contentTime = useTimeAgo("2024-06-20 11:22:00");
  console.log(product);

  return (
    <ProductDiv>
      <ProductLeftDiv>
        <ProductImgSwiper></ProductImgSwiper>
      </ProductLeftDiv>
      <ProductRightDiv>
        <ProductInfoDiv>
          <Div wrapFlex>
            <Title>{product?.product?.title || "제목 없음"}</Title>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              size="lg"
              style={{ cursor: "pointer" }}
            />
          </Div>
          <MiddleFont>
            {product?.product?.price
              ? `${product.product.price.toLocaleString()}원`
              : "0원"}
          </MiddleFont>

          <DetailInfoSub>
            <DetailFont>
              <span>{contentTime}</span>
              <FontDot>·</FontDot>
              <span>조회 </span>
              <span>{product?.product?.view_cnt || "0"}</span>
              <span> 관심</span>
              <span>{product?.product?.like_cnt || " 0"}</span>
            </DetailFont>
          </DetailInfoSub>
          <ProductDetailWriterInfo
            member={product.member}
          ></ProductDetailWriterInfo>
          <ProductWarningMsg></ProductWarningMsg>
          <KakaoMapApi member={product.member}></KakaoMapApi>
          <ProductDetailProductInfo
            product={product}
          ></ProductDetailProductInfo>
        </ProductInfoDiv>
      </ProductRightDiv>
    </ProductDiv>
  );
};
export default ProductDetailProductInfoTemplates;
