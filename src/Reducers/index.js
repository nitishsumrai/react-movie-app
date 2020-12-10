import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, CHANGE_LIST_ELEMENT } from '../actions/index';
// Reducers function should allways be a pure function
// pure functions have following properties
// 1.same output for same input
// 2.output should be based on passed arguments only(no var outside from the function should be used)
// 3.functions should not have any side effects

const intialMoviesState = {
    list: [],
    favourites: [],
    show_favourite: false
}


// state is default arg in following function which means is passed then assigned object will be its value
export default function movies(state = intialMoviesState, action) {
    if (action.type === ADD_MOVIES) {
        return {
            ...state,
            list: action.movies
        };
    }

    if (action.type === ADD_TO_FAVOURITE) {
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        };
    }
    if (action.type === REMOVE_FROM_FAVOURITE) {
        return {
            ...state,
            favourites: state.favourites.filter((movie) => { return movie.Title !== action.movie.Title })
        };
    }
    if (action.type === CHANGE_LIST_ELEMENT) {
        return {
            ...state,
            show_favourite: action.showFavourite
        };
    }
    return state;
}
