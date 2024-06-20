import styled from "@emotion/styled";

const LoginInput = styled.input`
  margin-bottom: 20px;
  width: 100%;
  padding: 5px 0px;
  border: none;
  border-bottom: 2px solid #ececec;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export default LoginInput;
