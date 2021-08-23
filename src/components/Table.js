import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from './Styled'

export default function Table( { title, res }) {
    console.log(res)
    const [jobRes, setJobRes] = useState([])
    const mainarr = title==='전공'? majors:edu
    const getRes = () =>{
        const newarr = title==='전공'? [[],[],[],[],[],[],[],[]]: [[],[],[],[],[],[]];
        for (let i=0; i<res.length; i++) {
            const item = res[i];
            newarr[item[2]].push(item[1])
            if (title==='전공') newarr[0].push(item[1])
        }
        if (title==='전공') newarr[0].sort((a,b)=>a > b? 1:-1)
        console.log(newarr)
        setJobRes(newarr)
    }
    useEffect(()=> {
        getRes();
    },[res])
    const titles = ['분류', '직업']

    return (
        <>
            <Title>
                종사자 평균 {title}별
            </Title>
            <StyledTable>
                <thead>
                    <tr>
                    {titles.map((item) => (
                        <td>
                            {item}
                        </td>))}
                    </tr>
                </thead>
                
                {jobRes !== [] && jobRes.map((jobItem, index)=>(
                    <tbody>
                        {jobItem.length !== 0 && <tr>
                            <td>
                                {mainarr[index]}
                            </td>
                            <td>
                                {jobItem.map(a => <JobItems>{a} </JobItems>)}
                            </td>
                        </tr>}
                    </tbody>
                ))}
            </StyledTable>
        </>
    )
}

Table.defaultProps = {
    title: '전공',
}



export const StyledTable = styled.table`
    width: 100%;

    td {
        padding: 10px;
    }

`

const JobItems = styled.span`
    padding: 2px;
`;


const edu = ['','중졸이하', '고졸', '전문대졸', '대졸', '대학원졸'];

const majors = ['계열무관', '인문', '사회', '교육', '공학', '자연', '의학', '예체능']





