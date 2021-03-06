import React, { useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { StyledButton } from '../components/Styled';
import QuestionItem from '../components/QuestionItem';
import Status from '../components/Status';
import useActions from '../hooks/useActions'



export default function Sample() {
    const { setupQuestions } = useActions();
    const history = useHistory();
    const sample = useSelector((state)=>state.sample)
    useEffect(()=> {
        fetch();
    });
    const fetch = async () => {
        const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca115d14dfa918dd56d9172eb0aac33c&q=6');
        
        setupQuestions(response.data.RESULT)
    }
    const onClick = () => {
        if(sample[1]!== undefined) {
            history.push('/questions/1')
        }
    }
    return (
        <>
            <Status/>
            <QuestionItem isSample inputValue={sample[1]} />
            <StyledButton status={sample[1]} onClick={onClick}>검사 진행하기</StyledButton>
        </>
    )
}
