import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

export const fetchMoviesBySearch = (searchQuery) => API.get(`/movies/search?searchQuery=${searchQuery.search}`);
export const fetchMovie = (id) => API.get(`/movies/${id}`);
export const fetchMovies = () => API.get("/movies");

export const createMovie = (newMovie) => API.post("/movies", newMovie);
export const updateMovie = (id, updatedMovie) => API.patch(`/movies/${id}`, updatedMovie);
export const deleteMovie = (id) => API.delete(`/movies/${id}`);
export const favouriteMovie = (id) => API.patch(`movies/${id}/favouriteMovie`);

export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/register", formData);
