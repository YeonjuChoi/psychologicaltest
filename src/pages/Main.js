import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { StyledInput, StyledButton, Title } from '../components/Styled';
import RadioItem from '../components/RadioItem';

export default function Main() {
    
    const [inputs, setInputs] = useState({
        name: '',
        gender: ''
    });

    const {name, gender} = inputs;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleClick = () => {
        if (name && gender) {
            dispatch({type: 'PROFILE_ACTION', name, gender});
            history.push('/sample')
        } 
    }

    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <>
            <h1>직업 가치관 검사</h1>
            <div>
                <Title>이름</Title>
                <StyledInput name='name' type='text' onChange={onChange} value={inputs.name} required />
                <Title>성별</Title>
                <RadioItem item={[{name:'gender', score:'100323', answer:'남성', additionalInfo:null},{name:'gender', score:'100324', answer:'여성', additionalInfo:null}]} onClick={onChange} isGender />
            </div>
            <StyledButton status={name!=='' && gender!==''} onClick={handleClick}>제출</StyledButton>
        </>
    )
}

