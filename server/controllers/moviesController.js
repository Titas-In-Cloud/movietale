import MovieModel from "../models/movieModel.js";
import mongoose from "mongoose";

import access_logger from "../conf/access_logger.js";
import error_logger from "../conf/error_logger.js";

/**
 * Returns all movies from the database by search query. Movies could be found by either title or genre.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<void>} all movies from database by search query.
 */
export const getMoviesBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const query = new RegExp(searchQuery, "i");

        const movies = await MovieModel.find({$or: [{ title: query }, { genres: { $in: query }}]});

        res.status(200).json({ data: movies });
        access_logger.log("info", "getMoviesBySearch");
    } catch (error) {
        res.status(404).json({ message: error.message });
        error_logger.log(error);
    }
}
/**
 * Returns all favourite movies of the user by his id.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<void>} favourite movies by the user id.
 */
export const getFavouriteMovies = async (req, res) => {
    const favouriteMovies = [];

    try {
        const movies = await MovieModel.find();

        movies.map((movie) => {
            movie.favourites.map((favouriteMovie) => {
                if(favouriteMovie === req.userId) {
                    favouriteMovies.push(movie);
                }
            })
        })

        res.status(200).json({ data: favouriteMovies });
        access_logger.log("info", "getFavouriteMovies");
    } catch (error) {
        res.status(404).json({ message: error.message });
        error_logger.log(error);
    }
}

/**
 * Returns specific movie from database by id.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<void>} specific movie from the database.
 */
export const getMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await MovieModel.findById(id);

        res.status(200).json(movie);
        access_logger.log("info", "getMovie");
    } catch (error) {
        res.status(404).json({ message: error.message });
        error_logger.log(error);
    }
}

/**
 * Returns all movies from the database.
 * Temporary: console logs the movie information on the website.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<void>} all movies from database.
 */
export const getMovies = async (req, res) => {
    try {
        const movies = await MovieModel.find();

        res.status(200).json(movies);
        access_logger.log("info", "getMovies");
    } catch (error) {
        res.status(404).json({ message: error.message });
        error_logger.log(error);
    }
}

/**
 * Creates a new movie object and saves it into the database.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<void>} newly created movie object.
 */
export const createMovie = async (req, res) => {
    const { title, description, releaseYear, runningTime, director, census, genres, poster, showTimes } = req.body;

    try {
        const newMovie = await MovieModel.create({
            title: title,
            description: description,
            releaseYear: releaseYear,
            runningTime: runningTime,
            director: director,
            census: census,
            genres: genres,
            poster: poster,
            showTimes: showTimes
        });

        res.status(201).json(newMovie);
        access_logger.log("info", "createMovie");
    } catch (error) {
        res.status(404).json({ message: error.message });
        error_logger.log(error);
    }
}
/**
 * Updates current movie by id and updates it in the database.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<*>} updated movie object.
 */
export const updateMovie = async (req, res) => {
    const { _id: _id } = req.body;
    const movie = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        error_logger.log("error", `No movie with that id: ${_id}`);
        return res.status(404).json(`No movie with that id: ${_id}`);
    }

    const updatedMovie = await MovieModel.findByIdAndUpdate(_id, { ...movie, _id }, { new: true });

    res.status(200).json(updatedMovie);
    access_logger.log("info", "updateMovie");
}

/**
 * Deletes movie by id and updates the database.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<*>} message that movie was deleted successfully.
 */
export const deleteMovie = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        error_logger.log("error", `No movie with that id: ${id}`);
        return res.status(404).json(`No movie with that id: ${id}`);
    }

    await MovieModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Movie deleted successfully" });
    access_logger.log("info", "deleteMovie");
}

/**
 * Updates movie favourites array to either add or remove current user's id.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<*>} updated movie object.
 */
export const favouriteMovie = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) return res.json({ message: "Unauthenticated" });

    if(!mongoose.Types.ObjectId.isValid(id)) {
        error_logger.log("error", `No movie with that id: ${id}`);
        return res.status(404).json(`No movie with that id: ${id}`);
    }

    const movie = await MovieModel.findById(id);

    const index = movie.favourites.findIndex((id) => id === String(req.userId));

    // checks if the user has liked the movie. If he hasn't, updates the favourites array to include current user id,
    // otherwise removes user's id from the favourites array.
    if(index === -1) {
        movie.favourites.push(req.userId);
    } else {
        movie.favourites = movie.favourites.filter((id) => id !== String(req.userId));
    }

    const updatedMovie = await MovieModel.findByIdAndUpdate(id, movie, { new: true });

    res.status(200).json(updatedMovie);
    access_logger.log("info", "favouriteMovie");
}
