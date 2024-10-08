import { useDispatch, useSelector } from "react-redux";
import CheckOption from "../atoms/CheckOption";
import Div from "../atoms/Div";
import HiddenCheck from "../atoms/HiddenCheck";
import StyledLabel from "../atoms/StyledLabel";
import React, { useState } from "react";
import { setUser } from "../../../slices/userSlice";
const CheckOptionGroup = ({ options, name }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  {
    /*
    15 스프레드 연산으로 배열을 복사합니다. ,는 추가하는 역할을 합니다. 따라서 이전배열을 복사한후 새로운 값 저장
    16 조건에 맞는 것만 배열에 추가 ex) [1,2,3,4] value=3 category=3 이니 3뺴고 새로운 배열 생성 */
  }
  const handleCheck = (event) => {
    const { value, checked } = event.target;
    dispatch(
      setUser({
        ...user,
        category: checked
        ? [...(user.category || []), value]  // null일 경우 빈 배열로 처리
        : (user.category || []).filter((category) => category !== value),
      })
    );
  };
  return (
    <Div wrapFlex>
      {options.map((option) => (
        <CheckOption
          key={option.value}
          style={{ flexBasis: "calc(25% - 20px)" }}
        >
          <HiddenCheck
            id={option.value}
            type="checkbox"
            name={name}
            value={option.value}
            onChange={handleCheck}
          />
          <StyledLabel htmlFor={option.value}>{option.label}</StyledLabel>
        </CheckOption>
      ))}
    </Div>
  );
};

export default CheckOptionGroup;
