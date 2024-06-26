import DetailWarnDiv from "../atom/DetailWarnDiv";
import DetailWarnContainer from "../atom/DetailWarnContainer";
import Font1 from "../atom/Font1";
import Font2 from "../atom/Font2";
import Span from "../atom/Span";

const ProductWarningMsg = () => {
  return (
    <DetailWarnContainer>
      <DetailWarnDiv>
        <Span>❗</Span>
        <Span>거래 전 주의사항 안내</Span>
        <Font1>
          판매자가 별도의 메신저로 결제링크를 보내거나 직거래(직접송금)을 <br />
          유도하는 경우 사기일 가능성이 높으니 거래를 자제해 주시고
          <br />
        </Font1>
        <Font2>
          <Span>신고</Span>해주시기 바랍니다.
        </Font2>
      </DetailWarnDiv>
    </DetailWarnContainer>
  );
};

export default ProductWarningMsg;
