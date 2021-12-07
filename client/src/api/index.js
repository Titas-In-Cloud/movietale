import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchMoviesBySearch = (searchQuery) => API.get(`/movies/search?searchQuery=${searchQuery.search}`);
export const fetchMovie = (id) => API.get(`/movies/${id}`);
export const fetchMovies = () => API.get("/movies");

export const createMovie = (newMovie) => API.post("/movies", newMovie);

export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/register", formData);
