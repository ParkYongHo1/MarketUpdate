import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Button = styled(Link)`
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
`;

export default Button;
