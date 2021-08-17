import React, {useState} from 'react';
import styled from 'styled-components';
import { AnswerDiv, AnswerSection, StyledInput, StyledButton } from '../components/Styled';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Main() {
    


    const [inputs, setInputs] = useState({
        name: '',
        gender: ''
    });

    const {name, gender} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const handleClick = () => {
        console.log(name, gender);
        dispatch({type: 'PROFILE_ACTION', name, gender});
        history.push('/sample')
    }

    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <>
            <h1>직업 가치관 검사</h1>
            <p style={{fontSize:'1.5rem', color:'salmon', fontWeight:'bold'}}>이름</p>
            <StyledInput name='name' type='text' onChange={onChange} value={inputs.name} />
            <p style={{fontSize:'1.5rem', color:'salmon', fontWeight:'bold'}}>성별</p>
            <AnswerDiv name='gender' onChange={onChange} value={gender}>
                <AnswerSection gender key='1'>
                    <input type='radio' id='male' value='100323' name='gender' />
                    <label htmlFor='male'>남성</label>
                </AnswerSection>
                <AnswerSection gender key='2'>
                    <input type='radio' id='female' value='100324' name='gender' />
                    <label htmlFor='female'>여성</label>
                </AnswerSection>
            </AnswerDiv>
            <StyledButton onClick={handleClick}>제출</StyledButton>
        </>
    )
}
