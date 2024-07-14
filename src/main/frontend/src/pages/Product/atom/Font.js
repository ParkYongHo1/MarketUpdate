import styled from "@emotion/styled";
const Font = styled.div`
  font-size: 17px;
  ${(props) =>
    props.padding &&
    `
    padding:40px 0px 0px 0px;
  `}
`;
export default Font;
