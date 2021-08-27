/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton, Title } from '../components/Styled';
import fonts from '../styles/fonts';
import useActions from '../hooks/useActions';

function answerString(arr) {
  return Object.entries(arr)
    .map((pair) => pair.join('='))
    .join(' ');
}

function profileSelector(state) {
  return {
    name: state.name,
    gender: state.gender,
    answers: state.answers,
  };
}

export default function Result() {
  useEffect(() => {
    getResult();
    window.scrollTo(0, 0);
  }, []);

  const { setResult } = useActions();
  const history = useHistory();
  const { name, gender, answers } = useSelector(profileSelector);
  const [top2, setTop2] = useState([]);
  const [low2, setLow2] = useState([]);

  const getResult = async () => {
    const response = await axios
      .post('http://www.career.go.kr/inspct/openapi/test/report', {
        apikey: 'ca115d14dfa918dd56d9172eb0aac33c',
        qestrnSeq: '6',
        trgetSe: '100209',
        name: name,
        gender: gender,
        grade: '',
        startDtm: Date.now(),
        answers: answerString(answers),
      })
      .then(async (res) => {
        const seq = res.data.RESULT.url.split('=')[1];
        const result = await axios
          .get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`)
          .then((res2) => res2.data.result);
        const date = result.endDtm;
        const testRes = result.wonScore
          .trim()
          .split(' ')
          .map((item) => item.split('='));
        return [date, testRes];
      });

    const testDate = response[0];
    const score = response[1];
    setResult('testDate', testDate);
    setResult('originalRes', score.slice());

    score.sort((a, b) => b[1] - a[1]);

    const res1 = [score[0][0], score[1][0]];
    const res2 = [score[6][0], score[7][0]];
    setTop2(res1);
    setLow2(res2);

    setResult('top2', res1);
    setResult('low2', res2);
  };
  return (
    <>
      <Title>검사가 완료되었습니다.</Title>
      <Description>
        직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과
        신념입니다. <br />
        따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을
        한다고 볼 수 있습니다. <br />
        직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를
        중요하게 생각하는지를 알려줍니다. <br />
        또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해
        생각해 볼 기회를 제공합니다.
        <Message name={name} tops={top2} lows={low2} res={resItems} />
      </Description>

      <StyledButton status onClick={() => history.push('/resultdetail')}>
        결과 보기
      </StyledButton>
    </>
  );
}

const Description = styled.div`
  padding: 10px 50px;
  margin: 0;
  ${fonts.fontLarge};
  line-height: 1.5rem;
`;

const InnerMessage = styled.p`
  margin-top: 30px;
  line-height: 1.5rem;
`;

export function Message({ name, tops, lows, res }) {
  const isUnder1 = ['1', '3', '6'].includes(tops[1]);
  const isUnder2 = ['1', '3', '6'].includes(lows[1]);
  return (
    <InnerMessage>
      직업생활 관련하여 {name}님은 {res[tops[0]]}, {res[tops[1]]}
      {isUnder1 ? '를' : '을'} 가장 중요하게 생각합니다. <br />
      반면에 {res[lows[0]]}, {res[lows[1]]}
      {isUnder2 ? '는' : '은'} 상대적으로 덜 중요하게 생각합니다.
    </InnerMessage>
  );
}

export const resItems = {
  1: '능력발휘',
  2: '자율성',
  3: '보수',
  4: '안정성',
  5: '사회적 인정',
  6: '사회봉사',
  7: '자기계발',
  8: '창의성',
};
