import React, { useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { StyledButton } from '../components/Styled';
import {MemoizedQuestionItem} from '../components/QuestionItem';
import {MemoizedStatus} from '../components/Status';



export default function Sample() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sample = useSelector((state)=>state.sample)
    useEffect(()=> {
        fetch();
    });
    const fetch = async () => {
        const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca115d14dfa918dd56d9172eb0aac33c&q=6');
        const actionObject = {type: 'SAVE_QUESTIONS', payload: response.data.RESULT};
        dispatch(actionObject);
    }
    const onClick = () => {
        if(sample[1]!== undefined) {
            history.push('/questions/1')
        }
    }
    return (
        <>
            <MemoizedStatus />
            <MemoizedQuestionItem isSample inputValue={sample[1]} />
            <StyledButton status={sample[1]} onClick={onClick}>검사 진행하기</StyledButton>
        </>
    )
}
