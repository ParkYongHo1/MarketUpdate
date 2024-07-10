import styled from "@emotion/styled";
const Dot = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  top: 0;
  right: 40px;
  margin: 0;
  cursor: pointer;
  ${(props) =>
    props.floating &&
    `
       position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  top: 0px;
  right: 0px;
  margin: 0;
  cursor: pointer;
    `}
`;

export default Dot;
