import React, { useState } from 'react';
import styled from '@emotion/styled';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Container>
            <Title>자주 묻는 질문</Title>
            {/* 관리자 전용 자주 묻는 질문
            <Header>
              <Title>자주 묻는 질문</Title>
              <ButtonWrapper>
                <Button> <i class="fa-solid fa-pen"></i>게시글 작성</Button>
              </ButtonWrapper>
            </Header> */}
            <FaqList>
                <FaqItem isActive={activeIndex === 0}>
                    <QuestionContainer onClick={() => toggleFaq(0)}>
                        <Question>환불이나 반품이 가능한가요?</Question>
                        <ToggleIcon>{activeIndex === 0 ? '▲' : '▼'}</ToggleIcon>
                    </QuestionContainer>
                    {activeIndex === 0 && (
                        <Answer>
                            중고거래 특성상 거래 완료 후 환불이나 반품이 어려운 경우가 많습니다. 구매 전에 반드시 제품의 상태를 충분히 확인하고, 판매자와의 원활한 소통을 통해 신중히 거래하시기 바랍니다.
                        </Answer>
                    )}
                </FaqItem>
                <FaqItem isActive={activeIndex === 1}>
                    <QuestionContainer onClick={() => toggleFaq(1)}>
                        <Question>입금 후 거래를 취소하고 싶은데 환불이 가능한가요?</Question>
                        <ToggleIcon>{activeIndex === 1 ? '▲' : '▼'}</ToggleIcon>
                    </QuestionContainer>
                    {activeIndex === 1 && (
                        <Answer>
                            거래 후 입금한 금액에 대한 환불은 판매자와의 협의를 통해 진행되어야 하며, 환불이 어려울 수 있습니다.
                        </Answer>
                    )}
                </FaqItem>
                <FaqItem isActive={activeIndex === 2}>
                    <QuestionContainer onClick={() => toggleFaq(2)}>
                        <Question>배송비는 누가 부담하나요?</Question>
                        <ToggleIcon>{activeIndex === 2 ? '▲' : '▼'}</ToggleIcon>
                    </QuestionContainer>
                    {activeIndex === 2 && (
                        <Answer>
                            일반적으로 구매자가 부담하지만, 판매자와 협의하여 결정할 수 있습니다.
                        </Answer>
                    )}
                </FaqItem>
                <FaqItem isActive={activeIndex === 3}>
                    <QuestionContainer onClick={() => toggleFaq(3)}>
                        <Question>사기를 당했을 때 어떻게 대처해야 하나요?</Question>
                        <ToggleIcon>{activeIndex === 3 ? '▲' : '▼'}</ToggleIcon>
                    </QuestionContainer>
                    {activeIndex === 3 && (
                        <Answer>
                            사기 피해가 의심되는 경우 즉시 거래를 중단하고, 해당 플랫폼의 고객센터에 신고하시기 바랍니다.
                        </Answer>
                    )}
                </FaqItem>
                <FaqItem isActive={activeIndex === 4}>
                    <QuestionContainer onClick={() => toggleFaq(4)}>
                        <Question>계정 탈퇴는 어떻게 하나요?</Question>
                        <ToggleIcon>{activeIndex === 4 ? '▲' : '▼'}</ToggleIcon>
                    </QuestionContainer>
                    {activeIndex === 4 && (
                        <Answer>
                            계정 탈퇴는 설정 메뉴에서 계정 관리 옵션을 통해 진행할 수 있습니다.
                        </Answer>
                    )}
                </FaqItem>
            </FaqList>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
`;


// 관리자전용 버튼
// const ButtonWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Button = styled.button`
//   width: 134px;
//   height: 40px;
//   background-color: #A586FF;
//   color: white;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 14px;

//   i {
//     margin-right: 6px; /* 아이콘과 텍스트 사이의 간격 설정 */
//   }

// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 36px;
//   align-items: center;
// `;

// const Title = styled.h1`
//   font-size: 20px;
// `;


const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 60px;
`;

const FaqList = styled.div`
    max-height: 500px;
    overflow-y: auto;
    padding-right: 10px;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #999;
    }
`;

const FaqItem = styled.div`
    background-color: #f6f6f6;
    margin-bottom: 46px;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
`;

const QuestionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
`;

const Question = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding-left: 44px; /* 왼쪽 여백 추가 */
`;

const Answer = styled.div`
    font-size: 13px;
    margin-top: 36px;
    color: #555;
    text-align: left;
    padding-left: 44px; /* 왼쪽 여백 추가 */
`;

const ToggleIcon = styled.span`
    font-size: 16px;
    color: #6C20E1;
`;

export default Faq;

 

// 자주 묻는 질문 작성페이지(관리자)
// import React, { useState } from 'react';
// import styled from '@emotion/styled';

// const NoticeWritten = () => {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');

//     return (
//         <Container>
//             <Title>Create FAQ</Title>
//             <Subtitle>자주 묻는 질문을 여기에 적어주세요.</Subtitle>
//             <Form>
//                 <Label>Question</Label>
//                 <Input 
//                     type="text" 
//                     placeholder="질문을 입력하세요" 
//                     value={question}
//                     onChange={(e) => setQuestion(e.target.value)}
//                 />
//                 <Label>Answer</Label>
//                 <Textarea 
//                     placeholder="답변을 입력하세요" 
//                     value={answer}
//                     onChange={(e) => setAnswer(e.target.value)}
//                 />
//                 <ButtonContainer>
//                     <Button>취소</Button>
//                     <Button primary>제출</Button>
//                 </ButtonContainer>
//             </Form>
//         </Container>
//     );
// }

// const Container = styled.div`
//     width: 100%;
//     max-width: 100%;
//     height: 884px;
//     padding: 0 120px;
//     margin-top: 100px;
//     box-sizing: border-box;
//     overflow: hidden;
// `;

// const Title = styled.h1`
//     font-size: 40px;
//     font-weight: bold;
//     margin-bottom: 24px;
// `;

// const Subtitle = styled.p`
//     font-size: 16px;
//     margin-bottom: 24px;
// `;

// const Form = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const Label = styled.label`
//     font-size: 14px;
//     font-weight: bold;
//     line-height: 20px;
//     margin-bottom: 10px;
//     text-align: left;
// `;

// const Input = styled.input`
//     height: 70px;
//     margin-bottom: 80px;
//     padding: 10px;
//     font-size: 14px;
//     box-sizing: border-box;
//     width: 100%;
// `;

// const Textarea = styled.textarea`
//     height: 200px;
//     margin-bottom: 80px;
//     padding: 30px 10px;
//     font-size: 14px;
//     box-sizing: border-box;
//     overflow-y: auto;
//     resize: none;
//     width: 100%;
//     scrollbar-width: thin; /* For Firefox */
//     scrollbar-color: #A586FF #ffffff; /* Thumb and track color for Firefox */

//     &::-webkit-scrollbar {
//         width: 8px;
//     }

//     &::-webkit-scrollbar-track {
//         background: #f0f0f0;
//         border-radius: 8px;
//     }

//     &::-webkit-scrollbar-thumb {
//         background-color: #6C20E1;
//         border-radius: 8px;
//         border: 2px solid #f0f0f0;
//     }

//     &::-webkit-scrollbar-thumb:hover {
//         background-color: #5511bb; /* Darker shade on hover */
//     }
// `;

// const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 12px;
// `;

// const Button = styled.button`
//     width: 240px;
//     height: 48px;
//     background-color: ${props => props.primary ? '#6C20E1' : 'transparent'};
//     border: 2px solid #6C20E1;
//     color: ${props => props.primary ? '#fff' : '#6C20E1'};
//     cursor: pointer;
//     font-size: 16px;
//     border-radius: 8px;
//     box-sizing: border-box;
// `;

// export default NoticeWritten;
