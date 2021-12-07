import { FETCH_BY_SEARCH, FETCH_MOVIE, FETCH_ALL, CREATE } from "../constants/actionTypes";
import { START_LOADING, END_LOADING } from "../constants/actionTypes";

export default (state = { isLoading: true, movies: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_BY_SEARCH:
            return { ...state, movies: action.payload.data };
        case FETCH_MOVIE:
            return { ...state, movie: action.payload.movie };
        case FETCH_ALL:
            return { ...state, movies: action.payload.data,};
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
};
