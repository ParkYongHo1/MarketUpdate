import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// Notice 컴포넌트
const Notice = () => {
    // 공지사항 리스트 useState
    const [notices, setNotices] = useState([
        {
          id: 1,
          title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
          views: 9,
          date: "2024-03-03 19:09:18",
        },
        {
            id: 4,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 5,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 6,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 7,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 8,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 9,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 10,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 11,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 12,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 13,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },
          {
            id: 14,
            title: "의심되는 경우 즉시 거래를 중단하고 신고하세요.",
            views: 9,
            date: "2024-03-03 19:09:18",
          },

        {
          id: 2,
          title: "안전한 거래 방법",
          views: 21,
          date: "2024-03-03 19:09:17",
        },
        {
          id: 3,
          title: "거래 전, 반드시 판매자/구매자의 신원을 확인하세요.",
          views: 8,
          date: "2024-03-03 19:09:16",
        },
      ]);

    // 정렬 상태를 관리하는 useState
    const [sortConfig, setSortConfig] = useState({ key: "date", direction: "descending" });
    const [currentPage, setCurrentPage] = useState(1);
    const contentsPerPage = 8; // 페이지당 공지사항 개수 설정

    // 총 페이지 계산
    const totalContents = notices.length;  // 공지사항의 총 개수
    const totalPages = Math.ceil(totalContents / contentsPerPage); // 페이지 수 계산

    // 현재 페이지에서 표시할 항목들의 인덱스를 계산
    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const currentContents = notices.slice(indexOfFirstContent, indexOfLastContent); // 현재 페이지에 해당하는 항목들만 slice로 추출

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // 컴포넌트가 처음 마운트될 때 최신순으로 정렬
    useEffect(() => {
        sortNotices(sortConfig.key);
    }, []);

    // 조회수를 증가시키는 함수
    const incrementViews = (id) => {
        setNotices((prevNotices) =>
            prevNotices.map((notice) =>
                notice.id === id ? { ...notice, views: notice.views + 1 } : notice
            )
        );
    };

    // 정렬을 처리하는 함수
    const sortNotices = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        const sortedNotices = [...notices].sort((a, b) => {
            if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
            if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
            //-1은 오름차순 1은 내림차순
            return 0;
        });
        setSortConfig({ key, direction });
        setNotices(sortedNotices);
    };

    return (
        <Container>
            <Header>
                <Title>공지사항</Title>
                <SearchWrapper>
                    <SearchInput placeholder="공지사항 검색" />
                    <Icon className="fa-solid fa-magnifying-glass" />
                </SearchWrapper>
            </Header>
            {/* 관리자 전용 공지사항
            <Header>
              <Title>공지사항</Title>
              <ButtonWrapper>
                <Button> <i class="fa-solid fa-pen"></i>게시글 작성</Button>
              </ButtonWrapper>
            </Header> */}

            <Container2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell onClick={() => sortNotices("title")}>
                                제목 <i className="fa-solid fa-sort"></i>
                            </TableCell>
                            <TableCell onClick={() => sortNotices("views")}>
                                조회수 <i className="fa-solid fa-sort"></i>
                            </TableCell>
                            <TableCell onClick={() => sortNotices("date")}>
                                날짜 <i className="fa-solid fa-sort"></i>
                            </TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentContents.map((notice) => (  //현재 페이지에만 있는 공지사항들
                            <TableRow key={notice.id} onClick={() => incrementViews(notice.id)}>
                                <TableCell>{notice.title}</TableCell>
                                <TableCell>{notice.views}</TableCell>
                                <TableCell>{notice.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination>
                    <PageNumber onClick={() => handlePageChange(Math.max(currentPage - 10, 1))}>
                        {"<"}
                    </PageNumber>
                    <PageGroup>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PageNumber
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                active={currentPage === index + 1}
                            >
                                {index + 1}
                            </PageNumber>
                        ))}
                    </PageGroup>
                    <PageNumber onClick={() => handlePageChange(Math.min(currentPage + 10, totalPages))}>
                        {">"}
                    </PageNumber>
                </Pagination>
            </Container2>
        </Container>
    );
};

// 스타일 정의
const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 844px;
  margin: 0px 148px 40px 36px;
  padding-right: 50px;
  position: relative; /* 자식 요소를 절대 위치로 설정할 수 있도록 */
  overflow: hidden; /* 자식 요소가 컨테이너를 벗어나지 않도록 설정 */
`;

const Container2 = styled.div`
  align-items: center;
  height: 808px;
  padding: 10px 12px;
  padding-bottom: 0;
  background-color: #F6F6F6;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const SearchInput = styled.input`
  width: 250px;
  padding: 8px 32px;
  border: 1px solid #EFEFEF;
  border-radius: 35px;
`;

const Icon = styled.i`
  position: absolute;
  right: 12px;
  size : 16px 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #747474;
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




const Table = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.div`
  background-color: #FCFCFC;
  font-weight: bold;
  font-size: 12px; 
  color: #9A9EA5;
  border-bottom: 1px solid #D4D4D4;
  border-top-left-radius: 8px; /* 상단 왼쪽 radius */
  border-top-right-radius: 8px; /* 상단 오른쪽 radius */
`;


const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #F0F0F0;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }

  // TableBody의 마지막 Row에 하단 radius를 적용하기 위해 조건부 스타일링
  &:last-of-type {
    border-bottom-left-radius: 8px; /* 하단 왼쪽 radius */
    border-bottom-right-radius: 8px; /* 하단 오른쪽 radius */
  }
`;

const TableCell = styled.div`
  flex: 1;
  text-align: left;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  height: 46px;
  &:first-of-type {
    flex: 3; /* 제목이 더 길어지게 설정 */ 
  }
  i {
    margin-left: 8px; /* 아이콘과 텍스트 사이의 간격 설정 */
  }

`;

const TableBody = styled.div`
  background-color: #ffffff;    
`;

// 수정된 Pagination 코드
const Pagination = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우 끝에 요소 배치 */
  align-items: center; /* 상하 가운데 정렬 */
  position: absolute; /* 절대 위치로 설정 */
  bottom: 20px;
  left: 50%; /* 부모 요소의 왼쪽에서 50% 지점으로 이동 */
  transform: translateX(-50%); /* 자신의 너비의 50%만큼 왼쪽으로 이동하여 가운데 정렬 */
  width: 70%; 
  box-sizing: border-box; /* padding이 요소의 너비에 포함되도록 설정 */
  background-color: #F7F9FF; 
  height: 42px; 
  border-radius: 26px; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 드롭섀도우 적용 */
  padding: 0 10px; /* 좌우 끝에서 10px 떨어지도록 설정 */
`; 

const PageNumber = styled.span`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: black;
  border-radius: 50%; /* 원형으로 만들기 위해 border-radius를 50%로 설정 */
  display: flex;
  align-items: center; 
  justify-content: center;
  line-height: 28px; /* height와 동일한 line-height로 설정하여 텍스트 중앙 정렬 */
  text-align: center;
  ${({ active }) => active && `background-color: #A586FF; color: #ffffff;`} /* 현재 페이지 강조 표시 */
  
  &:hover {
    background-color: #C0ABFF;
  }
`;

const PageGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1; /* 중앙 페이지 번호 그룹이 남은 공간을 차지하도록 설정 */
`;
export default Notice;
