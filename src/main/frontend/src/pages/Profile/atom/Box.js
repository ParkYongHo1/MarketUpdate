import styled from "@emotion/styled";
const Box = styled.div`
  ${(props) =>
    props.left &&
    `
        width: 30%;
        border-right: 1px solid #b1b1b1;
    `}
  ${(props) =>
    props.right &&
    `
        width: 70%;
    `};
  ${(props) =>
    props.profile &&
    `   width:100%;
        margin:0 auto;
        text-align:center;
        padding:20px 0px;
        border-bottom:1px solid #b1b1b1;
        img{
            border:1px solid black;
            border-radius:50%;
            
        }
    `};
  ${(props) =>
    props.name &&
    `
        font-size:15px;
        font-weight:700;
        
    `};
  ${(props) =>
    props.font &&
    `
        font-size:15px;
        font-weight:500;
        margin-left:10px;
        
    `};
  ${(props) =>
    props.info &&
    `   width:100%;
        margin:0 auto;

        text-align:center;
        padding:30px 0px 20px 0px;
        img{
            border:1px solid black;
            border-radius:50%;
            
        }
    `};
  ${(props) =>
    props.title &&
    `   
        font-size:15px;
        font-weight:700;
        text-align:start;
        padding:20px 10px 20px 0px;
    `};
  ${(props) =>
    props.userInfo &&
    `   
        widh:100%;
        border:1px solid black;
        padding:50px 10px;
        text-align:start;
    `};
`;
export default Box;
