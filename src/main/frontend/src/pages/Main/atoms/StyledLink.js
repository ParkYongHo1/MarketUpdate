import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => !["button", "moreButton"].includes(prop),
})`
  ${(props) =>
    props.button &&
    `  
  width: 50%;
  height: 45px;
  text-decoration: none;
  border-radius: 10px;
  display: block;
  text-align: center;
  border: none;
  margin: 10px 0;
  line-height: 45px;
  cursor: pointer;
  background: #f5f5f5;
  color: #666;
  font-weight: 700;
  &:hover {
    color: black;
    background: black;
    color: #fff;
  }
    `}
  ${(props) =>
    props.moreButton &&
    `
  margin: 10px 30px;
  border: none;
  background-color: white;
  color: #868e96;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid white;
  &:hover {
    color: black;
    font-weight: 700;
    border-bottom: 1px solid black;
  }
  `}
`;

export default StyledLink;
