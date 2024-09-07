import Box from "../atom/Box";
import FlexDiv from "../atom/FlexDiv";
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
import { useDispatch } from "react-redux";
import { tab } from "../../../slices/profileSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box info>
        <Box title>회원정보 수정</Box>
        <FlexDiv nomal onClick={() => dispatch(tab("changeProfile"))}>
          <Box font>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </Box>
          <Box font>개인정보 수정</Box>
        </FlexDiv>
        <Box title>나의 활동</Box>
        <FlexDiv nomal onClick={() => dispatch(tab("writeList"))}>
          <Box font>
            <FontAwesomeIcon
              icon={faPen}
              size="lg"
              style={{ color: "#b36914" }}
            />
          </Box>
          <Box font>작성 글 목록</Box>
        </FlexDiv>
        <FlexDiv nomal onClick={() => dispatch(tab("reviewList"))}>
          <Box font>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFD43B" }}
              size="lg"
            />
          </Box>
          <Box font>받은 거래 후기</Box>
        </FlexDiv>
        <FlexDiv nomal onClick={() => dispatch(tab("heartList"))}>
          <Box font>
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              style={{ color: "#f50000" }}
            />
          </Box>
          <Box font>관심 목록</Box>
        </FlexDiv>
        <Box title>새로운 소식</Box>
        <FlexDiv nomal onClick={() => dispatch(tab("notice"))}>
          <Box font>
            <FontAwesomeIcon
              icon={faBullhorn}
              size="lg"
              style={{ color: "#ff7300" }}
            />
          </Box>
          <Box font>공지사항</Box>
        </FlexDiv>
        <FlexDiv nomal onClick={() => dispatch(tab("faq"))}>
          <Box font>
            <FontAwesomeIcon
              icon={faQuestion}
              size="lg"
              style={{ color: "#0ecd11" }}
            />
          </Box>
          <Box font>자주 묻는 질문</Box>
        </FlexDiv>
      </Box>
    </>
  );
};
export default SideMenu;
