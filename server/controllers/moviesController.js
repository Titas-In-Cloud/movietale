import MovieModel from "../models/movieModel.js";

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
    const { title, description, director, census, genres, poster, showTimes} = req.body;

    try {
        const newMovie = await MovieModel.create({
            title: title,
            description: description,
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
