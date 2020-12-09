// Reducers function should allways be a pure function
// pure functions have following properties
// 1.same output for same input
// 2.output should be based on passed arguments only(no var outside from the function should be used)
// 3.functions should not have any side effects

export default function movies(state = [], action) {
    if (action.type === 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}