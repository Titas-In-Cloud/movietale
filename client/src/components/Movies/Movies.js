import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import Movie from "./Movie/Movie";
import useStyles from "./moviesStyles";

/**
 * Exports all movie posters in a grid as an element.
 *
 * @param   setCurrentId Redux store state element.
 * @returns {JSX.Element|string} grid of movie posters.
 * @constructor
 */
const Movies = ({ setCurrentId }) => {
    const classes = useStyles();
    const { movies, isLoading } = useSelector((state) => state.movies);
    const location = useLocation();

    // checks if there are any movies to be displayed, returns string to client side if not.
    if(!movies.length && !isLoading) {
        return (
            <Container className={classes.noMoviesContainer}>
                { (location.pathname === "/repertoire" || location.pathname === "/search") &&
                    <Typography className={classes.noMoviesText}>
                        No movies available
                    </Typography>
                }
                { location.pathname === "/movies" &&
                    <Typography className={classes.noMoviesText}>
                        No sessions available
                    </Typography>
                }
                { location.pathname === "/favourites" &&
                    <Typography className={classes.noMoviesText}>
                        No favourite movies
                    </Typography>
                }
            </Container>
        );
    }

    return (
        <Container className={classes.mainContainer}>
            {isLoading ? <CircularProgress className={classes.circularProgress}/> : (
                <Grid className={classes.moviesContainer} container alignItems="stretch" spacing={3}>
                    {movies.map((movie) => (
                        <Grid key={movie._id} item xs={6} sm={6} md={4} lg={3} style={{ padding: "8px" }}>
                            <Movie movie={movie} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Movies;
