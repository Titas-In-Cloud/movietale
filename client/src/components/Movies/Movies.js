import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Movie from "../Movie/Movie";
import useStyles from "./moviesStyles";

const Movies = ({ setCurrentId }) => {
    const { movies, isLoading } = useSelector((state) => state.movies);
    const classes = useStyles();

    console.log(movies);
    console.log("isLoading: " + isLoading);

    if(!movies.length) {
        return (
            <div>
                No movies
            </div>
        );
    }

    return (
        <Grid item xs={12} sm={6} md={9}>
            !movies.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie._id} item xs={12} sm={12} md={6} lg={3}>
                        <Movie movie={movie} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default Movies;
