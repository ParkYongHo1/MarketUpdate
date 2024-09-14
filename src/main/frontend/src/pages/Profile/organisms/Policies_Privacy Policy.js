import React from 'react';
import styled from '@emotion/styled';

const App = () => {
  return (
    <Container>
      <TermsHeaderSection>
        <TermsTitle>개인정보 보호 정책</TermsTitle>
        <Description>
        Reboot(이하 "회사")는 사용자의 개인정보를 소중히 여기며, 개인정보보호법 및 관련 법률에 따라 사용자의 개인정보를 보호하고, 이를 안전하게 관리하기 위한 정책을 수립하여 운영하고 있습니다. 본 개인정보 보호 정책은 Reboot 서비스 이용 중 수집되는 개인정보의 처리방침을 설명하며, 사용자에게 제공되는 권리와 책임을 명확히 합니다.
        </Description>
        <Hr />
      </TermsHeaderSection>

      <TermsContentSection>
        <Section>
          <Title>1. 수집하는 개인정보 항목</Title>
          <Content>
          회사는 서비스 이용을 위해 필요한 최소한의 개인정보만을 수집하며, 수집하는 정보는 다음과 같습니다: <br/>
          1. 회원 가입 시:<br/>
          - 필수 항목: 이름, 이메일 주소, 비밀번호, 휴대폰 번호, 주소<br/>
          - 선택 항목: 프로필 사진, 지역 설정 <br/>
          2. 고객 문의 시:<br/>
          - 사용자 문의 내용 및 연락처 정보(이메일, 전화번호)
          </Content>
        </Section>

        <Section>
          <Title>2. 개인정보 수집 및 이용 목적</Title>
          <Content>
          회사는 수집한 개인정보를 다음과 같은 목적을 위해 사용합니다:<br/>
          1. 회원 관리: 회원 식별, 가입 의사 확인, 계정 관리 및 사용자 간의 안전한 거래를 위한 본인 확인<br/>
          2. 서비스 제공: 사용자 간의 중고거래 매칭, 물품 등록, 알림 전송, 결제 처리 및 배송 서비스 제공<br/>
          3. 고객 지원: 사용자 문의 및 불만 처리, 공지사항 전달, 서비스 관련 문제 해결<br/>
          4. 마케팅 및 광고: 이벤트 정보 제공, 맞춤형 광고 제공 및 서비스 이용 통계 분석<br/>
          5. 법적 의무 이행: 관련 법률에 따른 의무 이행 및 정부 기관의 요청에 따른 정보 제공
          </Content>
        </Section>

        <Section>
          <Title>3. 개인정보의 보유 및 이용 기간</Title>
          <Content>
          회사는 개인정보를 수집한 목적이 달성되면 지체 없이 파기합니다. 단, 법률에 따라 보존해야 하는 경우 일정 기간 동안 보관하며, 그 기간은 다음과 같습니다:<br/>
          - 회원 정보: 회원 탈퇴 시까지 보유. 다만, 관련 법률에 의해 일정 기간 보관이 필요한 경우, 해당 기간 동안 보존함.<br/>
          - 거래 기록: 전자상거래법에 따라 5년간 보존<br/>
          - 전자금융 거래 기록: 전자금융거래법에 따라 5년간 보존<br/>
          - 세법상 보존 기록: 국세기본법에 따라 5년간 보존
          </Content>
        </Section>

        <Section>
          <Title>4. 개인정보의 파기 절차 및 방법</Title>
          <Content>
          회사는 수집한 개인정보의 이용 목적이 달성되면 관련 법률에 따라 해당 정보를 안전하게 파기합니다. 파기 절차 및 방법은 다음과 같습니다:<br/>
          1. 파기 절차: 목적 달성 후 별도의 DB에 옮겨져 보관 기간이 만료된 후 파기함.<br/>
          2. 파기 방법: 전자적 파일 형태로 저장된 개인정보는 복구할 수 없도록 영구 삭제하며, 종이 문서로 된 개인정보는 분쇄기로 파기함.
          </Content>
        </Section>

        <Section>
          <Title>5. 사용자의 권리와 행사 방법</Title>
          <Content>
          사용자는 언제든지 자신의 개인정보에 대해 다음과 같은 권리를 행사할 수 있습니다:<br/>
          1. 개인정보 열람: 사용자는 회사에 제공한 개인정보에 대해 열람을 요청할 수 있습니다.<br/>
          2. 개인정보 정정: 사용자는 부정확하거나 변동된 개인정보를 정정할 수 있습니다.<br/>
          3. 개인정보 삭제: 사용자는 회사에 제공한 개인정보 삭제를 요청할 수 있습니다. 단, 법률에 의해 보관해야 하는 경우는 제외됩니다.<br/>
          4. 동의 철회: 사용자는 개인정보 수집 및 이용에 대한 동의를 언제든지 철회할 수 있습니다.
          </Content>
        </Section>

        <Section>
          <Title>6. 개인정보 보호를 위한 기술적/관리적 대책</Title>
          <Content>
          회사는 사용자의 개인정보를 안전하게 보호하기 위해 다음과 같은 조치를 취하고 있습니다:<br/>
          1. 기술적 대책: 개인정보는 비밀번호에 의해 보호되며, 중요 정보는 암호화되어 저장됩니다. 또한, 해킹이나 바이러스에 대응하기 위한 방화벽 및 보안 프로그램을 운영합니다.<br/>
          2. 관리적 대책: 개인정보 접근 권한을 최소화하고, 개인정보 처리자에 대한 정기적인 교육을 실시하여 개인정보 유출을 방지합니다.
          </Content>
        </Section>

        <Section>
          <Title>7. 정책의 변경</Title>
          <Content>
          본 개인정보 보호 정책은 관련 법령 및 회사 내부 정책에 따라 수시로 변경될 수 있으며, 변경된 내용은 사이트에 공지됩니다. 사용자는 변경된 정책을 확인하고 서비스 이용을 계속할지 결정할 수 있습니다.
          </Content>
        </Section>

        <Section>
            <Content> 최종 수정일: 2024년 9월 8일</Content>
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
