// actions are not but objects
// each action should have type property 
// {
//     type: 'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const CHANGE_LIST_ELEMENT = "CHANGE_LIST_ELEMENT";
// action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie: movie
    }
}
export function removeFavourite(movie) {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie: movie
    }
}
export function changeListElement(showFavourite) {
    return {
        type: CHANGE_LIST_ELEMENT,
        showFavourite: showFavourite
    }
}