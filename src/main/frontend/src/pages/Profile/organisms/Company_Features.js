import React from 'react';
import styled from '@emotion/styled';

const App = () => {
  return (
    <Container>
        <Header>future vision</Header>
      <Section>
        <ImageWrapper>
          <LargeImage src={`${process.env.PUBLIC_URL}/Features1.jpg`} alt="Global Expansion and Innovation" />
        </ImageWrapper>
        <TextWrapper>
          <Title>글로벌 확장 및 기술 혁신</Title>
          <Description>
            회사는 지속 가능한 발전과 혁신을 위해 글로벌 시장 확장을 추구하고 있으며, 이를 뒷받침할 혁신적인 기술들을 개발하고 있습니다.
            연구 개발을 통해 새로운 서비스를 도입하고, 사용자들에게 더 나은 경험을 제공하며 글로벌 경쟁력을 강화하고 있습니다.
          </Description>
        </TextWrapper>
      </Section>

      <ArrowWrapper>
        <ArrowImage src={`${process.env.PUBLIC_URL}/Features2.jpg`} alt="Arrow" />
      </ArrowWrapper>

      <Section>
        <TextWrapper>
          <Title>지속 가능한 소비 및 환경 보호</Title>
          <Description>
            환경 보호와 지속 가능한 소비를 목표로 에코 프렌들리 솔루션을 개발하며, 자원 재활용을 촉진합니다.
            회사는 지속 가능한 미래를 위한 다양한 프로젝트와 파트너십을 구축하여 환경적 책임을 다하고 있습니다.
          </Description>
        </TextWrapper>
        <ImageWrapper>
          <LargeImage src={`${process.env.PUBLIC_URL}/Features3.jpg`} alt="Sustainable Consumption and Environment Protection" />
        </ImageWrapper>
      </Section>

      <ArrowWrapper>
        <ArrowImage src={`${process.env.PUBLIC_URL}/Features4.jpg`} alt="Arrow" />
      </ArrowWrapper>

      <Section>
        <ImageWrapper>
          <LargeImage src={`${process.env.PUBLIC_URL}/Features5.jpg`} alt="User-Centric Service and Community Enhancement" />
        </ImageWrapper>
        <TextWrapper>
          <Title>사용자 중심 서비스 개선 및 <br/> 커뮤니티 강화</Title>
          <Description>
            사용자의 피드백을 바탕으로 서비스를 지속적으로 개선하고, 커뮤니티 간 소통을 강화합니다.
            사용자의 만족을 최우선으로 하며, 지속 가능한 커뮤니티 생태계를 형성하고 있습니다.
          </Description>
        </TextWrapper>
      </Section>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Header = styled.p`
  font-size: 36px;
  margin: 54px 0px;
  font-weight: bold;
`;


const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1140px;
  height: 450px;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const TextWrapper = styled.div`
  flex: 1;
  margin: 0px 36px;
  max-width: 370px; /* 가로 너비 최대 370px */
  max-height: 300px; /* 세로 높이 최대 300px */
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const LargeImage = styled.img`
  width: 100%;
  max-width: 540px;
  margin: 50px;
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 24px;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 14px;
  color: #2C2D2D;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const ArrowImage = styled.img`
  width: 684px;
  height: 186px;
`;

export default App;