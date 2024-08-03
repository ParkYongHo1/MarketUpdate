import styled from "@emotion/styled";
import React from "react";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AlertBox = ({ onClose }) => {
  return (
    <Wrapper>
      <Container>
        <FontAwesomeIcon
          icon={faExclamation}
          style={{
            width: "10%",
            textAlign: "start",
            marginRight: "15px",
            padding: "10px 10px",
          }}
          size="lg"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div>비정상적인 접근입니다.</div>
          <CloseButton onClick={onClose}>×</CloseButton>
        </div>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #f7f7f7;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const Container = styled.div`
  background: red;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const CloseButton = styled.div`
  background: transparent;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

export default AlertBox;
