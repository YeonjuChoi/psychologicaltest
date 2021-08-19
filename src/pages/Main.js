import React, {useState} from 'react';
import { AnswerSection, AnswerOption, StyledInput, StyledButton, StyledRadioInput } from '../components/Styled';
import { useHistory } from 'react-router-dom';
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
                <p style={{fontSize:'1.5rem', color:'salmon', fontWeight:'bold'}}>이름</p>
                <StyledInput name='name' type='text' onChange={onChange} value={inputs.name} required />
                <p style={{fontSize:'1.5rem', color:'salmon', fontWeight:'bold'}}>성별</p>
                <AnswerSection name='gender' onChange={onChange} value={gender}>
                    <AnswerOption gender key='1'>
                        <StyledRadioInput type='radio' id='male' gender value='100323' name='gender' required />
                        <label htmlFor='male'>남성</label>
                    </AnswerOption>
                    <AnswerOption gender key='2'>
                        <StyledRadioInput type='radio' id='female' gender value='100324' name='gender' />
                        <label htmlFor='female'>여성</label>
                    </AnswerOption>
                </AnswerSection>
            </div>
            <StyledButton status={name!=='' && gender!==''} onClick={handleClick}>제출</StyledButton>
        </>
    )
}
