import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "buyer",
      text: "안녕하세요, 국밥밀키트 아직 있나요?",
      time: "오전 10:15",
    },
    { id: 2, sender: "seller", text: "네, 아직 있어요!", time: "오전 10:16" },
    { id: 3, sender: "buyer", text: "혹시", time: "오전 10:18" },
    {
      id: 4,
      sender: "buyer",
      text: "국밥 밀키트 유통기한 날짜가 얼마나 남았나요?",
      time: "오전 10:18",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false); // 버튼 hover 상태 관리

  // 현재 시간 가져오기
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 || 12; // 12시간제로 표시
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "buyer",
          text: newMessage,
          time: getCurrentTime(),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div style={chatContainerStyle}>
      {/* 헤더 */}
      <div style={headerStyle}>
        <img style={profileImageStyle} src="profile.png" alt="Seller Profile" />
        <div style={sellerInfoStyle}>판매자: 주부 구구단</div>
      </div>

      {/* 메시지 리스트 */}
      <div style={messageListStyle}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={messageItemStyle(message.sender === "buyer")}
          >
            <div style={messageBubbleStyle(message.sender === "buyer")}>
              {message.text}
            </div>
            <div style={timeStyle}>{message.time}</div>
          </div>
        ))}
      </div>

      {/* 입력 창 */}
      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          type="text"
          placeholder="메시지를 입력하세요..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          style={{
            ...sendButtonStyle,
            backgroundColor: isHovered ? "#678C1E" : "#78AD25", // hover 상태에 따른 색상 변경
          }}
          onMouseEnter={() => setIsHovered(true)} // hover 상태 true
          onMouseLeave={() => setIsHovered(false)} // hover 상태 false
          onClick={handleSend}
        >
          보내기
        </button>
      </div>
    </div>
  );
};

const chatContainerStyle = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f4f5f7",
};

const headerStyle = {
  padding: "16px",
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
};

const profileImageStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#ddd",
};

const sellerInfoStyle = {
  flex: 1,
  fontSize: "14px",
  fontWeight: "bold",
};

const messageListStyle = {
  flex: 1,
  padding: "16px",
  overflowY: "auto",
  backgroundColor: "#ffffff",
};

const messageItemStyle = (isBuyer) => ({
  marginBottom: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: isBuyer ? "flex-end" : "flex-start",
});

const messageBubbleStyle = (isBuyer) => ({
  display: "inline-block",
  maxWidth: "70%",
  padding: "12px 16px",
  borderRadius: isBuyer
    ? "12px 12px 0px 12px" // 오른쪽 사용자 메시지
    : "12px 12px 12px 0px", // 왼쪽 판매자 메시지
  backgroundColor: isBuyer ? "#FFF9C4" : "#f0f0f0",
  color: isBuyer ? "#155724" : "#333",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  position: "relative",
});

const timeStyle = {
  fontSize: "10px",
  color: "#999",
  marginTop: "6px",
};

const inputContainerStyle = {
  display: "flex",
  padding: "12px",
  borderTop: "1px solid #ddd",
  backgroundColor: "#fff",
  alignItems: "center",
};

const inputStyle = {
  flex: 1,
  padding: "12px",
  fontSize: "14px",
  borderRadius: "24px",
  border: "1px solid #ddd",
  marginRight: "8px",
  outline: "none",
  backgroundColor: "#f4f5f7",
  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
};

const sendButtonStyle = {
  padding: "10px 16px",
  backgroundColor: "#78AD25",
  color: "#fff",
  fontSize: "14px",
  borderRadius: "24px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
};

export default Chat;
