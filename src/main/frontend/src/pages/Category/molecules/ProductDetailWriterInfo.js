import ProductWriterInfo from "../atom/ProductDetailUser/ProductWriterInfo";
import ProductWriterImg from "../atom/ProductDetailUser/ProductWriterImg";
import ProductWriterName from "../atom/ProductDetailUser/ProductWriterName";
import ProductWriterAddress from "../atom/ProductDetailUser/ProductWriterAddress";
import ProductManner from "../atom/ProductDetailUser/ProductManner";
import ProductWriterInfoDiv from "../atom/ProductDetailUser/ProductWriterInfoDiv";
const ProductDetailWriterInfo = () => {
  return (
    <>
      <ProductWriterInfoDiv>
        <ProductWriterInfo>
          <ProductWriterImg
            src={process.env.PUBLIC_URL + "/logo.png"}
          ></ProductWriterImg>
          <div>
            <ProductWriterName>작성자</ProductWriterName>
            <ProductWriterAddress>address</ProductWriterAddress>
          </div>
        </ProductWriterInfo>
        <ProductWriterInfo>
          <ProductWriterImg
            src={process.env.PUBLIC_URL + "/logo.png"}
          ></ProductWriterImg>
          <div>
            <ProductManner>36.5°C</ProductManner>
            <ProductManner>매너온도</ProductManner>
          </div>
        </ProductWriterInfo>
      </ProductWriterInfoDiv>
    </>
  );
};

export default ProductDetailWriterInfo;
