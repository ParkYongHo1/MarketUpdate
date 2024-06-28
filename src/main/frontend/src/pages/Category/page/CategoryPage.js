import HeaderEventBox from "../../../layout/header/atom/HeaderEventBox";
import HeaderEventContainer from "../../../layout/header/atom/HeaderEventContainer";
import CategoryPageDiv from "../atom/CategoryPage/CategoryPageDiv";
import CategoryPageHeader from "../atom/CategoryPage/CategoryPageHeader";

import MainDiv from "../../Main/atoms/MainDiv";
import MainDivTitle from "../../Main/atoms/MainDivTitle";
import MainMoreButton from "../../Main/atoms/MainMoreButton";
import MainDivContent from "../../Main/atoms/MainDivContent";
import TitleDiv from "../../Main/atoms/TitleDiv";
import MainDivContentBox from "../../Main/atoms/MainDivContentBox";
import MainContentImg from "../../Main/atoms/MainContentImg";
import MainContentTitle from "../../Main/atoms/MainContentTitle";
import MainContentFont from "../../Main/atoms/MainContentFont";
import useTimeAgo from "../../../hooks/useTimeAgo";
const CategoryPage = () => {
  const contentTime = useTimeAgo("2024-06-20 11:22:00");

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
      <MainDiv>
        <TitleDiv style={{ marginTop: "50px" }}>
          <MainDivTitle>의상</MainDivTitle>
          <MainDivTitle>최신순</MainDivTitle>
        </TitleDiv>

        <MainDivContent>
          {contents.map((content, index) => (
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
              {/* Display time ago */}
            </MainDivContentBox>
          ))}
        </MainDivContent>
      </MainDiv>
    </>
  );
};
export default CategoryPage;
