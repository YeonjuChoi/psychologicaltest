/* eslint-disable no-plusplus */
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton, Title } from '../components/Styled';

export default function Result() {
    useEffect(() => {
        getResult();
        window.scrollTo(0,0);
    },[]);
    const dispatch = useDispatch();
    const history = useHistory();
    const { name, gender, answers } = useSelector(state => ({
        name: state.name,
        gender: state.gender,
        answers: state.answers,
    }))
    function answerString(arr) {
        return Object.entries(arr)
        .map(pair => pair.join('='))
        .join(' ')
    
    }
    
    const getResult = async () => {
        const response = await axios.post('http://www.career.go.kr/inspct/openapi/test/report', {
            "apikey": "ca115d14dfa918dd56d9172eb0aac33c",
            "qestrnSeq": "6",
            "trgetSe": "100209",
            "name": name,
            "gender": gender,
            "grade": "",
            "startDtm": Date.now(),
            "answers": answerString(answers),
        })
        const resId = response.data.RESULT.url.split('=')[1];
        dispatch({type: 'RESULT_INPUT', result: resId})


    }
    return (
        <>
            <Title>검사가 완료되었습니다.</Title>
            <Description>직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. <br />따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. <br />직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. <br />또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</Description>
            <StyledButton status onClick={()=>history.push('/resultdetail')} >결과 보기</StyledButton>
        </>
    )
}

const Description = styled.p`
    font-size: 1.2rem;
    padding: 50px;
`;