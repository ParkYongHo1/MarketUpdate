import styled from "@emotion/styled";
const Div = styled.div`
  width: 1200px;
  margin: 20px auto;
  ${(props) =>
    props.title &&
    `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 10px;
  }
  `}
`;

export default Div;
