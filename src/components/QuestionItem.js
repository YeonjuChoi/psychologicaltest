import React from 'react';
import { AnswerDiv, AnswerSection, QuestionDiv, QuestionSection } from '../components/Styled';
import { useDispatch, useSelector } from 'react-redux';

QuestionItem.defaultProps = {
    item: {
        qitemNo: 1,
        question: '두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.',
        answer01: "능력발휘",
        answer02: "자율성",
        answer03: "직업을 통해 자신의 능력을 발휘하는 것입니다.",
        answer04: "일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다.",
        answerScore01: '1',
        answerScore02: '2'},
    isSample: false
}
export default function QuestionItem({item, isSample=false, inputValue}) {
    const dispatch = useDispatch();
    
    const pageType = isSample ? "SAMPLE_INPUT":"ANSWER_INPUTS"
    const onClick = (e) => {
        dispatch({type: pageType, id: item.qitemNo, answer: e.target.value})
    };
    return (
        <QuestionDiv>
            <QuestionSection>
                {item.question}
            </QuestionSection>
            <AnswerDiv>
                <AnswerSection key={item.answerScore01}>
                    <input type='radio' id={item.answerScore01} value={item.answerScore01} name={`question-${item.qitemNo}`} onClick={onClick} defaultChecked={item.answerScore01===(inputValue)} />
                    <label htmlFor={item.answerScore01}>{item.answer01}<div>{item.answer03}</div></label>
                </AnswerSection>
                <AnswerSection key={item.answerScore02}>
                    <input type='radio' id={item.answerScore02} value={item.answerScore02} name={`question-${item.qitemNo}`} onClick={onClick} defaultChecked={item.answerScore02===(inputValue)} />
                    <label htmlFor={item.answerScore02}>{item.answer02}<div>{item.answer04}</div></label>
                </AnswerSection>
            </AnswerDiv>
        </QuestionDiv>
    )
}
