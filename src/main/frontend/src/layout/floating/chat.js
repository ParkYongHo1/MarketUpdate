import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client"; // SockJS import
import { Client } from "@stomp/stompjs";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Chat = () => {
  const { chatId } = useParams();
  const location = useLocation();
  const { masterEmail } = location.state || {}; // masterEmail 가져오기
  const userEmail = useSelector((state) => state.user.user.id);
  const userNickname = useSelector((state) => state.user.user.nickname);

  const [client, setClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8090/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: (frame) => {
        console.log("Connected: " + frame);
        stompClient.subscribe(`/topic/public/${chatId}`, (messageOutput) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            JSON.parse(messageOutput.body),
          ]);
        });
      },
    });

    stompClient.activate();
    setClient(stompClient);

    return () => {
      stompClient.deactivate();
    };
  }, [chatId]);

  const handleSend = () => {
    console.log("test");

    const messageData = {
      chatroomId: chatId,
      senderName: userNickname,
      chatContent: newMessage,
      sendTime: new Date().toISOString(),
      memberId: userEmail,
    };

    try {
      client.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify(messageData),
      });
      setNewMessage(""); // 입력 필드 초기화
    } catch (error) {
      console.error("메시지 전송 오류:", error);
    }
  };

  return (
    <div style={chatContainerStyle}>
      {/* 헤더 */}
      <div style={headerStyle}>
        <img style={profileImageStyle} src="profile.png" alt="Seller Profile" />
        <div style={sellerInfoStyle}>판매자: {masterEmail || "로딩 중..."}</div>
      </div>

      {/* 메시지 리스트 */}
      <div style={messageListStyle}>
        {messages.map((message, index) => (
          <div
            key={index} // 고유한 key 사용
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
            backgroundColor: isHovered ? "#678C1E" : "#78AD25",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleSend}
        >
          보내기
        </button>
      </div>
    </div>
  );
};

// 스타일 정의
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
