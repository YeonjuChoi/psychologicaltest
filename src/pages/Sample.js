import React, { useState, useEffect } from 'react'
import { AnswerDiv, AnswerSection, QuestionDiv, QuestionSection, StyledButton } from '../components/Styled';
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import QuestionItem from '../components/QuestionItem';
import Status from '../components/Status';



export default function Sample() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sampleAnswer = useSelector((state)=>state.sample[1])
    console.log(sampleAnswer)
    useEffect(()=> {
        fetch();
    }, []);
    const fetch = async () => {
        const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca115d14dfa918dd56d9172eb0aac33c&q=6');
        console.log(response.data.RESULT);
        const actionObject = {type: 'SAVE_QUESTIONS', payload: response.data.RESULT};
        dispatch(actionObject);
    }
    const onClick = () => {
        history.push('/questions/1')
    }
    return (
        <>
            <Status />
            <QuestionItem isSample='true' />
            <StyledButton status={sampleAnswer!==undefined} onClick={onClick}>검사 진행하기</StyledButton>
        </>
    )
}
