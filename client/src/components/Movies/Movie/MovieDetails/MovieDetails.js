import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Typography, CircularProgress, Divider, Container } from "@material-ui/core";

import useStyles from "./movieDetailsStyles";

import { getMovie } from "../../../../actions/moviesActions";
import DateButtons from "./DateButtons/DateButtons";

/**
 * Exports movie details page as an element.
 *
 * @returns {JSX.Element} movie details page.
 * @constructor
 */
const MovieDetails = () => {
    const classes = useStyles();
    const { movie, isLoading } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const { id } = useParams();

    // gets movie by id from the database.
    useEffect(() => {
        dispatch(getMovie(id));

        // line to disable missing dependency warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // checks if the movie with the current id exists, returns string to client side if not.
    if(!movie && !isLoading) {
        return (
            <Container className={classes.noMovieContainer}>
                <Typography className={classes.noMovieText}>
                    Movie doesn't exist
                </Typography>
            </Container>
        );
    }

    return (
        <Container className={classes.mainContainer} maxWidth="xl">
            { isLoading ? <CircularProgress className={classes.circularProgress} /> : (
                <div className={classes.detailsContainer}>
                    <div className={classes.posterSection}>
                        <img className={classes.poster} src={movie.poster} alt={movie.title} />
                    </div>
                    <div className={classes.descriptionContainer}>
                        <Typography className={classes.title}>{movie.title}</Typography>
                        <Typography className={classes.descriptionTypes}>
                            Genres: {movie.genres.join(" | ")} | Duration: {movie.runningTime} min. |
                            Age census: {movie.census} | Director: {movie.director} |
                            Release Year: {movie.releaseYear}
                        </Typography>
                        <Divider style={{ margin: "20px 0" }} />
                        <Typography className={classes.description}>{movie.description}</Typography>
                        <Divider style={{ margin: "20px 0" }} />
                        <Typography className={classes.strongFont}>Select Date</Typography>
                        <DateButtons />
                        <Typography className={classes.strongFont}>Sessions</Typography>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default MovieDetails;
