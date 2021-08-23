import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from './Styled';

export default function Table( { title, res }) {
    const edu = ['','중졸이하', '고졸', '전문대졸', '대졸', '대학원졸'];
    const majors = ['계열무관', '인문', '사회', '교육', '공학', '자연', '의학', '예체능']
    const titles = ['분류', '직업']

    const [jobRes, setJobRes] = useState([])

    const mainarr = title==='전공'? majors:edu

    const getRes = () =>{
        const newarr = title==='전공'? [[],[],[],[],[],[],[],[]]: [[],[],[],[],[],[]];
        for (let i=0; i<res.length; i++) {
            const item = res[i];
            newarr[item[2]].push(item[1])
            // if (title==='전공') newarr[0].push(item[1]) //커리어넷상 결과는 이렇게 되어 있는데..
        }
        if (title==='전공') newarr[0].sort((a,b)=>a > b? 1:-1)
        setJobRes(newarr)
    }

    useEffect(()=> {
        getRes();
    },[res])

    return (
        <>
            <Title>
                종사자 평균 {title}별
            </Title>
            <StyledTable key={`${title}-table`}>
                <thead key={`thead-${title}`}>
                    <tr>
                    {titles.map((item) => (
                        <td key={`table-data-${item}`} className='types'>
                            {item}
                        </td>))}
                    </tr>
                </thead>
                <tbody key={`tbody-${title}`}>                
                    {jobRes !== [] && jobRes.map((jobItem, index)=>(
                        jobItem.length !== 0 && <tr>
                            <td key={`type-${jobItem}`} className='types'>
                                {mainarr[index]}
                            </td>
                            <td key={`${mainarr[index]}-${jobItem}`}>
                                {jobItem.map((a,i) => <JobItems key={jobItem[i]}>{a} </JobItems>)}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </StyledTable>
        </>
    )
}

// styled-components

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: seperate;
    border-spacing: ${props => props.simple ? '8px 10px' : '10px 15px'} ;

    thead {
        font-weight: bold;
        border-bottom: solid 2px salmon;
    }

    tr {
        margin: 15px;
    }

    td {
        padding: 15px;
        border-radius: 15px;
        background-color: rgba(250,128,114,0.1);


        &.types {
        background-color: rgba(250,128,114,0.2);
        border: 2px solid rgba(250, 128, 144, 0.6);
    }
}`

const JobItems = styled.span`
    padding: 2px;
`;








