import axios from "axios";
import BoldFont from "../atom/ProductDetailContent/BoldFont";
import DetailInfoContentContainer from "../atom/ProductDetailContent/DetailInfoContentContainer";
import DetailInfoContentDiv from "../atom/ProductDetailContent/DetailInfoContentDiv";
import DetailInfoLeft from "../atom/ProductDetailContent/DetailInfoLeft";
import DetailProductInfoDiv from "../atom/ProductDetailContent/DetailProductInfoDiv";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContentTemplates = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`/product/detail`, {
          params: { product_seq: productId },
        });
        console.log(response.data);

        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };
    fetchProductDetail();
  }, []);

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
