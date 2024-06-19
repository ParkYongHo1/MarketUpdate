import styled from "@emotion/styled";

const HiddenCheck = styled.input`
  display: none;
  &:checked + label {
    background: black;
    color: #fff;
  }
`;

export default HiddenCheck;
