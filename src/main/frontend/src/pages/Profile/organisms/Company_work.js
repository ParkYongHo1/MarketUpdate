import React from 'react';
import styled from '@emotion/styled';

const App = () => {
  return (
    <Container>
      <Header>기술 스택 및 작업 환경</Header>
      <TechSection>
        <TechItem>
          <ImageWrapper>
            <TechImage src={`${process.env.PUBLIC_URL}/work1.jpg`} alt="Frontend" />
          </ImageWrapper>
          <TextWrapper>
            <Title>프론트엔드</Title>
            <Description>
              Html, Css, JavaScript, React.<br /><br />
              사용자 경험을 최적화하고, 웹 애플리케이션 설계 시각적 요소를 강화하여, 반응형 디자인을 통해 다양한 디바이스에서 일관된 사용자 경험을 제공합니다.
            </Description>
          </TextWrapper>
        </TechItem>

        <TechItem>
          <ImageWrapper>
            <TechImage src={`${process.env.PUBLIC_URL}/work2.jpg`} alt="Backend" />
          </ImageWrapper>
          <TextWrapper>
            <Title>백엔드</Title>
            <Description>
              Java, Node.js, Express.<br /><br />
              서버 사이드 로직을 구현하고, 데이터베이스와의 연동을 관리하며, API를 설계하고 구축하여 클라이언트와의 서버 간의 데이터 통신을 원활하게 처리합니다.
            </Description>
          </TextWrapper>
        </TechItem>

        <TechItem>
          <ImageWrapper>
            <TechImage src={`${process.env.PUBLIC_URL}/work3.jpg`} alt="Design Tools" />
          </ImageWrapper>
          <TextWrapper>
            <Title>디자인 도구</Title>
            <Description>
              Figma, Adobe Photoshop.<br /><br />
              사용자 인터페이스와 사용자 경험을 시각적으로 설계하고, 디자인 프로토타입을 제작하며 편리한 사용자 경험을 제공합니다.
            </Description>
          </TextWrapper>
        </TechItem>
      </TechSection>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-top: 74px;
  margin-bottom: 46px;
`;

const TechSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin-bottom: 60px;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0 80px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 60px; /* 이미지와 텍스트 사이 여백 */
`;

const TechImage = styled.img`
  height: 230px;
  width: auto;
`;

const TextWrapper = styled.div`
  width: 370px;
  height: 194px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 26px;
`;

const Description = styled.p`
  font-size: 14px;
  max-width: 248px;
  margin: 0 auto;
  line-height: 1.5;
  color: #2C2D2D;
`;

export default App;
