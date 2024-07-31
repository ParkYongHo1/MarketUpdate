import styled from "@emotion/styled";

const Button = styled.button`
  height: 45px;
  width: 100%;
  color: white;
  font-size: 15px;
  background-color: black;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  margin: 20px 0px;

  ${(props) =>
    props.send &&
    `
      margin: 0;
      height: 30px;
      width: 30%;
      padding: 5px 10px;
      color: black;
      font-size: 13px;
      background-color: white;
      margin-left: 15px;
      border: 1px solid black;
      &:hover {
        color: white;
        background-color: black;
        border: none;
      }
    `}

  ${(props) =>
    props.disable &&
    `
      background-color: #ebebeb;
      cursor: default;
  `}

  ${(props) =>
    props.middleButton &&
    `
      height: 45px;
      width: 50%;
      border-radius: 10px;
      margin: 10px 0px;
      color: black;
      background-color: white;
      border: 1px solid #d3d3d3;
    `}

  ${(props) =>
    props.middleBlackButton &&
    `
      height: 45px;
      width: 50%;
      border-radius: 10px;
      margin: 10px 0px;
      color: white;
      background-color: black;
    `}

  ${(props) =>
    props.middleBlackButton &&
    props.disabled &&
    `
      background-color: #ebebeb;
      cursor: default;
      margin-right:5px;
    `}
`;

export default Button;
