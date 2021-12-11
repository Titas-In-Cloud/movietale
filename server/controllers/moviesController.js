import MovieModel from "../models/movieModel.js";
import mongoose from "mongoose";

/**
 * Returns all movies from the database by search.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<void>} all movies from database by search query.
 */
export const getMoviesBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const movies = await MovieModel.find({ $or: [ { title } ]});

        res.json({ data: movies });
    } catch (error) {
        res.status(404).json({ message: error.message });
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
    } catch (error) {
        res.status(404).json({ message: error.message });
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
    } catch (error) {
        res.status(404).json({ message: error.message });
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
    const { title, description, releaseYear, runningTime, director, census, genres, poster, showTimes} = req.body;

    try {
        const newMovie = await MovieModel.create({
            title: title,
            description: description,
            releaseYear: releaseYear,
            runningTime: runningTime,
            director: director,
            census: census, genres:
            genres, poster: poster,
            showTimes: showTimes
        });

        res.status(201).json(newMovie);
    } catch (error) {
        res.status(404).json({ message: error.message });
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
    const{ _id: _id } = req.body;
    const movie = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No movie with that id");

    const updatedMovie = await MovieModel.findByIdAndUpdate(_id, { ...movie, _id }, { new: true });

    res.json(updatedMovie);
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

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No movie with that id");

    await MovieModel.findByIdAndRemove(id);

    res.json({ message: "Movie deleted successfully" });
}
