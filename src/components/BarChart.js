import React from 'react'
import styled, {keyframes} from 'styled-components'
import colors from '../styles/colors'

export default function BarChart({ label, score }) {
    
    return (
        <ChartDiv>
                {score.map((item)=><ChartStack key={`stack-${item[0]}`}>
                    <StackName>{label[Number(item[0])-1]}</StackName>
                    <ChartBar height={Number(item[1])} />
                    <StackNum>{item[1]}</StackNum>
                </ChartStack>)}
        </ChartDiv>
    )
}


const ChartDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const ChartStack = styled.div`
    width: 20%;
    height: 380px;
    display: flex;
    flex-direction: column-reverse;
    background: linear-gradient(${colors.lightSalmon} 50%, transparent 0);
    background-size: 100% 80px;
`;

const ChangeHeight = keyframes`
    from {
        height: 0
    }
    to {
        height: default
    }
`;

const ChartBar = styled.div`
    height: ${props => `${Number(props.height)*40}px`};
    width: 70%;
    background-color: ${colors.salmonColor};
    margin: 0 auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid ${colors.deepSalmon};
    border-bottom: 0;
    animation: ${ChangeHeight} 0.4s ease-in-out;
    
`;


const StackName = styled.div`
    font-size: 0.5rem;
    border-top: 1px solid ${colors.deepSalmon};
    text-align: center;
    height: 18px;
    margin: 0;
    color: ${colors.deepSalmon};
`;

const StackNum = styled.div`
    font-size: 0.5rem;
    color: ${colors.deepSalmon}
`;