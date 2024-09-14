import React from 'react';
import styled from '@emotion/styled';

const App = () => {
  return (
    <Container>
      <TermsHeaderSection>
        <TermsTitle>이용약관</TermsTitle>
        <Description>
          본 이용약관은 Reboot 플랫폼이 인터넷 사이트를 이용하는 모든 사용자에게 적용되며, 각종 서비스에서 제공하는 컨텐츠 서비스 및 그 밖의 서비스는 사용자가 이에 동의하고 사용하는 것을 조건으로 제공됩니다. 사용자는 본 이용약관에 규정된 모든 조건 및 정책을 준수할 의무가 있습니다. 이 약관의 세부 사항은 하단에 명시되어 있습니다.
        </Description>
        <Hr />
      </TermsHeaderSection>

      <TermsContentSection>
        <Section>
          <Title>1. 서비스 목적</Title>
          <Content>
            Reboot는 중고 물품 거래 서비스를 제공하며 안전하고 신뢰할 수 있는 거래 환경을 조성할 수 있는 플랫폼을 제공합니다. 본 서비스는 개인 간 중고 거래를 촉진하여 자원의 재활용과 지속 가능한 소비 문화를 확산하는 것을 목적으로 합니다.
          </Content>
        </Section>

        <Section>
          <Title>2. 사용자 계정</Title>
          <Content>
            1. 가입 및 인증: Reboot에 가입하여 인증된 사용자만 사이트의 거래를 이용할 수 있습니다. 사용자는 18세 이상의 성인이어야 하며, 본 약관을 준수하는 의무를 가지며 동의한 후 거래에 참여할 수 있습니다.<br />
            2. 개인정보: Reboot는 사용자의 개인정보를 보호하며, 사용자는 개인정보를 정확하게 입력해야 합니다. Reboot에서 제공하는 계정 관리 및 거래 서비스는 이러한 정보를 기반으로 제공됩니다.<br />
            3. 보안: 사용자는 계정의 보안을 유지할 책임이 있으며, Reboot는 사용자의 계정 도용 또는 보안 위협에 대해 책임을 지지 않습니다.
          </Content>
        </Section>

        <Section>
          <Title>3. 사용자 의무</Title>
          <Content>
            1. 사용자는 언제나 Reboot의 규칙을 준수하며, 타인에게 피해를 주지 않는 거래 문화를 존중해야 합니다.<br />
            2. 금지된 행위: 위법한 상품의 거래 금지<br />
            - 허위 정보 기재 금지<br />
            - 서비스 방해 행위 금지<br />
            - 타인에게 불쾌감을 주는 행동 금지<br /><br />
            Reboot는 이러한 행위를 엄격히 관리하고 있으며, 규제 대상이 되는 사용자는 즉시 차단됩니다. Reboot는 거래를 원활하게 운영하기 위해 최선을 다하고 있습니다.
          </Content>
        </Section>

        <Section>
          <Title>4. 금지된 물품</Title>
          <Content>
            Reboot에서는 다음과 같은 물품의 거래를 금지합니다.<br />
            - 불법 복제물 및 위조품<br />
            - 위험한 물품<br />
            - 기타 법률로 금지된 물품
          </Content>
        </Section>

        <Section>
          <Title>5. 개인정보 보호</Title>
          <Content>
            Reboot는 사용자 개인정보의 보호를 최우선으로 하며, 개인정보 보호법에 따라 엄격한 보호 조치를 취하고 있습니다. 사용자는 개인정보를 허락 없이 타인에게 공개하거나 사용할 수 없습니다.
          </Content>
        </Section>

        <Section>
          <Title>6. 책임의 한계</Title>
          <Content>
            Reboot는 거래 상에서 발생하는 사고에 대해 법적 책임을 지지 않으며, 사용자의 거래 상의 분쟁은 사용자 간 해결을 원칙으로 합니다. Reboot는 안전한 거래 환경을 제공하기 위해 최선을 다하며, 언제나 사용자의 보호를 위해 노력합니다.
          </Content>
        </Section>

        <Section>
          <Title>7. 약관의 변경</Title>
          <Content>
            Reboot는 본 약관의 내용을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 사용자에게 안내됩니다. 변경된 약관은 즉시 효력을 발생하며, 사용자는 변경된 약관에 대해 동의한 후 계속해서 서비스를 이용할 수 있습니다.
          </Content>
        </Section>
      </TermsContentSection>
    </Container>
  );
};


const Container = styled.div`
  padding: 54px 56px;
  text-align: left;
`;

const TermsHeaderSection = styled.div`
  margin-bottom: 30px;
`;

const TermsTitle = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Hr = styled.hr`
  margin-bottom: 30px;
`;

const TermsContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 12px;
`;

export default App;
