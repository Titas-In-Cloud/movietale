import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,
    description: String,
    releaseYear: String,
    runningTime: String,
    director: String,
    census: String,
    genres: [String],
    poster: String,
    showTimes: {
        type: [String],
        default: [],
    },
    favourites: {
        type: [String],
        default: [],
    },
});

const MovieModel = mongoose.model("MovieModel", movieSchema);

export default MovieModel;
