import styled from "@emotion/styled";
const Span = styled.span`
  font-size: 13px;
  color: black;
  font-weight: 700;
  margin: 10px 20px;
  ${(props) =>
    props.find &&
    `
  font-size: 13px;
  color: black;
  font-weight: 700;
  margin: 10px 20px;
  }
  `}
`;
export default Span;
