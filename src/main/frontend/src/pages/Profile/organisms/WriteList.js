import React, { useState } from 'react';
import styled from '@emotion/styled';
const WriteList = () => {
  const contents = [
    {
      id: "1",
      img: `${process.env.PUBLIC_URL + "/test.jpg"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      address: "마포대로 21 (다보빌딩)",
    },
    {
      id: "2",
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      address: "마포대로 21 (다보빌딩)",
    },
    {
      id: "3",
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      address: "마포대로 21 (다보빌딩)",
    },
    {
      id: "4",
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      address: "마포대로 21 (다보빌딩)",
    },
    {
      id: "5",
      img: `${process.env.PUBLIC_URL + "/test2.webp"}`,
      title: "바이씨니 클리프 트위드(핑크)",
      address: "마포대로 21 (다보빌딩)",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 관리하는 상태값을 선언, 초기값: 1페이지
  const contentsPerPage = 5; // 페이지당 표시할 항목 수를 설정
  const totalContents = contents.length; // 전체 항목 수 계산
  const totalPages = Math.ceil(totalContents / contentsPerPage); // 전체 페이지 수 계산

  // 현재 페이지에서 표시할 항목들의 인덱스를 계산합니다.
  const indexOfLastContent = currentPage * contentsPerPage; 
  const indexOfFirstContent = indexOfLastContent - contentsPerPage; 
  const currentContents = contents.slice(indexOfFirstContent, indexOfLastContent); // 현재 페이지에 해당하는 항목들만 slice로 추출
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <A>받은 거래 후기</A>
      {currentContents.map((content) => (
        <Container key={content.id}>
          <Content>
            <ProductInfo title>{content.title}</ProductInfo>
            <ProductInfo info>{content.address}</ProductInfo>
            <ProductInfo price>가격 정보 필요</ProductInfo> {/* 가격 정보가 없으므로 예시로 적음 */}
            <Btn>게시물 보러가기</Btn>
          </Content>
          <Image src={content.img} alt={content.title}></Image>
        </Container>
      ))}
       <Pagination>
        {/* 페이지 번호들을 생성하고 클릭 이벤트를 설정 */}
        {[...Array(totalPages).keys()].map((page) => (
          <PageNumber key={page + 1} onClick={() => handlePageChange(page + 1)}>
            {page + 1} {/* 페이지 번호 표시. */}
          </PageNumber>
        ))}
      </Pagination>
    </>
  );
};
const A = styled.div`
  font-size:36px;
  text-align: left;
  margin: 10px 0 0 10px;
`
const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 80%;
  height: 180px;
  margin: 16px 10% 0 10%;
  padding: 10px 20px;
  border-radius: 32px;
  box-shadow: 1px 3px 10px #adb5bd;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductInfo = styled.div`
  padding-left: 40px;
  margin: 3.5px;
  font-size: 10px;
  text-align: start;  
  ${(props) =>
    props.title &&
    `
      font-size:16px;
    `}
  ${(props) =>
    props.info &&
    `
        font-size:14px;
        color: gray;
      `}
  ${(props) =>
    props.price &&
    `
      font-size:16px;
      font-weight: bold;
      `}
  ${(props) =>
    props.place &&
    `
      font-size: 16px;
    `
  }
`;
const Btn = styled.button`
  width: 144px;
  height: 40px;
  margin: 5px 0 0 40px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  border-radius: 32px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
`;
const Pagination = styled.div`
  /* 페이지네이션 스타일을 정의 */
  width: 450px;
  height: 52px;
  display: flex;
  justify-content: center;  /* 가로 중앙 정렬 */
  align-items: center;  /* 세로 중앙 정렬 */
  margin: 40px auto;  /* 상단 마진을 주고, auto로 가로 중앙 정렬 */
  border-radius: 32px;
  box-shadow: 0px 2px 10px #adb5bd;
`;

const PageNumber = styled.div`
  /* 각 페이지 번호 스타일을 정의 */
  margin: 0 5px;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
`;
export default WriteList;