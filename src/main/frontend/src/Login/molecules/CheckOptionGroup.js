import CheckOption from "../atoms/CheckOption";
import FlexDiv from "../atoms/FlexDiv";
import HiddenCheck from "../atoms/HiddenCheck";
import StyledLabel from "../atoms/StyledLabel";
import React, { useState } from "react";

const CheckOptionGroup = ({ options, name, setUser, user }) => {
  {
    /*
    14 스프레드 연산으로 배열을 복사합니다. ,는 추가하는 역할을 합니다. 따라서 이전배열을 복사한후 새로운 값 저장
    15 조건에 맞는 것만 배열에 추가 ex) [1,2,3,4] value=3 category=3 이니 3뺴고 새로운 배열 생성 */
  }
  const handleCheck = (event) => {
    const { value, checked } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      userCategory: checked
        ? [...prevUser.userCategory, value]
        : prevUser.userCategory.filter((category) => category !== value),
    }));
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
            type="checkbox"
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

export default CheckOptionGroup;
