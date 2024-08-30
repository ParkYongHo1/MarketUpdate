import React, { useState } from 'react';
import styled from '@emotion/styled';
const Notice = () => {
    return (
        <Container>
            <A>Notice 연습용</A>
        </Container>
        
    )
}
const Container = styled.div`
    background-color: blue;
`
const A = styled.div`
    font-size: 100px;
`
export default Notice;