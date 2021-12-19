import express from "express";

import { getMoviesBySearch, getFavouriteMovies, getMovie, getMovies,
    createMovie, updateMovie, deleteMovie, favouriteMovie } from "../controllers/moviesController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getMoviesBySearch);
router.get("/favourites", auth, getFavouriteMovies);
router.get("/:id", getMovie);
router.get("/", getMovies);

router.post("/", auth, createMovie);
router.patch("/:id", auth, updateMovie);
router.delete("/:id", auth, deleteMovie);
router.patch("/:id/favouriteMovie", auth, favouriteMovie);

export default router;
