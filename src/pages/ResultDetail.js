import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Table, { StyledTable } from '../components/Table';
import { StyledButton, Title } from '../components/Styled';
import BarChart from '../components/BarChart';
import { Message, resItems } from './Result';

function getDate(dateInfo) {
  const dateArr = dateInfo.split('-');
  const year = dateArr[0];
  const month = dateArr[1];
  const dayTime = dateArr[2].split(':')[0].split('T');
  const day = dayTime[0];
  const time = dayTime[1];
  let realDay = day;

  if (time > 15) {
    realDay = Number(day) + 1;
  }

  return `${year}년 ${month}월 ${realDay}일`;
}

function profileSelector(state) {
  return {
    name: state.name,
    gender: state.gender,
    originalRes: state.results.originalRes,
    top2: state.results.top2,
    low2: state.results.low2,
    testDate: state.results.testDate,
  };
}

export default function ResultDetail() {
  const { name, gender, originalRes, top2, low2, testDate } =
    useSelector(profileSelector);

  const [job, setJob] = useState([]);
  const [major, setMajor] = useState([]);

  useEffect(() => {
    getResult();
    window.scrollTo(0, 0);
  }, []);

  async function getResult() {
    const jobRes = await axios.get(
      `https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=${top2[0]}&no2=${top2[1]}`,
    );
    setJob(jobRes.data);

    const majorRes = await axios.get(
      `https://www.career.go.kr/inspct/api/psycho/value/majors?no1=${top2[0]}&no2=${top2[1]}`,
    );
    setMajor(majorRes.data);
  }

  const date = getDate(testDate);

  return (
    <div>
      <h1>상세결과 페이지</h1>
      <StyledTable simple>
        <thead>
          <tr>
            <td className="types">이름</td>
            <td className="types">성별</td>
            <td className="types">검사일</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{gender === '100323' ? '남' : '여'}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </StyledTable>
      <Message name={name} tops={top2} lows={low2} res={resItems} />
      <div>
        <Title>직업 가치관 결과</Title>
        {originalRes && (
          <BarChart label={Object.values(resItems)} score={originalRes} />
        )}
      </div>
      <div>
        {job && major && (
          <div>
            <Table title="학력" res={job} />
            <Table title="전공" res={major} />
          </div>
        )}
      </div>
      <a href="/">
        <StyledButton status>다시 검사하기</StyledButton>
      </a>
    </div>
  );
}
