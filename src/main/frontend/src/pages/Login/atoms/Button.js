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
  margin:0;
  height: 30px;
  width:30%;
  padding: 5px 10px;
  color: black;
  font-size: 13px;
  background-color: white;
  margin-left: 15px;
  border:1px solid black;
  &:hover{
  margin:0;
  color:white;
  background-color:black;
  height: 30px;
  width:30%;
  border-radius:5px;
  padding: 5px 10px;
  font-size: 13px;
  border: none;
  margin-left: 15px;
  }
  `}
  ${(props) =>
    props.disabled &&
    `
height: 45px;
width: 100%;
border-radius: 10px;
margin: 20px 0px;
color: white;
font-size: 15px;
background-color: #ebebeb;
border: none;
font-weight: 700;
cursor: default;
margin-left: 5px;
  }
  `}
  ${(props) =>
    props.middleButton &&
    `
  height: 45px;
  width: 50%;
  border-radius: 10px;
  margin: 10px 0px;
  color: black;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
  background-color: white;
  border: 1px solid #d3d3d3;
  }
  `}
  ${(props) =>
    props.middleBlackButton &&
    `
    height: 45px;
  width: 50%;
  border-radius: 10px;
  margin: 10px 0px;
  color: white;
  font-size: 15px;
  background-color: black;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
  }
  `}
`;

export default Button;
