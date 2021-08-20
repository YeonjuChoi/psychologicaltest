import React from 'react';
import { AnswerOption, AnswerSection, StyledRadioInput } from './Styled';


export default function RadioItem({ item, question, onClick, inputValue=null, isGender=false }) {
    function getDataObj(data) {
        if (question) {
            return [1,2].map(num => ({
                name: `question-${data.qitemNo}`,
                score: data[`answerScore0${num}`],
                answer: data[`answer0${num}`],
                additionalInfo: data[`answer0${2*num}`],
            }))
        }
        return data
    }
    const answers = getDataObj(item)

    return (
        <AnswerSection>
            {answers.map(({ name, score, answer, additionalInfo}) => (
                <AnswerOption key={score}>
                    <StyledRadioInput
                        type='radio'
                        id={score}
                        value={score}
                        name={name}
                        onClick={onClick}
                        defaultChecked={score===inputValue}
                        gender={isGender}
                    />
                    <label htmlFor={score}>
                        {answer}
                        <div>{additionalInfo}</div>
                    </label>
                </AnswerOption>
            ))}
        </AnswerSection>
    )
}
