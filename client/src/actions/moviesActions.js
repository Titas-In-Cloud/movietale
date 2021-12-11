import { FETCH_BY_SEARCH, FETCH_MOVIE, FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import { START_LOADING, END_LOADING } from "../constants/actionTypes";
import * as api from "../api/index";

/**
 * Gets all the movies by the search query from the database and dispatches found movies to the Redux store.
 *
 * @param searchQuery query which was passed through the search bar by the user.
 * @returns {(function(*): Promise<void>)|*} dispatches found movies or returns an error.
 */
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

/**
 * Gets a movie by an id from the database and dispatches the result to the Redux store.
 *
 * @param id movie identifier.
 * @returns {(function(*): Promise<void>)|*} dispatches movie by an id or returns an error.
 */
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

/**
 * Gets all the movies from the database and dispatches the results back to the Redux store.
 *
 * @returns {(function(*): Promise<void>)|*} dispatches all the movies or returns an error.
 */
export const getMovies = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchMovies();

        dispatch({ type: FETCH_ALL, payload: { data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

/**
 * Dispatches newly created movie data to the Redux store and sends user to the main page of the website.
 *
 * @param movie data about the movie, structure of MovieModel.
 * @param navigate useNavigate object which has information on sites that the user been to.
 * @returns {(function(*): Promise<void>)|*} dispatches newly created movie data or returns an error.
 */
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

/**
 * Dispatches updated movie data to the Redux store.
 *
 * @param id movie identifier.
 * @param movie data about the movie, structure of MovieModel.
 * @returns {(function(*): Promise<void>)|*} dispatches updated movie data or returns an error.
 */
export const updateMovie = (id, movie) => async (dispatch) => {
    try {
        const { data } = await api.updateMovie(id, movie);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

/**
 * Dispatches deleted movie information to the Redux store.
 *
 * @param id movie identifier.
 * @returns {(function(*): Promise<void>)|*} dispatches deleted movie information or returns an error.
 */
export const deleteMovie = (id) => async (dispatch) => {
    try {
        await api.deleteMovie(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

