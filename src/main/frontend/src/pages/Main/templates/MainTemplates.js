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
import moment from "moment";
const MainTemplates = () => {
  const [contentTime, setContentTime] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const updateTime = () => {
      const datetime = moment("2024-06-20 11:22:00"); // 이 형식으로 저장하기
      const now = moment();
      const duration = moment.duration(now.diff(datetime));

      let seconds = duration.asSeconds();
      let minute = duration.asMinutes();
      let hours = duration.asHours();
      let days = duration.asDays();
      let weeks = duration.asWeeks();
      let month = duration.asMonths();
      let year = duration.asYears();

      if (minute < 1) {
        setContentTime(parseInt(seconds) + "초 전");
      } else if (hours < 1) {
        setContentTime(parseInt(minute) + "분 전");
      } else if (hours < 24) {
        setContentTime(parseInt(hours) + "시간 전");
      } else if (weeks < 1) {
        setContentTime(parseInt(days) + "일 전");
      } else if (month < 1) {
        setContentTime(parseInt(weeks) + "주 전");
      } else if (year < 1) {
        setContentTime(parseInt(month) + "달 전");
      } else {
        setContentTime(parseInt(year) + "년 전");
      }
    };

    updateTime();
  }, []); // 새로 고침시 1회 실행

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
