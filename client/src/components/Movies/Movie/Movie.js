import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./movieStyles";

/**
 * Exports movie poster element.
 *
 * @param movie data about the movie.
 * @param setCurrentId Redux store state element.
 * @returns {JSX.Element} movie poster element.
 * @constructor
 */
const Movie = ({ movie, setCurrentId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={movie.poster} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{movie.description}</Typography>
            </CardContent>
        </Card>
    );
};

export default Movie;
