import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RadioItem from './RadioItem';
import { QuestionContainer, QuestionSection } from './Styled';

export default function QuestionItem({ item, isSample = false, inputValue }) {
    const dispatch = useDispatch();

    const pageType = isSample ? 'SAMPLE_INPUT' : 'ANSWER_INPUTS';
    const onClick = (e) => {
        dispatch({ type: pageType, id: item.qitemNo, answer: e.target.value });
    };

    useEffect(() => {
        console.log('[QuestionItem]');
    });

    return (
        <QuestionContainer>
            <QuestionSection>{item.question}</QuestionSection>
            <RadioItem
                item={item}
                onClick={onClick}
                inputValue={inputValue}
                question
            />
        </QuestionContainer>
    );
}

QuestionItem.defaultProps = {
    item: {
        qitemNo: 1,
        question: '두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.',
        answer01: '능력발휘',
        answer02: '자율성',
        answer03: '직업을 통해 자신의 능력을 발휘하는 것입니다.',
        answer04: '일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다.',
        answerScore01: '1',
        answerScore02: '2',
    },
    isSample: false,
};

export const MemoizedQuestionItem = React.memo(QuestionItem);

