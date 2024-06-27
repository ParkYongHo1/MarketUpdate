import ProductContainer from "../atom/ProductDetailUser/ProductContainer";
import Body from "../../Login/atoms/Body";
import useTimeAgo from "../../../hooks/useTimeAgo";

import ProductDetailContentTemplates from "../templates/ProductDetailContentTemplates";
import ProductDetailProductInfoTemplates from "../templates/ProduvtDetailProductInfoTemplates";

const ProductDetailPage = () => {
  const contentTime = useTimeAgo("2024-06-20 11:22:00");
  return (
    <Body>
      <ProductContainer>
        <ProductDetailProductInfoTemplates></ProductDetailProductInfoTemplates>
        <ProductDetailContentTemplates></ProductDetailContentTemplates>
      </ProductContainer>
    </Body>
  );
};

export default ProductDetailPage;
