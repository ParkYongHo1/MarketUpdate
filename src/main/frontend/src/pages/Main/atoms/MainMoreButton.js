import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const MainMoreButton = styled(Link)`
  margin: 10px 30px;
  border: none;
  background-color: white;
  color: #868e96;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: black;
    font-weight: 700;
    border-bottom: 1px solid black;
  }
`;

export default MainMoreButton;
