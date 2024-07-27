import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useState } from "react";
import HeaderEventBox from "../../../layout/header/atom/HeaderEventBox";
import HeaderEventContainer from "../../../layout/header/atom/HeaderEventContainer";
import CategoryPageDiv from "../atom/CategoryPage/CategoryPageDiv";
import CategoryPageHeader from "../atom/CategoryPage/CategoryPageHeader";
import CategoryTitle from "../atom/CategoryPage/CategoryTitle";
import Div from "../../Main/atoms/Div";
import MainDivContent from "../../Main/atoms/MainDivContent";
import TitleDiv from "../../Main/atoms/TitleDiv";
import MainDivContentBox from "../../Main/atoms/MainDivContentBox";
import MainContentImg from "../../Main/atoms/MainContentImg";
import MainContentTitle from "../../Main/atoms/MainContentTitle";
import MainContentFont from "../../Main/atoms/MainContentFont";
import useTimeAgo from "../../../hooks/useTimeAgo";
import ModalDiv from "../atom/CategoryPage/ModalDiv";
import ModalItem from "../atom/CategoryPage/ModalItem";
import Paging from "../../../components/Paging";

const CategoryPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1); // 페이지 상태 추가
  const itemsPerPage = 10;
  const contentTime = useTimeAgo("2024-06-20 11:22:00");
  const param = useParams();
  const contents = [
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
  ];
  // 현재 페이지에 따라 보여줄 항목 계산
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContents = contents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <HeaderEventContainer>
        <CategoryPageDiv>
          <CategoryPageHeader>카테고리</CategoryPageHeader>
          <div>
            <HeaderEventBox to="event">의상</HeaderEventBox>
            <HeaderEventBox to="event">식품</HeaderEventBox>
            <HeaderEventBox to="event">가구</HeaderEventBox>
            <HeaderEventBox to="event">전자기기</HeaderEventBox>
            <HeaderEventBox to="event">도서</HeaderEventBox>
            <HeaderEventBox to="event">반려동물용품</HeaderEventBox>
            <HeaderEventBox to="event">뷰티</HeaderEventBox>
            <HeaderEventBox to="event">나눔</HeaderEventBox>
          </div>
        </CategoryPageDiv>
      </HeaderEventContainer>
      <Div>
        <TitleDiv style={{ marginTop: "50px" }}>
          <CategoryTitle>{param.category}</CategoryTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <CategoryTitle
              style={{ cursor: "pointer" }}
              onClick={() => setOpenModal((prev) => !prev)}
            >
              최신순
            </CategoryTitle>
            {!openModal ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} />
            )}
            {openModal && (
              <ModalDiv
                style={{
                  position: "absolute",
                  top: "100%",
                  padding: "10px 20px",
                  background: "rgba(255, 255, 255, 1)",
                  border: "1px solid black",
                  fontSize: "12px",
                  width: "80%",
                }}
              >
                <ModalItem>최신순</ModalItem>
                <ModalItem>인기순</ModalItem>
                <ModalItem>댓글 많은순</ModalItem>
              </ModalDiv>
            )}
          </div>
        </TitleDiv>

        <MainDivContent>
          {currentContents.map((content, index) => (
            <MainDivContentBox key={index}>
              <MainContentImg>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={content.img}
                ></img>
              </MainContentImg>
              <MainContentTitle>{content.title}</MainContentTitle>
              <MainContentFont>{content.writer}</MainContentFont>
              <MainContentFont>{content.address}</MainContentFont>
              <MainContentTitle>150,000원</MainContentTitle>
              <MainContentFont>{contentTime}</MainContentFont>{" "}
            </MainDivContentBox>
          ))}
        </MainDivContent>
        <Paging page={page} contents={contents} setPage={setPage} />
      </Div>
    </>
  );
};
export default CategoryPage;
