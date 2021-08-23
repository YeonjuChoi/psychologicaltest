import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { StyledButton } from '../components/Styled';
import { MemoizedStatus } from '../components/Status'
import { MemoizedQuestionItem } from '../components/QuestionItem';

const NavDiv = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
    `;

export default function Questions() {
    const { page } = useParams();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [page])

    const questions = useSelector((state)=>state.questions)
    const questionLength = questions.length;

    const startNum = 5*(page-1);
    const endNum = 5*page > questionLength ? questionLength : 5*page
    const loadingList = questions.slice(startNum, endNum);

    const answer = useSelector((state)=>state.answers);
    const answersCount = Object.keys(answer).length;

    const onClickPrev = () => {
        if (page==='1'){
            history.push('/sample');
        } else {
            history.push(`/questions/${Number(page)-1}`)
        }
    };
    
    const onClickNext = () => {
        if(answersCount >= endNum){
            if (endNum === questionLength) {
                history.push('/result')
            } else{
                history.push(`/questions/${Number(page)+1}`)
            }
        }
    }

    return (
        <>
            <MemoizedStatus type='검사 진행' percent={parseInt(answersCount*100/questionLength)} />
            {loadingList.map((item)=><MemoizedQuestionItem key={`questionBox-${item.qitemNo}`} item={item} inputValue={answer[item.qitemNo]}  />)}
            <NavDiv>
                <StyledButton onClick={onClickPrev} sm status>이전</StyledButton>
                <StyledButton onClick={onClickNext} sm status={answersCount>=endNum} >다음</StyledButton>
            </NavDiv>
        </>
    )
}
