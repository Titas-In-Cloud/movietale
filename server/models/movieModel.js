import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,
    description: String,
    releaseYear: Number,
    runningTime: Number,
    director: String,
    census: String,
    genres: [String],
    poster: String,
    showTimes: [Date],
});

const MovieModel = mongoose.model("MovieModel", movieSchema);

export default MovieModel;
