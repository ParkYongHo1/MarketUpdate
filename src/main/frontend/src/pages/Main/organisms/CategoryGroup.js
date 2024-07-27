import StyledLink from "../atoms/StyledLink";
import GridContainer from "../atoms/GridContainer";
const CategoryGroup = () => {
  const checkOption = [
    { label: "의상", value: "의상" },
    { label: "식품", value: "식품" },
    { label: "가구", value: "가구" },
    { label: "전자기기", value: "전자기기" },
    { label: "도서", value: "도서" },
    { label: "뷰티", value: "뷰티" },
    { label: "나눔", value: "나눔" },
    { label: "기타", value: "기타" },
  ];
  return (
    <GridContainer>
      {checkOption.map((checkOption) => (
        <StyledLink
          button
          to={`/category/${checkOption.value}`}
          key={checkOption.value}
        >
          {checkOption.label}
        </StyledLink>
      ))}
    </GridContainer>
  );
};
export default CategoryGroup;
