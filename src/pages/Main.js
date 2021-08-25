import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledInput, StyledButton, Title, Alert } from '../components/Styled';
import RadioItem from '../components/RadioItem';
import useActions from '../hooks/useActions';

export default function Main() {
    const { setupProfile } = useActions();

    const [inputs, setInputs] = useState({
        name: '',
        gender: '',
    });

    const { name, gender } = inputs;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        if (name && gender) {
            setupProfile(name, gender);
            history.push('/sample');
        }
    };

    const history = useHistory();
    return (
        <>
            <h1>직업 가치관 검사</h1>
            <div>
                <Title>이름</Title>
                <StyledInput
                    name="name"
                    type="text"
                    onChange={onChange}
                    value={inputs.name}
                    required
                />
                {inputs.gender && inputs.name === '' && (
                    <Alert>이름을 입력해주세요!</Alert>
                )}
                <Title>성별</Title>
                <RadioItem
                    item={[
                        {
                            name: 'gender',
                            score: '100323',
                            answer: '남성',
                            additionalInfo: null,
                        },
                        {
                            name: 'gender',
                            score: '100324',
                            answer: '여성',
                            additionalInfo: null,
                        },
                    ]}
                    onClick={onChange}
                    isGender
                />
            </div>
            <StyledButton
                status={name !== '' && gender !== ''}
                onClick={handleClick}
            >
                제출
            </StyledButton>
        </>
    );
}
