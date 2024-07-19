import styled from "@emotion/styled";
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  ${(props) =>
    props.find &&
    `
  padding-bottom: 50px;
  border-bottom: 3px solid black;
  }
  `}
`;
export default Title;
