import styled from '@emotion/styled';
const Banner = () => {
  return (
    <Wrapper>
      <Image src={process.env.PUBLIC_URL + 'mainBanner.png'} alt='banner' />
      <Text>
        나만의 상품 <br />
        추천
      </Text>
      <Checkbtn>지금 바로 확인하기</Checkbtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  padding: 0;
  height: 510px;
  margin-left: calc(-50vw + 50%);
`;
const Text = styled.div`
  position: absolute;
  bottom: 45%;
  right: 12%;
  font-size: 50px;
  // font-weight: bold;
  text-align: right;
  z-index: 2;
`;
const Checkbtn = styled.button`
  display: block;
  position: absolute;
  width: 280px;
  height: 70px;
  z-index: 3;
  font-size: 21px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 30px;
  background: black;
  bottom: 30%;
  right: 12%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export default Banner;
