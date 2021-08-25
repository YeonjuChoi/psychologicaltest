import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled, { keyframes } from 'styled-components';

export default function BarChart({ label, score }) {
    const newScore = score.map((item) => item[1]);

    const data = {
        labels: label,
        datasets: [
            {
                label: '득표',
                data: newScore,
                backgroundColor: ['rgba(250,128,114,0.2)'],
                borderColor: ['rgba(250, 128, 144, 0.6)'],
                borderWidth: 1,
                borderRadius: 10,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                suggestedMax: 8,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    function Chart() {
        return (
            <ChartDiv>
                {score.map((item) => (
                    <ChartStack key={`stack-${item[0]}`}>
                        <StackName key={`name-${item[0]}`}>
                            {label[Number(item[0]) - 1]}
                        </StackName>
                        <ChartBar
                            key={`bar-${item[0]}`}
                            height={Number(item[1])}
                        />
                    </ChartStack>
                ))}
            </ChartDiv>
        );
    }

    return (
        <>
            {/* <Bar data={data} options={options} /> */}
            <Chart />
        </>
    );
}

const ChartDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const ChartStack = styled.div`
    width: 20%;
    height: 340px;
    display: flex;
    flex-direction: column-reverse;
    background: linear-gradient(rgba(250, 128, 114, 0.1) 50%, transparent 0);
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
    height: ${(props) => `${Number(props.height) * 40}px`};
    width: 70%;
    background-color: rgba(250, 128, 114, 0.2);
    margin: 0 auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid rgba(250, 128, 114, 0.8);
    border-bottom: 0;
    animation: ${ChangeHeight} 0.4s ease-in-out;
`;

const StackName = styled.div`
    font-size: 2vw;
    border-top: 1px solid rgba(250, 128, 114, 0.8);
    text-align: center;
    height: 19px;
    margin: 0;
    color: salmon;
`;
