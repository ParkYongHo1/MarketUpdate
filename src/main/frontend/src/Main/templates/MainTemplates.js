import MainContainer from "../atoms/MainContainer";
import MainSwiper from "../organisms/MainSwiper";
import MainCategoryDiv from "../atoms/MainCategoryDiv";
import MainDiv from "../atoms/MainDiv";
import CategoryGroup from "../atoms/CategoryGroup";
import MainDivHeader from "../atoms/MainDivHeader";
import MainDivTitle from "../atoms/MainDivTitle";
import MainMoreButton from "../atoms/MainMoreButton";
import MainDivContent from "../atoms/MainDivContent";

const MainTemplates = () => {
  return (
    <>
      <MainSwiper></MainSwiper>
      <MainContainer>
        <MainDiv>
          <MainCategoryDiv>
            <CategoryGroup></CategoryGroup>
          </MainCategoryDiv>
        </MainDiv>
        <MainDiv>
          <MainDivHeader>
            <MainDivTitle></MainDivTitle>
            <MainMoreButton></MainMoreButton>
          </MainDivHeader>
          <MainDivContent>
            <MainDivTitle></MainDivTitle>
            <MainMoreButton></MainMoreButton>
          </MainDivContent>
        </MainDiv>
        <MainDiv>
          <MainDivHeader>
            <MainDivTitle></MainDivTitle>
            <MainMoreButton></MainMoreButton>
          </MainDivHeader>
          <MainDivContent>
            <MainDivTitle></MainDivTitle>
            <MainMoreButton></MainMoreButton>
          </MainDivContent>
        </MainDiv>
      </MainContainer>
    </>
  );
};

export default MainTemplates;
