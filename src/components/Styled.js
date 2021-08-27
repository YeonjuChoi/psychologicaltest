import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

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
    background-color: ${colors.salmonColor};
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
        font-size: 0.5rem;
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
        line-height: ${(props) => (props.gender ? '70px' : '40px')};
        font-weight: bold;
        background-color: white;
        color: ${colors.deepSalmon};
        border: 3px solid ${colors.salmonColor};
        border-radius: 15px;
        box-sizing: border-box;

        &:hover {
            background-color: ${colors.lightSalmon};
            transition: all 0.3s ease;
        }

        div {
            display: ${(props) => (props.gender ? 'none' : 'block')};
        }
    }

    &:checked + label {
        background-color: ${colors.salmonColor};
        transition: all 0.2s ease;
    }
`;

export const StyledInput = styled.input`
    border: 3px solid ${colors.salmonColor};
    width: 300px;
    box-sizing: border-box;
    height: 70px;
    border-radius: 15px;
    text-align: center;
    color: ${colors.deepSalmon};
    ${fonts.fontLarge};
`;

export const StyledButton = styled.button`
    background-color: ${(props) =>
        props.status ? colors.salmonColor : 'lightgrey'};
    width: ${(props) => (props.sm ? '100px' : '300px')};
    height: ${(props) => (props.sm ? '50px' : '70px')};
    border-radius: 15px;
    border: 0px;
    margin-top: 20px;
    box-sizing: border-box;
    color: ${(props) => (props.status ? colors.deepSalmon : 'white')};
    ${fonts.fontLarge}
    margin-top: ${(props) => (props.sm ? '15px' : '30px')};
    cursor: ${(props) => (props.status ? 'pointer' : 'inherit')};
    transition: all 0.4s ease;
    font-family: 'Cafe24SsurroundAir';
`;

export const Title = styled.h2`
    color: ${colors.deepSalmon};
    font-weight: bold;
    margin-top: 40px;
`;

export const Alert = styled.p`
    color: ${colors.deepSalmon};
    ${fonts.fontSmallBold}
`;
