import Body from "./atom/Body";
import HeaderContainer from "./atom/HeaderContainer";
import HeaderContentContainer from "./atom/HeaderContentContainer";
import HeaderContentDiv from "./atom/HeaderContentDiv";
import HeaderDiv from "./atom/HeaderDiv";
const Header = () => {
  return (
    <Body>
      <HeaderContainer>
        <HeaderDiv>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              width={130}
              alt="logo"
            />
          </div>
          <HeaderContentContainer>
            <HeaderContentDiv>
              <div>박용호님 환영합니다</div>
            </HeaderContentDiv>
            <HeaderContentDiv>
              <div>메시지</div>
            </HeaderContentDiv>
            <HeaderContentDiv>
              <div>검색</div>
            </HeaderContentDiv>
            <HeaderContentDiv>
              <div>로그아웃</div>
            </HeaderContentDiv>
          </HeaderContentContainer>
        </HeaderDiv>
      </HeaderContainer>
    </Body>
  );
};

export default Header;
