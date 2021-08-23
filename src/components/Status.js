import React from 'react';
import styled from 'styled-components';

Status.defaultProps = {
    type: '검사 예시',
    percent: 0
}

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
    width: ${props=>`${props.percent}%` || '0%'};
    height: 100%;
    background-color: lightsalmon;
    border-radius: 10px;
    transition: all 0.2s linear;
`;

export default function Status({type, percent}) {
    

    return (
        <>
            <TopInfo>
                <h2>{type}</h2>
                <h2>{percent}%</h2>
            </TopInfo>
            <StatusBar>
                <Progress percent={percent} />
            </StatusBar>
        </>
    )
}

export const MemoizedStatus = React.memo(Status)