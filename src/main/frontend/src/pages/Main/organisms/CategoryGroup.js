import FlexDiv from "../../Login/atoms/FlexDiv";
import Button from "../atoms/Button";
import GridContainer from "../atoms/GridContainer";
const CategoryGroup = () => {
  const checkOption = [
    { label: "의상", value: "의상" },
    { label: "식품", value: "식품" },
    { label: "가구", value: "가구" },
    { label: "전자기기", value: "전자기기" },
    { label: "도서", value: "도서" },
    { label: "반려동물용품", value: "반려동물용품" },
    { label: "뷰티", value: "뷰티" },
    { label: "나눔", value: "나눔" },
  ];
  return (
    <GridContainer>
      {checkOption.map((checkOption) => (
        <Button to={`/category/${checkOption.value}`} key={checkOption.value}>
          {checkOption.label}
        </Button>
      ))}
    </GridContainer>
  );
};
export default CategoryGroup;
