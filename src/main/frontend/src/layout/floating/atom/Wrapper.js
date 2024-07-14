import styled from "@emotion/styled";
import img from "../img/floatingBtn.png";
const Wrapper = styled.div`
  background-image: url(${img});
  background-color: transparent;
  background-size: cover;
  background-position: center;
  border: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  padding: 0px;
  z-index: 10000;
  cursor: pointer;
`;

export default Wrapper;
