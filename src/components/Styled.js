import styled from 'styled-components';

const salmonColor = 'rgba(250, 128, 114, 0.2)'
const deepSalmon = 'rgba(250, 128, 114, 0.8)'

export const QuestionContainer = styled.div`
    background-color: white;
    max-width: 620px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    border-radius: 15px;
    overflow: auto;
    margin-top: 20px;
`;

export const QuestionSection = styled.section`
    max-width: 620px;
    min-height: 30px;
    background-color: ${salmonColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-weight: bold;
`;

export const AnswerSection = styled.section`
    max-width: 620px;
    min-height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    font-weight: bold;
`;

export const AnswerOption = styled.div`
    width: 300px;
    height: 70px;
    margin: 5px;
    border-radius: 15px;
    overflow: auto;
    
    div {
        height: 20px;
        font-size: 0.6rem;
        line-height: 10px;
    }
`;
export const StyledRadioInput = styled.input`
    display: none;
    align-content: center;

    & + label {
        display: inline-block;
        cursor: pointer;
        width: 300px;
        height: 70px;
        line-height: ${(props) => (props.gender ? "70px" : "40px")};
        font-weight: bold;
        background-color: white;
        color: ${deepSalmon};
        border: 3px solid ${salmonColor};
        border-radius: 15px;
        box-sizing: border-box;
        
        &:hover {
            background-color: rgba(250, 128, 114, 0.1);
            transition: all 0.3s ease
        }

        div {
            display: ${props=>props.gender ? 'none':'block'}
        }
    }

    &:checked + label {
        background-color: ${salmonColor};
        transition: all 0.2s ease;
    }
`;


export const StyledInput = styled.input`
        border: 3px solid ${salmonColor};
        width: 300px;
        box-sizing: border-box;
        height: 70px;
        border-radius: 15px;
        text-align: center;
        font-size: 1.2rem;
        color: ${deepSalmon};
        font-weight: bold;
    `;

export const StyledButton = styled.button`
    background-color: ${props => props.status ? salmonColor:'lightgrey'};
    width: ${props => props.sm ? '100px':'300px'};
    height: ${props => props.sm ? '50px':'70px'};
    border-radius: 15px;
    border: 0px;
    margin-top: 20px;
    box-sizing: border-box;
    color: ${props=> props.status? deepSalmon: 'white'};
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: ${props=> props.sm ? '15px':'30px'};
    cursor: ${props => props.status ? 'pointer': 'inherit'};
    transition: all 0.4s ease;
`;

export const Title = styled.h2`
    color: ${deepSalmon};
    font-weight: bold;
    margin-top: 40px;
`;

export const Alert = styled.p`
    color: ${deepSalmon};
    font-size: 0.8rem;
    font-weight: bold;
`;