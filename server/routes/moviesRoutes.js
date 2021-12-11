import express from "express";

import { getMoviesBySearch, getMovie, getMovies, createMovie, updateMovie, deleteMovie } from "../controllers/moviesController.js";

const router = express.Router();

router.get("/search", getMoviesBySearch);
router.get("/:id", getMovie);
router.get("/", getMovies);

router.post("/", createMovie);
router.patch("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
