import styled, {css, keyframes} from 'styled-components';

export const QuestionDiv = styled.div`
    background-color: white;
    max-width: 620px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    border-radius: 15px;
    overflow: auto;
`;

export const QuestionSection = styled.div`
    max-width: 620px;
    min-height: 60px;
    background-color: lightsalmon;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const AnswerDiv = styled.div`
    max-width: 620px;
    min-height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;
export const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;
const fadeOut = keyframes`
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
`;

export const AnswerSection = styled.div`
    width: 300px;
    height: 70px;
    margin: 5px;
    border-radius: 15px;
    overflow: auto;
    
    input[type=radio] {
        display: none;
        align-content:center;
    }

    input[type=radio]+label {
        display: inline-block;
        cursor: pointer;
        width: 300px;
        height: 70px;
        line-height: ${props=> props.gender ? '70px' :'40px' };
        font-weight: bold;
        background-color: white;
        color: salmon;
        border: 3px solid lightsalmon;
        border-radius: 15px;
        box-sizing: border-box;
    }
    input[type=radio]:checked+label {
        background-color: lightsalmon;
        color: white;
        
    }
    div {
        height: 20px;
        font-size: 0.6rem;
        line-height: 20px;
    }
`;

export const StyledInput = styled.input`
        border: 3px solid lightsalmon;
        width: 300px;
        box-sizing: border-box;
        height: 70px;
        border-radius: 15px;
        text-align: center;
        font-size: 1.2rem;
        color: salmon;
        font-weight: bold;
    `;

export const StyledButton = styled.button`
    background-color: lightsalmon;
    width: 300px;
    height: 70px;
    border-radius: 15px;
    border: 0px;
    margin-top: 20px;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 40px;
    cursor: pointer;
`;