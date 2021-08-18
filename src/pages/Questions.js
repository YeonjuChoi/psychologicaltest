import React, { useState, useEffect } from 'react';
import { StyledButton } from '../components/Styled';
import { Link, useParams, useHistory } from 'react-router-dom';
import Status from '../components/Status'
import QuestionItem from '../components/QuestionItem';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const NavDiv = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
    `;

export default function Questions() {
    const { page } = useParams();
    const questionsObj = useSelector((state)=>state.questions)
    const questions = questionsObj || {};
    const questionLength = questions.length;
    const startNum = 5*(page-1);
    const endNum = 5*page > questionLength ? questionLength : 5*page
    const loadingList = questions.slice(startNum, endNum);
    const answerObj = useSelector((state)=>state.answers);
    const answer = answerObj || {};
    const answersCount = Object.keys(answer).length;
    const history = useHistory();
    const onClickPrev = () => {
        if (page==='1'){
            history.push('/sample');
        } else {
            history.push(`/questions/${parseInt(page)-1}`)
        }
    };
    const onClickNext = () => {
        if(answersCount >= endNum){
            if (endNum === questionLength) {
                history.push('/result')
            } else{
                history.push(`/questions/${parseInt(page)+1}`)
            }
        }
    }
    

    return (
        <>
            <Status type='검사 진행' percent={parseInt(answersCount*100/questionLength)} />
            {loadingList.map((item)=><QuestionItem key={`questionBox-${item.qitemNo}`} item={item} inputValue={answer[item.qitemNo]}  />)}
            검사페이지 {page}
            <NavDiv>
                <StyledButton onClick={onClickPrev} sm>이전</StyledButton>
                <StyledButton onClick={onClickNext} sm status={answersCount>=endNum} >다음</StyledButton>
            </NavDiv>
        </>
    )
}
