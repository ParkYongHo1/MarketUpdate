import styled from "@emotion/styled";
const Div = styled.div`
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
`;
export default Div;
