import styled from "@emotion/styled";
const Box = styled.div`
  display: none;
  width: 340px;
  height: 700px;
  position: fixed;
  right: 10px;
  bottom: 0px;
  border: none;

  background-color: #78ad25;
  border-radius: 15px;
  animation: slideUp 0.5s;
  z-index: 10000;
  box-shadow: rgba(0, 0, 0, 0.2) -1px 1rem 1rem 0px;

  ${(props) =>
    props.visible &&
    `
    display: block;
    
  `}
  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Box;
