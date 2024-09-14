const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 관리하는 상태값을 선언, 초기값: 1페이지
  const contentsPerPage = 8; // 페이지당 표시할 항목 수를 설정
  const totalContents = contents.length; // 전체 항목 수 계산
  const totalPages = Math.ceil(totalContents / contentsPerPage); // 전체 페이지 수 계산

  // 현재 페이지에서 표시할 항목들의 인덱스를 계산합니다.
  const indexOfLastContent = currentPage * contentsPerPage; 
  const indexOfFirstContent = indexOfLastContent - contentsPerPage; 
  const currentContents = contents.slice(indexOfFirstContent, indexOfLastContent); // 현재 페이지에 해당하는 항목들만 slice로 추출
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);


  return ( 
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
);


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