import React from 'react';
import styled from 'styled-components';

Status.defaultProps = {
  type: '검사 예시',
  percent: 0,
};

const StatusContainer = styled.div`
  width: 100%;
`;

const TopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const StatusBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 10px;
  padding: 3px;
  margin-bottom: 20px;
  overflow: auto;
`;

const Progress = styled.div`
  width: ${(props) => `${props.percent}%` || '0%'};
  height: 100%;
  background-color: rgba(250, 128, 114, 0.2);
  border-radius: 10px;
  transition: all 0.2s linear;
`;

function Status({ type, percent }) {
  return (
    <StatusContainer>
      <TopInfo>
        <h2>{type}</h2>
        <h2>{percent}%</h2>
      </TopInfo>
      <StatusBar>
        <Progress percent={percent} />
      </StatusBar>
    </StatusContainer>
  );
}

export default React.memo(Status);
