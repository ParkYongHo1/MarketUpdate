import styled from "@emotion/styled";

const Button = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0px;
  color: white;
  font-size: 15px;
  background-color: black;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
  ${(props) =>
    props.disabledButton &&
    `
      background-color: #ebebeb;
      cursor: default;
  `}
`;

export default Button;
