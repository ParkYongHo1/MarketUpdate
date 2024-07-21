import styled from "@emotion/styled";

const LoginPTag = styled.p`
  font-size: 13px;
  color: black;
  font-weight: 700;
  text-align: start;
  ${(props) =>
    props.sub &&
    `
  font-size: 20px;
  font-weight: 700;
  text-align: start;
  padding: 0px 0px 50px 0px;

    `}
`;

export default LoginPTag;
