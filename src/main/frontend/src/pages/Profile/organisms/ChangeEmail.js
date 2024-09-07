import React, { useState } from 'react';
import styled from '@emotion/styled';
const ChangeEmail = () => {
    return (     // return()문 대신 const Container = {} 이런식으로 쓸 수 있으나 이런식으로 쓸땐 마지막에 return Container을 작성해줘야 Container을 반환함
                // 대부분 return문으로 쓴고 위에꺼 요약해서 쓰는거임
        <Container>
            <A>ChangeEmail 연습용</A>
        </Container>
    )
}
const Container = styled.div`
    background-color: blue;
`
const A = styled.div`
    font-size: 100px;
`
export default ChangeEmail;