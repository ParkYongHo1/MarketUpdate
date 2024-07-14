import Wrapper from "./atom/Wrapper";
import Box from "./atom/Box";
import Container from "./atom/Container";
import FlexDiv from "./atom/FlexDiv";

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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderContent from "./templates/RenderContent";
const Profile = () => {
  const activetab = useSelector((state) => state.profile.activeTab);
  return (
    <Container>
      <Wrapper>
        <Box left>
          <Box profile>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              width={100}
              height={100}
            ></img>
            <FlexDiv>
              <Box name>이름sfsfasdfsf</Box>
            </FlexDiv>
            <button> 프로필 수정</button>
          </Box>
          <SideMenu></SideMenu>
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
    </Container>
  );
};
export default Profile;
