import React, { useState, useEffect } from 'react'
import { AnswerDiv, AnswerSection, QuestionDiv, QuestionSection } from '../components/Styled';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import QuestionItem from '../components/QuestionItem';
import Status from '../components/Status';



export default function Sample() {
    const dispatch = useDispatch();
    useEffect(()=> {
        fetch();
    }, []);
    const fetch = async () => {
        const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca115d14dfa918dd56d9172eb0aac33c&q=6');
        console.log(response.data.RESULT);
        const actionObject = {type: 'SAVE_QUESTIONS', payload: response.data.RESULT};
        dispatch(actionObject);
    }
    return (
        <>
            <Status />
            <QuestionItem />
        </>
    )
}
