import { useState } from "react";
import FlexDiv from "../atom/FlexDiv";
import CheckOption from "../../Login/atoms/CheckOption";
import HiddenCheck from "../../Login/atoms/HiddenCheck";
import StyledLabel from "../../Login/atoms/StyledLabel";
import { useDispatch, useSelector } from "react-redux";
import { write } from "../../../slices/productSlice";
const SelectOptionGroup = ({ options, name }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  {
    /*
        15 스프레드 연산으로 배열을 복사합니다. ,는 추가하는 역할을 합니다. 따라서 이전배열을 복사한후 새로운 값 저장
        16 조건에 맞는 것만 배열에 추가 ex) [1,2,3,4] value=3 category=3 이니 3뺴고 새로운 배열 생성 */
  }
  const handleCheck = (event) => {
    const { value } = event.target;
    dispatch(
      write({
        ...product,
        category: [value], // 카테고리를 배열이 아닌 단일 값으로 설정
      })
    );
  };
  return (
    <FlexDiv>
      {options.map((option) => (
        <CheckOption
          key={option.value}
          style={{ flexBasis: "calc(25% - 20px)" }}
        >
          <HiddenCheck
            id={option.value}
            type="radio"
            name={name}
            value={option.value}
            onChange={handleCheck}
          />
          <StyledLabel htmlFor={option.value}>{option.label}</StyledLabel>
        </CheckOption>
      ))}
    </FlexDiv>
  );
};
export default SelectOptionGroup;
