import ProductContainer from "../atom/ProductContainer";
import Body from "../../Login/atoms/Body";
import ProductDiv from "../atom/ProductDiv";
import ProductLeftDiv from "../atom/ProductLeftDiv";
import ProductRightDiv from "../atom/ProductRightDiv";
import ProductInfoDiv from "../atom/ProductInfoDiv";
import ProductWriterInfoDiv from "../atom/ProductWriterInfoDiv";
import KakaoMapApi from "../templates/KakaoMapApi";
import ProductImgSwiper from "../templates/ProductImgSwiper";
import ProductButtonDiv from "../atom/ProductButtonDiv";
import Title from "../../Login/atoms/Title";
import ProductWarningMsg from "../templates/ProductWarningMsg";
import MiddleFont from "../atom/MiddleFont";
import BtnDiv from "../atom/BtnDiv";
import ProductWriterInfo from "../atom/ProductWriterInfo";
import FlexButton from "../atom/FlexButton";
import ProductWriterImg from "../atom/ProductWriterImg";
import ProductWriterName from "../atom/ProductWriterName";
import ProductWriterAddress from "../atom/ProductWriterAddress";
const ProductDetailPage = () => {
  return (
    <Body>
      <ProductContainer>
        <ProductDiv>
          <ProductLeftDiv>
            <ProductImgSwiper></ProductImgSwiper>
          </ProductLeftDiv>
          <ProductRightDiv>
            <ProductInfoDiv>
              <Title>제목</Title>
              <MiddleFont>150,000원</MiddleFont>
              <BtnDiv>
                <FlexButton>삭제하기</FlexButton>
                <FlexButton>수정하기</FlexButton>
              </BtnDiv>
              <ProductWriterInfoDiv>
                <ProductWriterInfo>
                  <ProductWriterImg
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    width={32}
                  ></ProductWriterImg>

                  <div>
                    <ProductWriterName>작성자</ProductWriterName>
                    <ProductWriterAddress>address</ProductWriterAddress>
                  </div>
                </ProductWriterInfo>
                <div>
                  <img></img>
                  <div>36.5</div>
                </div>
              </ProductWriterInfoDiv>
              <ProductWarningMsg></ProductWarningMsg>
              <KakaoMapApi></KakaoMapApi>
              <BtnDiv>
                <FlexButton>채팅하기</FlexButton>
                <FlexButton>좋아요</FlexButton>
              </BtnDiv>
            </ProductInfoDiv>
          </ProductRightDiv>
        </ProductDiv>
      </ProductContainer>
    </Body>
  );
};

export default ProductDetailPage;
