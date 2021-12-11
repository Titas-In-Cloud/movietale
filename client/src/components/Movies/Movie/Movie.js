import React from "react";
import { useDispatch } from "react-redux";

import { Card, CardMedia, Typography, Container, Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete"

import useStyles from "./movieStyles";

import { deleteMovie, favouriteMovie } from "../../../actions/moviesActions";

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
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"));

    const isFavourite = movie.favourites.find((favourite) => favourite === user?.result?._id);

    return (
        <Container className={classes.container}>
            <Card className={classes.card} raised={true}>
                <CardMedia className={classes.media} image={movie.poster} />
                { user?.result?.role === "client" &&
                    <div className={classes.heart}>
                        <Button style={isFavourite ? { color: "#ff4033"} : {color: "white"}} disableRipple
                                onClick={() => dispatch(favouriteMovie(movie._id))}>
                            { isFavourite
                                ? <FavoriteIcon fontSize="medium" color={"#ff4033"}/>
                                : <FavoriteBorderIcon fontSize="medium"/>
                            }
                        </Button>
                    </div>
                }
                { user?.result?.role === "admin" &&
                <div className={classes.delete}>
                    <Button style={{color: "white"}} onClick={() => dispatch(deleteMovie(movie._id))}>
                        <DeleteIcon fontSize="medium"/>
                    </Button>
                </div>
                }
                { user?.result?.role === "admin" &&
                    <div className={classes.edit}>
                        <Button style={{color: "white"}} onClick={(e) => {
                            e.stopPropagation();
                            window.scrollTo(0, 60);
                            setCurrentId(movie._id)}}>
                            <MoreHorizIcon fontSize="large"/>
                        </Button>
                    </div>
                }
            </Card>
            <div className={classes.description}>
                <Typography variant="h6" style={{ paddingBottom: "10px" }}>{movie.title}</Typography>
                <Typography variant="body1" color="textSecondary" style={{ fontSize: "12px", color: "#a7a7a7" }}>
                    {movie.genres.join(" | ")} | Age census: {movie.census} | {movie.runningTime} min.
                </Typography>
            </div>
        </Container>
    );
};

export default Movie;
