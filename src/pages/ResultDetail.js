import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Table, { StyledTable } from '../components/Table';

export default function ResultDetail() {
    const { name, gender, resId } = useSelector((state) => ({
        name: state.name,
        gender: state.gender,
        resId: state.result,
    }));
    const resItems = {
        1: '능력발휘',
        2: '자율성',
        3: '보수',
        4: '안정성',
        5: '사회적 인정',
        6: '사회봉사',
        7: '자기계발',
        8: '창의성',
    };

    const [originalRes, setOriginalRes] = useState([]);
    const [top2, setTop2] = useState(['1', '2']);
    const [low2, setLow2] = useState([]);
    const [job, setJob] = useState([]);
    const [major, setMajor] = useState([]);

    useEffect(() => {
        finalResult(resId);
    }, [resId]);

    const finalResult = async (seqId) => {
        const semiResult = await axios.get(
            `https://www.career.go.kr/inspct/api/psycho/report?seq=${seqId}`,
        );
        const score = semiResult.data.result.wonScore
            .slice(0, -1)
            .split(' ')
            .map((item) => item.split('='));
        setOriginalRes(score.slice());
        score.sort((a, b) => b[1] - a[1]);
        const res = score;
        const res1 = res[0][0]
        const res2 = res[1][0]
        setTop2(res1, res2);
        setLow2([res[6][0], res[7][0]]);

        const jobRes = await axios.get(
            `https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=${res1}&no2=${res2}`,
        );
        setJob(jobRes.data);
        const majorRes = await axios.get(
            `https://www.career.go.kr/inspct/api/psycho/value/majors?no1=${res1}&no2=${res2}`,
        );
        setMajor(majorRes.data);

    };
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div>
            <h1>상세결과 페이지</h1>
            <StyledTable>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>성별</td>
                        <td>검사일</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{gender==='100323'?'남':'여'}</td>
                        <td>{dateString}</td>
                    </tr>
                </tbody>
            </StyledTable>
            <div>
                <h2>직업 가치관 결과</h2>
                <div style={{width:'400px', height:'300px',display:'block',margin:'auto'}}>
                    그래프 자리
                </div>
            </div>
            <div>
                {top2.length && (
                    <div>
                        <Table title='학력' res={job} />
                        <Table title='전공' res={major} />
                    </div>
                )}
            </div>
        </div>
    );
}
