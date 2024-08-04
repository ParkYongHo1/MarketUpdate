import styled from "@emotion/styled";
const Banner = () => {
  return (
    <Wrapper>
      <div>캐럿마켓 관심 상품 모아보기 !</div>
      <div>내 관심 상품 보러가기</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background: blue;
  position: relative;
  padding: 0;
  height: 300px;
`;
export default Banner;
