import styled from "@emotion/styled";
const Div = styled.div`
  ${(props) =>
    props.wrapFlex &&
    `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;  `}

  ${(props) =>
    props.flex &&
    `
    display:flex;
    alian-items:center;
    `}
  ${(props) =>
    props.margin &&
    `
    margin-bottom:10px;

    `}
     ${(props) =>
    props.login &&
    `
      margin: 20px 0px;
      width: 100%;
      padding:0;
    `}
`;
export default Div;
