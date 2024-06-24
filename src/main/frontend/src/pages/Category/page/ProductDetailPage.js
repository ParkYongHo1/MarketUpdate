import ProductContainer from "../atom/ProductContainer";
import Body from "../../Login/atoms/Body";
import ProductDiv from "../atom/ProductDiv";
import ProductLeftDiv from "../atom/ProductLeftDiv";
import ProductRightDiv from "../atom/ProductRightDiv";
import ProductInfoDiv from "../atom/ProductInfoDiv";
import ProductWriterInfoDiv from "../atom/ProductWriterInfoDiv";
import KakaoMapApi from "../templates/KakaoMapApi";

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
              <div>제목</div>
              <ProductWriterInfoDiv>
                <div>
                  <div>작성자</div>
                  <div>주소</div>
                </div>
                <div>
                  <img></img>
                  <div>36.5</div>
                </div>
              </ProductWriterInfoDiv>
              <KakaoMapApi></KakaoMapApi>
              <ProductButtonDiv>
                <button>채팅하기</button>
                <button>좋아요</button>
              </ProductButtonDiv>
            </ProductInfoDiv>
          </ProductRightDiv>
        </ProductDiv>
      </ProductContainer>
    </Body>
  );
};

export default ProductDetailPage;
