import React, { useState, useEffect } from "react";
import "./css/FloatingButton.css"; // 스타일 파일을 별도로 관리
import Wrapper from "./atom/Wrapper";
import Box from "./atom/Box";
import TitleDiv from "./atom/TitleDIv";
import Span from "./atom/Span";
import Button from "./atom/Button";
import Frame from "./atom/Frame";
import FloatingFooter from "./atom/FloatingFooter";
import Icon from "./atom/Icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import Dot from "./atom/Dot";
import { useDispatch, useSelector } from "react-redux";
import FloatingList from "./FloatingList";
const FloatingButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isPopupVisible, setIsPopupVisible] = useState(false); //챗봇 팝업
  const [chatbotUrl, setChatbotUrl] = useState(""); //로컬 스토리지 챗봇

  //챗봇 팝업 열기
  const handleOpen = () => {
    setIsPopupVisible(true); //팝업 값 true로 변경 후 챗봇을 팝업에 표시
  };

  //챗봇 팝업 닫기
  const handleClose = () => {
    setIsPopupVisible(false); //팝업 값 false로 변경 후 팝업 닫기
  };

  return (
    <div>
      {isLoggedIn && (
        <>
          <Wrapper onClick={handleOpen}>
            <Dot floating>.</Dot>
          </Wrapper>

          <Box visible={isPopupVisible}>
            <TitleDiv>
              <Span>채팅</Span>
              <Button onClick={handleClose}>X</Button>
            </TitleDiv>
            <Frame>
              <div style={{ height: "75vh", overflowY: "auto" }}>
                <FloatingList />
              </div>
              <FloatingFooter>
                <div
                  style={{
                    display: "flex",
                    width: "80%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                    margin: "0 auto",
                  }}
                >
                  <Icon>
                    <FontAwesomeIcon
                      icon={faBell}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    />
                    <Dot>.</Dot>
                  </Icon>
                  <Icon>
                    <FontAwesomeIcon
                      icon={faComment}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    />

                    <Dot>.</Dot>
                  </Icon>
                </div>
              </FloatingFooter>
            </Frame>
          </Box>
        </>
      )}
    </div>
  );
};

export default FloatingButton;
