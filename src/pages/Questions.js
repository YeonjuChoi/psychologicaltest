import React, { useState, useEffect } from 'react';
import { QuestionDiv } from '../components/Styled';
import { Link, useParams } from 'react-router-dom';
import Status from '../components/Status'
import QuestionItem from '../components/QuestionItem';
import styled from 'styled-components';

const NavDiv = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
    `;

export default function Questions() {
    const { page } = useParams();

    return (
        <>
            <Status type='검사 진행' percent='0' />
            <QuestionItem></QuestionItem>
            검사페이지 {page}
            <NavDiv>
                <button><Link to={page==='1'? '/sample':`/questions/${parseInt(page) - 1}`}>이전</Link></button>
                <button><Link to={`/questions/${parseInt(page) + 1}`}>다음</Link></button>
            </NavDiv>
        </>
    )
}
