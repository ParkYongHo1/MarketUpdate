import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const SocialButton = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 45px;
  text-decoration: none;
  color: black;
  margin: 30px auto;
  border-radius: 5px;
  font-weight: 1000;
  background-color: #fddc3f;
  border: 1px solid rgba(222, 222, 222, 0.2);
  border-radius: 10px;
  cursor: pointer;
`;
export default SocialButton;
