import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ResultDetail() {
    const { name, gender, resId } = useSelector(state => ({
        name: state.name,
        gender: state.gender,
        resId: state.result,
    }))
    const resItems = {
        1: '능력발휘',
        2: '자율성',
        3: '보수',
        4: '안정성',
        5: '사회적 인정',
        6: '사회봉사',
        7: '자기계발',
        8: '창의성'
    };

    const [originalRes, setOriginalRes] = useState([]);
    // const [res, setRes] = useState([]);
    const [top2, setTop2] = useState(["1","2"]);
    const [low2, setLow2] = useState([]);
    const [job, setJob] = useState([]);
    const [major, setMajor] = useState([]);

    useEffect(()=>{
        finalResult(resId);
    },[]);
    useEffect(()=> {
        jobAndMajor(top2);
    }, [top2])


    const finalResult = async (resId) => {
        const semiResult = await axios.get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${resId}`);
        const score = semiResult.data.result.wonScore.slice(0,-1).split(' ').map((item)=>item.split('='));
        setOriginalRes(score.slice());
        score.sort(function(a,b){
            return b[1] - a[1]
        })
        const res = score;
        setTop2([res[0][0], res[1][0]]);
        setLow2([res[6][0], res[7][0]])
    }


    const jobAndMajor = async (top2) => {
        console.log(top2)
        const jobRes = await axios.get(`https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=${top2[0]}&no2=${top2[1]}`);
        setJob(jobRes.data);
        const majorRes = await axios.get(`https://www.career.go.kr/inspct/api/psycho/value/majors?no1=${top2[0]}&no2=${top2[1]}`);
        setMajor(majorRes.data);
        console.log(job);
        console.log(major)
    }

    // https://www.career.go.kr/inspct/api/psycho/report?seq=NTQ5NjUxODI 결과 뭐 나왔는지 알 수 있음
    // https://www.career.go.kr/inspct/api/psycho/value/jobs?no1=5&no2=4
    // https://www.career.go.kr/inspct/api/psycho/value/majors?no1=5&no2=4
    return (
        <div>
            <h2>상세결과 페이지</h2>
            <div>
                {top2.length && 
                    <div>
                        {resItems[top2[0]]}, {resItems[top2[1]]}
                    </div>}
            </div>

        </div>
    )
}
