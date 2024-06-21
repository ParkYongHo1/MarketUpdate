import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const HeaderEventBox = styled(Link)`
  margin: 10px 30px 20px 10px;
  text-decoration: none;
  color: black;
  border-bottom: 3px solid white;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

export default HeaderEventBox;
