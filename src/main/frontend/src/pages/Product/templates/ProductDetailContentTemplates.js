import axios from "axios";
import BoldFont from "../atom/ProductDetailContent/BoldFont";
import DetailInfoContentContainer from "../atom/ProductDetailContent/DetailInfoContentContainer";
import DetailInfoContentDiv from "../atom/ProductDetailContent/DetailInfoContentDiv";
import DetailInfoLeft from "../atom/ProductDetailContent/DetailInfoLeft";
import DetailProductInfoDiv from "../atom/ProductDetailContent/DetailProductInfoDiv";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContentTemplates = ({ product }) => {
  console.log(product);

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
              <span>{product?.product?.content || "상품정보입니다."}</span>
            </DetailProductInfoDiv>
          </DetailInfoLeft>
        </DetailInfoContentDiv>
      </DetailInfoContentContainer>
    </>
  );
};
export default ProductDetailContentTemplates;
