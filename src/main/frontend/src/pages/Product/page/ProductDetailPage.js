import ProductContainer from "../atom/ProductDetailUser/ProductContainer";
import Body from "../../Login/atoms/Body";
import useTimeAgo from "../../../hooks/useTimeAgo";
import ProductDetailContentTemplates from "../templates/ProductDetailContentTemplates";
import ProductDetailProductInfoTemplates from "../templates/ProduvtDetailProductInfoTemplates";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailPage = () => {
  const contentTime = useTimeAgo("2024-06-20 11:22:00");
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `/product/detail?product_seq=${productId}`
        );
        console.log(response);
        setProduct(response.data);
      } catch (error) {}
    };
    fetchProduct();
  }, [productId]);
  return (
    <Body>
      <ProductContainer>
        <ProductDetailProductInfoTemplates
          product={product}
        ></ProductDetailProductInfoTemplates>
        <ProductDetailContentTemplates
          product={product}
        ></ProductDetailContentTemplates>
      </ProductContainer>
    </Body>
  );
};

export default ProductDetailPage;
