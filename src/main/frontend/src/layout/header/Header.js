import HeaderBody from "./atom/HeaderBody";
import HeaderContainer from "./atom/HeaderContainer";
import HeaderContentContainer from "./atom/HeaderContentContainer";
import HeaderContentDiv from "./atom/HeaderContentDiv";
import HeaderDiv from "./atom/HeaderDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <HeaderBody>
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
              <div>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
            </HeaderContentDiv>
            <HeaderContentDiv>
              <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </div>
            </HeaderContentDiv>
            <HeaderContentDiv>
              <div>
                <FontAwesomeIcon icon={faPowerOff} size="lg" />
              </div>
            </HeaderContentDiv>
          </HeaderContentContainer>
        </HeaderDiv>
      </HeaderContainer>
    </HeaderBody>
  );
};

export default Header;
