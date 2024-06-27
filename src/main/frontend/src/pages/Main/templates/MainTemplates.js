import MainContainer from "../atoms/MainContainer";
import MainSwiper from "../organisms/MainSwiper";
import MainCategoryDiv from "../atoms/MainCategoryDiv";
import MainDiv from "../atoms/MainDiv";
import CategoryGroup from "../organisms/CategoryGroup";
import MainDivTitle from "../atoms/MainDivTitle";
import MainMoreButton from "../atoms/MainMoreButton";
import MainDivContent from "../atoms/MainDivContent";
import TitleDiv from "../atoms/TitleDiv";
import MainDivContentBox from "../atoms/MainDivContentBox";
import MainContentImg from "../atoms/MainContentImg";
import MainContentTitle from "../atoms/MainContentTitle";
import MainContentFont from "../atoms/MainContentFont";
import { useState, useEffect } from "react";
import useTimeAgo from "../../../hooks/useTimeAgo";
const MainTemplates = () => {
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
  ];
  return (
    <>
      <MainSwiper></MainSwiper>
      <MainContainer>
        <MainDiv>
          <MainCategoryDiv>
            <TitleDiv>
              <MainDivTitle>카테고리</MainDivTitle>
            </TitleDiv>
            <CategoryGroup></CategoryGroup>
          </MainCategoryDiv>
        </MainDiv>
        <MainDiv>
          <TitleDiv>
            <MainDivTitle>개인별 추천 목록</MainDivTitle>
            <MainMoreButton to="/recommend">더보기</MainMoreButton>
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
        <MainDiv>
          <TitleDiv>
            <MainDivTitle to="/latest">방금 등록된 상품</MainDivTitle>
            <MainMoreButton>더보기</MainMoreButton>
          </TitleDiv>
          <MainDivContent>
            {contents.length > 0 ? (
              contents.map((content, index) => (
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
                  <MainContentFont>{contentTime}</MainContentFont>{" "}
                  {/* Display time ago */}
                </MainDivContentBox>
              ))
            ) : (
              <div>등록된 상품이 없습니다.</div>
            )}
          </MainDivContent>
        </MainDiv>
      </MainContainer>
    </>
  );
};

export default MainTemplates;
