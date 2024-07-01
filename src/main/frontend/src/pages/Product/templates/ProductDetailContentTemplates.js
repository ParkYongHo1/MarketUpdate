import BoldFont from "../atom/ProductDetailContent/BoldFont";
import DetailInfoContentContainer from "../atom/ProductDetailContent/DetailInfoContentContainer";
import DetailInfoContentDiv from "../atom/ProductDetailContent/DetailInfoContentDiv";
import DetailInfoLeft from "../atom/ProductDetailContent/DetailInfoLeft";
import DetailProductInfoDiv from "../atom/ProductDetailContent/DetailProductInfoDiv";

const ProductDetailContentTemplates = () => {
  return (
    <>
      <DetailInfoContentContainer>
        <DetailInfoContentDiv>
          <DetailInfoLeft>
            <BoldFont>
              <span>상품정보</span>
            </BoldFont>
            <hr />
            <DetailProductInfoDiv>
              <span> text</span>
            </DetailProductInfoDiv>
          </DetailInfoLeft>
        </DetailInfoContentDiv>
      </DetailInfoContentContainer>
    </>
  );
};
export default ProductDetailContentTemplates;
