import React, { useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { StyledButton } from '../components/Styled';
import QuestionItem from '../components/QuestionItem';
import Status from '../components/Status';



export default function Sample() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sampleAnswer = useSelector((state)=>state.sample)
    const sample = sampleAnswer || {};
    useEffect(()=> {
        fetch();
    });
    const fetch = async () => {
        const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca115d14dfa918dd56d9172eb0aac33c&q=6');
        const actionObject = {type: 'SAVE_QUESTIONS', payload: response.data.RESULT};
        dispatch(actionObject);
    }
    const onClick = () => {
        if(sampleAnswer[1]!== undefined) {
            history.push('/questions/1')
        }
    }
    return (
        <>
            <div style={{width:'100%'}}>
                <Status />
            </div>
            <QuestionItem isSample inputValue={sample[1]} />
            <StyledButton status={sample[1]} onClick={onClick}>검사 진행하기</StyledButton>
        </>
    )
}
