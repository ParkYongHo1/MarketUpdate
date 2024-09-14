import React from 'react';
import styled from '@emotion/styled';

// App 컴포넌트 정의
const App = () => {
  return (
    <Container>
      <Header>투명하고 안전한 <br/>중고 거래의 새 기준</Header>
      <Description>
        Reboot는 지역사회에서 안전하고 신뢰할 수 있는 중고 거래 환경을 제공하기 위해 설립되었습니다.
        누구나 쉽게 중고 물품을 사고팔 수 있는 플랫폼을 제공하며, 지역 거래를 중심으로 믿을 수 있는 거래 문화를 형성하고자 하며,
        Reboot는 투명한 거래와 안전한 거래를 통해 사용자 신뢰를 최우선으로 생각하며, 소중한 물건을 재사용하는 문화를 확산시키기 위해 노력하고 있습니다.
      </Description>
      <Features>
        <Feature 
          title="지역 기반 안전 거래" 
          description="지역 기반으로 안전하고 신뢰할 수 있는 중고 거래 환경을 제공합니다." 
          iconSrc={`${process.env.PUBLIC_URL}/about1.jpg`}  // public 폴더의 about1.jpg 파일 경로
        />
        <Feature 
          title="신뢰와 만족 우선" 
          description="사용자의 신뢰와 만족을 최우선으로 생각하며 서비스를 제공합니다." 
          iconSrc={`${process.env.PUBLIC_URL}/about2.jpg`}
        />
        <Feature 
          title="자원 재활용 촉진" 
          description="자원의 재활용과 지속 가능한 소비를 촉진하여 환경을 보호합니다." 
          iconSrc={`${process.env.PUBLIC_URL}/about3.jpg`}
        />
        <Feature 
          title="간편한 거래 경험" 
          description="간편하고 직관적인 거래 경험을 제공하여 누구나 쉽게 사용할 수 있습니다." 
          iconSrc={`${process.env.PUBLIC_URL}/about4.jpg`}
        />
        <Feature 
          title="환경 보호 재활용" 
          description="중고 물품 재활용 문화를 활성화하여 환경 보호에 기여합니다." 
          iconSrc={`${process.env.PUBLIC_URL}/about5.jpg`}
        />
        <Feature 
          title="원활한 소통 커뮤니티" 
          description="사용자 간의 원활한 소통을 통해 커뮤니티 형성 및 사기 방지를 촉진합니다." 
          iconSrc={`${process.env.PUBLIC_URL}/about6.jpg`}
        />
      </Features>
    </Container>
  );
};

// Feature 컴포넌트 정의
const Feature = ({ title, description, iconSrc }) => {  // iconSrc를 props로 받음
  return (
    <FeatureContainer>
      <Icon>
        {iconSrc && <IconImage src={iconSrc} alt={title} />}  {/* iconSrc가 있을 경우에만 렌더링 */}
      </Icon>
      <Content>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </Content>
    </FeatureContainer>
  );
};

// 스타일 정의
const Container = styled.div`
  text-align: center;
  padding: 74px;
`;

const Header = styled.p`
  font-size: 36px;
  margin-bottom: 60px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #2C2D2D;
  margin-bottom: 60px;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 1140px; /* 최대 너비 설정 (3개씩 배치하기 위한 가이드) */
  margin: 0 auto; /* 가운데 정렬 */
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  width: 370px;
  height: 120px;
  padding: 10px;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Content = styled.div`
  text-align: left;
`;

const FeatureTitle = styled.div`
  font-size: 18px;
  margin-bottom: 26px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #2C2D2D;
`;

export default App;
