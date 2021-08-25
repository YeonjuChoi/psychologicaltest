const setupProfile = (name, gender) => ({
    type: 'PROFILE_ACTION',
    name,
    gender,
});

const actions = { setupProfile };

export default actions;
