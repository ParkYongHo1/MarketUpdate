import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingList = () => {
  const sampleChats = [
    {
      id: "1",
      name: "게임쟁이 룰루",
      lastMessage: "책상 사이즈 좀 알 수 있을까요?",
      time: "오후 11:41",
      profileImage: "profile.png",
      unreadCount: 2,
    },
    {
      id: "2",
      name: "정아영",
      lastMessage: "혹시 쇼파 팔렸나요?",
      time: "오후 11:37",
      profileImage: "profile.png",
      unreadCount: 1,
    },
    {
      id: "3",
      name: "주부 구구단",
      lastMessage: "국밥 밀키트 유통기한 날짜가 얼마나 남았나요??",
      time: "오후 11:37",
      profileImage: "profile.png",
      unreadCount: 0,
    },
  ];

  const navigate = useNavigate();

  const handleChatClick = (chatId) => {
    navigate("/chat"); // 채팅 화면으로 이동
  };

  return (
    <div style={containerStyle}>
      {sampleChats.map((chat, index) => (
        <div
          style={index === sampleChats.length - 1 ? lastItemStyle : itemStyle}
          key={chat.id}
          onClick={() => handleChatClick(chat.id)} // 클릭 시 이동
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#f0f0f0")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          <img style={imageStyle} src={chat.profileImage} />
          <div style={detailsStyle}>
            <span style={nameStyle}>{chat.name}</span>
            <span style={messageStyle}>
              {chat.lastMessage.length > 20
                ? `${chat.lastMessage.slice(0, 20)}...`
                : chat.lastMessage}
            </span>
          </div>
          <div style={timeBadgeContainerStyle}>
            <span style={timeStyle}>{chat.time}</span>
            {chat.unreadCount > 0 && (
              <div style={badgeStyle}>{chat.unreadCount}</div>
            )}
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
