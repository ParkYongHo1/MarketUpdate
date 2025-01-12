import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FloatingList = ({ sampleChats }) => {
  // sampleChats props 추가

  const handleChatClick = (chat) => {
    console.log(chat.chatroomId);

    // 수정된 URL
    const chatWindow = window.open(
      `/chat/${chat.chatroomId}`, // chat.js 파일이 처리하는 경로
      "_blank", // 새 창에서 열기
      "width=800,height=600" // 새 창 크기
    );

    // 새 창이 열렸을 때 추가 작업을 할 수 있음 (예: 상태 전달)
    if (chatWindow) {
      chatWindow.onload = () => {
        // 채팅 페이지가 열렸을 때 추가적인 상태 전달 작업 가능
        chatWindow.postMessage({ masterEmail: chat.masterEmail }, "*");
      };
    }
  };
  console.log(sampleChats);

  return (
    <div style={containerStyle}>
      {sampleChats.map((chat, index) => (
        <div
          style={index === 0 ? lastItemStyle : itemStyle}
          key={chat.chatroomId}
          onClick={() => handleChatClick(chat)} // 클릭 시 새 창 열기
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#f0f0f0")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          {/* 프로필 이미지가 제대로 로드되는지 확인 */}
          {chat.profileImage ? (
            <img style={imageStyle} src={chat.profileImage} alt="Profile" />
          ) : (
            <div style={imageStyle}>No Image</div>
          )}
          <div style={detailsStyle}>
            {/* masterEmail이 제대로 표시되는지 확인 */}
            <span style={nameStyle}>{chat.chatMember || "Unknown"}</span>
            <span style={messageStyle}>
              {chat.lastetContent || "No message"}
            </span>
          </div>
          <div style={timeBadgeContainerStyle}>
            <span style={timeStyle}>{chat.createTime || "No Time"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  width: "100%",
  padding: "0",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "8px 8px 0 0",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const itemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  borderBottom: "1px solid #f0f0f0",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const lastItemStyle = {
  ...itemStyle,
  borderBottom: "none",
};

const imageStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginRight: "12px",
};

const detailsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1",
};

const nameStyle = {
  fontWeight: "bold",
  fontSize: "14px",
  color: "#333",
  marginBottom: "4px",
};

const messageStyle = {
  fontSize: "10px",
  color: "#555",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis", // 넘칠 경우 ... 표시
  maxWidth: "200px",
};

const timeBadgeContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  marginLeft: "auto",
  gap: "4px",
  minWidth: "50px", // 고정된 최소 폭
};

const timeStyle = {
  fontSize: "10px",
  color: "#999",
  whiteSpace: "nowrap",
};

const badgeStyle = {
  backgroundColor: "#ff4500",
  color: "#fff",
  fontSize: "10px",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default FloatingList;
