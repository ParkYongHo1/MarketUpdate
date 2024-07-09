import HeaderBody from "./atom/HeaderBody";
import HeaderContainer from "./atom/HeaderContainer";
import HeaderContentContainer from "./atom/HeaderContentContainer";
import HeaderContentDiv from "./atom/HeaderContentDiv";
import HeaderDiv from "./atom/HeaderDiv";
import HeaderUserContainer from "./atom/HeaderUserContainer";
import HeaderUserDiv from "./atom/HeaderUserDiv";
import HeaderUserBox from "./atom/HeaderUserBox";
import HeaderEventBox from "./atom/HeaderEventBox";
import HeaderEventContainer from "./atom/HeaderEventContainer";
import HeaderEventDiv from "./atom/HeaderEventDiv";
import HeaderDot from "./atom/HeaderDot";
import HeaderImgBox from "./atom/HeaderImgBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  console.log(useSelector((state) => state.user.user));
  return (
    <HeaderBody>
      <HeaderUserContainer>
        <HeaderUserDiv>
          {user != null ? (
            <>
              <HeaderUserBox to="/faq">고객센터</HeaderUserBox>
              <HeaderUserBox to="/profile">마이페이지</HeaderUserBox>
              <HeaderUserBox onClick={handleLogout}>로그아웃</HeaderUserBox>
            </>
          ) : (
            <>
              <HeaderUserBox to="/faq">고객센터</HeaderUserBox>
              <HeaderUserBox to="/login">로그인</HeaderUserBox>
            </>
          )}
        </HeaderUserDiv>
      </HeaderUserContainer>
      <HeaderContainer>
        <HeaderDiv>
          <HeaderImgBox to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              width={130}
              alt="logo"
            />
          </HeaderImgBox>
          <HeaderContentContainer>
            {user != null ? (
              <>
                <HeaderContentDiv>
                  <div style={{ position: "relative" }}>
                    <FontAwesomeIcon icon={faBell} size="lg" />
                    <HeaderDot></HeaderDot>
                  </div>
                </HeaderContentDiv>
                <HeaderContentDiv>
                  <div style={{ position: "relative" }}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    <HeaderDot></HeaderDot>
                  </div>
                </HeaderContentDiv>
                <HeaderContentDiv>
                  <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </div>
                </HeaderContentDiv>
                <HeaderContentDiv to="/product/write">
                  <div>
                    <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                  </div>
                </HeaderContentDiv>
              </>
            ) : (
              <>
                {" "}
                <HeaderContentDiv>
                  <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </div>
                </HeaderContentDiv>
              </>
            )}
          </HeaderContentContainer>
        </HeaderDiv>
      </HeaderContainer>
      <HeaderEventContainer>
        <HeaderEventDiv>
          <HeaderEventBox to="ranking">랭킹</HeaderEventBox>
          <HeaderEventBox to="event">이벤트</HeaderEventBox>
        </HeaderEventDiv>
      </HeaderEventContainer>
    </HeaderBody>
  );
};

export default Header;
