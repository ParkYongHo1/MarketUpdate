import FooterContainer from "./atom/FooterContainer";
import FooterDiv from "./atom/FooterDiv";
import FooterLeftDiv from "./atom/FooterLeftDiv";
import FooterSpan from "./atom/FooterSpan";
import FooterRightDiv from "./atom/FooterRightDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterDiv>
        <FooterLeftDiv>
          <div>
            <FooterSpan>대표 박용호</FooterSpan>
            <FooterSpan>사업자번호 123-23-00012</FooterSpan>
            <FooterSpan>직업정보제공사업 신고번호 12345678989</FooterSpan>
            <FooterSpan>통신판매업 신고번호 2022-마포-22</FooterSpan>
            <FooterSpan>주소 괴안동 170-1(캐럿서비스)</FooterSpan>
            <FooterSpan>전화 1234-1234고객문의 qkaxhf8823@naver.com</FooterSpan>
            <div>
              <FooterSpan>신한은행 채무지급보증 안내</FooterSpan>
              <FooterSpan>
                당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
                계약을 체결하여 안전거래를 보장하고 있습니다.
              </FooterSpan>
              <FooterSpan>
                크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
                상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관 한
                의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
                거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하 는
                내용에 대한 책임은 크림(주)에 있습니다.
              </FooterSpan>
            </div>
          </div>
          <FooterRightDiv>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </FooterRightDiv>
        </FooterLeftDiv>
      </FooterDiv>
    </FooterContainer>
  );
};
export default Footer;
