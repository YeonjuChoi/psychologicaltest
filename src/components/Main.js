import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Main() {
    const StyledButton = styled.button`
        background-color: #C1CFC0;
        width: 100px;
        height: 35px;
        border-radius: 10px;
        border: 0px;
        margin-top: 20px;
    `;
    // useEffect(()=> {
        axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=어쩌고&q=저쩌고')
    // }, []);
    return (
        <>
            <h1>직업 가치관 검사</h1>
            <p>이름</p>
            <input name='name' type='text' />
            <p>성별</p>
            <label for='male'><input name='gender' id='male' value='100323' type='radio' /> 남성</label>
            <label for='female'><input name='gender' id='female' value='100324' type='radio' /> 여성</label>
            <StyledButton>제출</StyledButton>
        </>
    )
}
