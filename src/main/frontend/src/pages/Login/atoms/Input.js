import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  padding: 10px 0px;
  border: none;
  border-bottom: 2px solid #ececec;
  font-size: 12px;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
  ${(props) =>
    props.send &&
    `
  width: 80%;
  padding: 10px 0px;
  border: none;
  border-bottom: 2px solid #ececec;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
  `}
`;

export default Input;
