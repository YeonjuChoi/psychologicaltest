import { useDispatch } from 'react-redux';
import actionCreators from '../actions';

export default function useActions() {
  const dispatch = useDispatch();

  const setupProfile = (name, gender) =>
    dispatch(actionCreators.setupProfile(name, gender));

  const setupQuestions = (payload) =>
    dispatch(actionCreators.setupQuestions(payload));

  const saveSample = (id, answer) =>
    dispatch(actionCreators.saveSample(id, answer));

  const saveAnswer = (id, answer) =>
    dispatch(actionCreators.saveAnswer(id, answer));

  const setResult = (id, result) =>
    dispatch(actionCreators.setResult(id, result));

  return {
    setupProfile,
    setupQuestions,
    saveSample,
    saveAnswer,
    setResult,
  };
}
