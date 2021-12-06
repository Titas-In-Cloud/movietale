import MovieModel from "../models/movieModel.js";

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
        const movieDetails = await MovieModel.find();

        console.log(movieDetails);

        res.status(200).json(movieDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
