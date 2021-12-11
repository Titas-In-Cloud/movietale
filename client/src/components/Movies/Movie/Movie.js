import React from "react";

import { Card, CardMedia, Typography, Container, Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
        <Container className={classes.container}>
            <Card className={classes.card} raised={true}>
                <CardMedia className={classes.media} image={movie.poster} />
                <div className={classes.heart}>
                    <Button style={{color: "white"}} disableRipple>
                        <FavoriteBorderIcon fontSize="medium"/>
                    </Button>
                </div>
            </Card>
            <div className={classes.description}>
                <Typography variant="h5" style={{ paddingBottom: "10px" }}>{movie.title}</Typography>
                <Typography variant="body1" color="textSecondary" style={{ fontSize: "12px" }}>
                    {movie.genres.join(" | ")} | Age census: {movie.census} | {movie.runningTime} min.
                </Typography>
            </div>
        </Container>
    );
};

export default Movie;
