import styled from "@emotion/styled";
const Message = styled.div`
  display: block;
  font-size: 13px;
  text-align: start;
  color: black;
  margin-bottom: 10px;
  ${(props) =>
    props.ok &&
    `
    color: green;

    `}
  ${(props) =>
    props.fail &&
    `
    color: red;

    `}
    ${(props) =>
    props.info &&
    `
      font-size: 13px;
      font-weight: 700;
      text-align: start;
      color: gray;
      margin: 30px 0px;
  
      `}
`;

export default Message;
