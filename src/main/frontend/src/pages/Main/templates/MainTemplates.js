import Container from "../atoms/Container";
import MainSwiper from "../organisms/MainSwiper";
import Div from "../atoms/Div";
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
import StyledLink from "../atoms/StyledLink";
const MainTemplates = () => {
  const contentTime = useTimeAgo("2024-06-20 11:22:00");

  const contents = [
    {
      id: "1",
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      id: "2",
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      id: "3",
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      id: "4",
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      writer: "박용호",
      address: "마포대로 21 (다보빌딩)",
      time: "1분전",
    },
    {
      id: "5",
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
      <Container>
        <Div>
          <Div title>
            <MainDivTitle>카테고리</MainDivTitle>
          </Div>
        </Div>
        <CategoryGroup></CategoryGroup>
        <div>
          <div>관심 카테고리 상품 보기</div>
          <button>바로가기</button>
        </div>
        <Div title>
          <MainDivTitle>방금 등록된 상품</MainDivTitle>
          <StyledLink moreButton to="/latest">
            더보기
          </StyledLink>
        </Div>

        <MainDivContent>
          {contents.map((content, index) => (
            <MainDivContentBox key={index} to={`/product/${content.id}`}>
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
      </Container>
    </>
  );
};

export default MainTemplates;
