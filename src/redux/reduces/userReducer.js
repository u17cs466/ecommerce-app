//reducer is function
const INITIAL_STATE = {
    name: "demo",
    age: "23"
};
export const UserReducer = (state = INITIAL_STATE, action) => {

    if (action.type === 'UPDATE_NAME') {
        const newState = { ...state };
        newState.firstName = action.value;
        return newState;
    }

    if (action.type === 'UPDATE_AGE') {
        const newState = { ...state };
        newState.lastName = action.value;
        return newState;
    }
    return state;

}