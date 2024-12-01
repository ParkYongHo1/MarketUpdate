import ProductWriterInfo from "../atom/ProductDetailUser/ProductWriterInfo";
import ProductWriterImg from "../atom/ProductDetailUser/ProductWriterImg";
import ProductWriterName from "../atom/ProductDetailUser/ProductWriterName";
import ProductWriterAddress from "../atom/ProductDetailUser/ProductWriterAddress";
import ProductManner from "../atom/ProductDetailUser/ProductManner";
import ProductWriterInfoDiv from "../atom/ProductDetailUser/ProductWriterInfoDiv";
const ProductDetailWriterInfo = ({ member }) => {
  console.log(member);

  return (
    <>
      <ProductWriterInfoDiv>
        <ProductWriterInfo>
          <ProductWriterImg
            src={process.env.PUBLIC_URL + "/logo.png"}
          ></ProductWriterImg>
          <div>
            <ProductWriterName>
              {member?.nickname || "작성자"}
            </ProductWriterName>
            <ProductWriterAddress>
              {member?.location?.address || "서울특별시 중구"}
            </ProductWriterAddress>
          </div>
        </ProductWriterInfo>
        <ProductWriterInfo>
          <ProductWriterImg
            src={process.env.PUBLIC_URL + "/logo.png"}
          ></ProductWriterImg>
          <div>
            <ProductManner>매너온도</ProductManner>
            <ProductManner>{member?.manner_temp || "36°C"}</ProductManner>
          </div>
        </ProductWriterInfo>
      </ProductWriterInfoDiv>
    </>
  );
};

export default ProductDetailWriterInfo;
