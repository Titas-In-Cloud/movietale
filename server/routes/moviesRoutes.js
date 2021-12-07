import express from "express";

import { getMoviesBySearch, getMovie, getMovies, createMovie } from "../controllers/moviesController.js";

const router = express.Router();

router.get("/search", getMoviesBySearch);
router.get("/:id", getMovie);
router.get("/", getMovies);

router.post("/", createMovie);

export default router;
