import styled from "@emotion/styled";
const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  justify-content: space-around;
  align-items: center;

  ${(props) =>
    props.nomal &&
    `   
    cursor:pointer;
    display: flex;
    width: 100%;
    height: 50px;
    text-align:start;
    align-items: center;
    justify-content: start;
    `};
`;
export default FlexDiv;
