import { FETCH_BY_SEARCH, FETCH_MOVIE, FETCH_ALL, CREATE } from "../constants/actionTypes";
import { START_LOADING, END_LOADING } from "../constants/actionTypes";
import * as api from "../api/index";

export const getMoviesBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchMoviesBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getMovie = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchMovies(id);

        dispatch({ type: FETCH_MOVIE, payload: { movie: data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getMovies = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchMovies();

        dispatch({ type: FETCH_ALL, data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createMovie = (movie, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createMovie(movie);

        dispatch({ type: CREATE, payload: data });

        navigate("/movies", { replace: true });
    } catch (error) {
        console.log(error);
    }
};
