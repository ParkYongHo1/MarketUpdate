const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 관리하는 상태값을 선언, 초기값: 1페이지
  const contentsPerPage = 5; // 페이지당 표시할 항목 수를 설정
  const totalContents = contents.length; // 전체 항목 수 계산
  const totalPages = Math.ceil(totalContents / contentsPerPage); // 전체 페이지 수 계산

  // 현재 페이지에서 표시할 항목들의 인덱스를 계산합니다.
  const indexOfLastContent = currentPage * contentsPerPage; 
  const indexOfFirstContent = indexOfLastContent - contentsPerPage; 
  const currentContents = contents.slice(indexOfFirstContent, indexOfLastContent); // 현재 페이지에 해당하는 항목들만 slice로 추출
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

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