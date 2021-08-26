const initialState = {
    name: '',
    gender: '',
    questions: [],
    sample: {},
    answers: {},
    result: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'PROFILE_ACTION': {
            return {
                ...state,
                name: action.name,
                gender: action.gender,
            };
        }
        case 'SAVE_QUESTIONS': {
            return {
                ...state,
                questions: action.payload,
            };
        }
        case 'SAMPLE_INPUT': {
            return {
                ...state,
                sample: { ...state.sample, [action.id]: action.answer },
            };
        }
        case 'ANSWER_INPUTS': {
            return {
                ...state,
                answers: { ...state.answers, [action.id]: action.answer },
            };
        }
        case 'RESULT_INPUT': {
            return {
                ...state,
                result: action.result,
            };
        }
        default:
            return state;
    }
}
