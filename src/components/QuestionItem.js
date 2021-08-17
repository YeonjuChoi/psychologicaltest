import React from 'react';
import { AnswerDiv, AnswerSection, QuestionDiv, QuestionSection } from '../components/Styled';

QuestionItem.defaultProps = {
    idx: 0,
    question: '두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.',
    answer01: "능력발휘",
    answer02: "자율성",
    answer03: "직업을 통해 자신의 능력을 발휘하는 것입니다.",
    answer04: "일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다.",
    answerScore01: '1',
    answerScore02: '2'
}
export default function QuestionItem({idx, question, answer01, answer02, answer03, answer04, answerScore01, answerScore02}) {
    return (
        <QuestionDiv>
            <QuestionSection>
                {question}
            </QuestionSection>
            <AnswerDiv>
                <AnswerSection key={answerScore01}>
                    <input type='radio' id={answerScore01} value={answerScore01} name={`question-${idx}`} />
                    <label htmlFor={answerScore01}>{answer01}<div>{answer03}</div></label>
                </AnswerSection>
                <AnswerSection key={answerScore02}>
                    <input type='radio' id={answerScore02} value={answerScore02} name={`question-${idx}`} />
                    <label htmlFor={answerScore02}>{answer02}<div>{answer04}</div></label>
                </AnswerSection>
            </AnswerDiv>
        </QuestionDiv>
    )
}
