import styled from "@emotion/styled";
const Span = styled.span`
  font-weight: 700;
  font-size: 20px;
  ${(props) =>
    props.warn &&
    `
    font-size: 12px;
    color: red;
    margin-left:10px;
      `}
  ${(props) =>
    props.required &&
    `
    font-size: 14px;
    color: red;
    vertical-align: super;
      
      `}
`;
export default Span;
