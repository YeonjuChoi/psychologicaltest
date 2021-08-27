const setupProfile = (name, gender) => ({
  type: 'PROFILE_ACTION',
  name,
  gender,
});

const setupQuestions = (payload) => ({
  type: 'SAVE_QUESTIONS',
  payload,
});

const saveSample = (id, answer) => ({
  type: 'SAMPLE_INPUT',
  id,
  answer,
});

const saveAnswer = (id, answer) => ({
  type: 'ANSWER_INPUTS',
  id,
  answer,
});

const setResult = (id, result) => ({
  type: 'RESULT_INPUT',
  id,
  result,
});

const actions = {
  setupProfile,
  setupQuestions,
  saveSample,
  saveAnswer,
  setResult,
};

export default actions;
