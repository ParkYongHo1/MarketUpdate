import Wrapper from "./atom/Wrapper";
import Box from "./atom/Box";
import Container from "./atom/Container";
import FlexDiv from "./atom/FlexDiv";
import AlertBox from "../../components/AlertBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faKey,
  faPhone,
  faAddressBook,
  faPen,
  faStar,
  faHeart,
  faFire,
  faBullhorn,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./templates/SideMenu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderContent from "./templates/RenderContent";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const activetab = useSelector((state) => state.profile.activeTab);
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initMypage = async () => {
      if (!isLoggedIn) {
        setShowAlert(true);
      }
    };
    initMypage();
  }, [isLoggedIn]);

  return (
    <Container>
      <Wrapper>
        <Box left>
          <Box profile>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              width={100}
              height={100}
            />
            <FlexDiv>
              <Box name>{user.nickname}</Box>
            </FlexDiv>
            <button> 프로필 수정</button>
          </Box>
          <SideMenu />
        </Box>
        <Box right>
          <Box userInfo>
            <FlexDiv>
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexDiv>
          </Box>
          {RenderContent()}
        </Box>
      </Wrapper>
      {showAlert && (
        <AlertBox
          onClose={() => {
            setShowAlert(false);
            navigate("/");
          }}
        />
      )}
    </Container>
  );
};

export default Profile;
