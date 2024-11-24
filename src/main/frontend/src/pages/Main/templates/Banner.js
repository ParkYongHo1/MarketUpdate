import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <Wrapper>
      <Image src={process.env.PUBLIC_URL + "mainBanner.png"} alt="banner" />
      <Text>
        나만의 상품 <br />
        추천
      </Text>
      <Checkbtn to="#">지금 바로 확인하기</Checkbtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0;
  height: 510px;
`;
const Text = styled.div`
  position: absolute;
  bottom: 45%;
  right: 12%;
  margin-bottom: 40px;
  font-size: 50px;
  font-weight: bold;
  text-align: right;
  z-index: 2;
`;
const Checkbtn = styled(Link)`
  position: absolute;
  width: 290px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  z-index: 3;
  font-size: 21px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 30px;
  background: black;
  bottom: 30%;
  right: 12%;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export default Banner;
