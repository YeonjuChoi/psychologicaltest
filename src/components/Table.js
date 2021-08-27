import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title } from './Styled';
import colors from '../styles/colors';

export default function Table({ title, res }) {
  const edu = ['', '중졸이하', '고졸', '전문대졸', '대졸', '대학원졸'];
  const majors = [
    '계열무관',
    '인문',
    '사회',
    '교육',
    '공학',
    '자연',
    '의학',
    '예체능',
  ];
  const titles = ['분류', '직업'];

  const [jobRes, setJobRes] = useState([]);

  const mainarr = title === '전공' ? majors : edu;

  const getRes = () => {
    const resSet = {};
    for (let i = 0; i < res.length; i++) {
      const item = res[i];
      if (!resSet[item[2]]) {
        resSet[item[2]] = [item[1]];
      } else {
        resSet[item[2]] = [...resSet[item[2]], item[1]];
      }
    }
    setJobRes(resSet);
  };

  useEffect(() => {
    getRes();
  }, [res]);

  return (
    <>
      <Title>종사자 평균 {title}별</Title>
      <StyledTable key={`${title}-table`}>
        <thead>
          <tr key="head-row">
            {titles.map((item) => (
              <td key={`table-data-${item}`} className="types">
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {jobRes !== [] &&
            Object.keys(jobRes).map((num) => (
              <tr key={`body-row-${mainarr[num]}`}>
                <td className="types">{mainarr[num]}</td>
                <td>
                  {jobRes[num].map((a, i) => (
                    <JobItems key={a}>{a} </JobItems>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </>
  );
}

// styled-components

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: seperate;
  border-spacing: ${(props) => (props.simple ? '8px 10px' : '10px 15px')};

  thead {
    font-weight: bold;
    border-bottom: solid 2px salmon;
    color: salmon;
  }

  tr {
    margin: 15px;
  }

  td {
    padding: 15px;
    border-radius: 15px;
    background-color: ${colors.lightSalmon};
    line-height: 1.5rem;

    &.types {
      background-color: ${colors.salmonColor};
      border: 2px solid ${colors.deepSalmon};
      color: salmon;
    }
  }
`;

const JobItems = styled.span`
  padding: 2px;
`;
