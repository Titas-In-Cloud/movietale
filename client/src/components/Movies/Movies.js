import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Movie from "./Movie/Movie";
import useStyles from "./moviesStyles";

/**
 * Exports all movie posters in a grid as an element.
 *
 * @param setCurrentId Redux store state element.
 * @returns {JSX.Element|string} grid of movie posters.
 * @constructor
 */
const Movies = ({ setCurrentId }) => {
    const { movies, isLoading } = useSelector((state) => state.movies);
    const classes = useStyles();

    // checks if there are any movies to be displayed, returns string to client side if not.
    if(!movies.length && !isLoading) return "No movies";

    return (
        isLoading ? <CircularProgress className={classes.circularProgress} /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie._id} item xs={12} sm={6} md={4} lg={3}>
                        <Movie movie={movie} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Movies;
