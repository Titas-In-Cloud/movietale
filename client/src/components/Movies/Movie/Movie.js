import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import {Card, CardMedia, Typography, Container, Button, ButtonBase,
    Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete"

import useStyles from "./movieStyles";

import { deleteMovie, favouriteMovie } from "../../../actions/moviesActions";

/**
 * Exports movie poster element. Movie poster on client side has a photo, title, genres, running time and census,
 * also a button to like the movie and put them to your favourites list when logged in and while on /repertoire,
 * /favourites or /search pages. On admin page the movie poster has the same description but it has buttons
 * to edit or delete movie poster, instead of liking the movie.
 *
 * @param   movie data about the movie.
 * @param   setCurrentId Redux store state element.
 * @returns {JSX.Element} movie poster element.
 * @constructor
 */
const Movie = ({ movie, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const user = JSON.parse(localStorage.getItem("profile"));

    // checks if the movie is liked by the user
    const isFavourite = movie.favourites.find((favourite) => favourite === user?.result?._id);

    // opens the movie delete popup window
    const handleClickOpen = () => {
        setOpen(true);
    };

    // closes the movie delete popup window
    const handleClose = () => {
        setOpen(false);
    };

    const openMovie = () => navigate(`/movies/${movie._id}`);

    return (
        <Container className={classes.container}>
            <ButtonBase component="span" className={classes.cardAction} onClick={openMovie}>
            <Card className={classes.card} raised={true}>
                <CardMedia className={classes.media} image={movie.poster} />
                { (user?.result?.role === "client" && (location.pathname === "/repertoire" || location.pathname === "/favourites" || location.pathname === "/search")) &&
                    <div className={classes.heart}>
                        <Button style={isFavourite ? { color: "#ff352a"} : { color: "white" }} disableRipple
                                onClick={() => dispatch(favouriteMovie(movie._id))}>
                            { isFavourite
                                ? <FavoriteIcon fontSize="medium" style={{ color: "#ff352a" }}/>
                                : <FavoriteBorderIcon fontSize="medium"/>
                            }
                        </Button>
                    </div>
                }
                { (user?.result?.role === "admin" && location.pathname === "/repertoire") &&
                    <div>
                        <div className={classes.delete}>
                            <Button style={{ color: "#f44336" }} onClick={handleClickOpen}>
                                <DeleteIcon fontSize="medium"/>
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Delete Confirmation"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description" style={{ display: "flex", flexDirection: "row" }}>
                                        <span>Are you sure you want to delete&nbsp;</span>
                                        <span style={{ color: "#000000" }}>{movie.title}</span>
                                        <span>&nbsp;poster?</span>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button style={{ backgroundColor: "#9e9e9e", color: "#2f2f2f" }}
                                            onClick={handleClose}>Cancel</Button>
                                    <Button autoFocus style={{ backgroundColor: "#ff352a", color: "#ffffff" }}
                                            onClick={() => {
                                                handleClose();
                                                dispatch(deleteMovie(movie._id));
                                            }}>
                                        Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div className={classes.edit}>
                            <Button style={{color: "white"}} onClick={(e) => {
                                e.stopPropagation();
                                window.scrollTo({ top: 50, behavior: "smooth" });
                                setCurrentId(movie._id)}}>
                                <MoreHorizIcon fontSize="large"/>
                            </Button>
                        </div>
                    </div>
                }
            </Card>
            <div className={classes.description}>
                <Typography variant="h6" style={{ paddingBottom: "10px" }}>{movie.title}</Typography>
                <Typography variant="body1" color="textSecondary" style={{ fontSize: "12px", color: "#a7a7a7" }}>
                    {movie.genres.join(" | ")} | Age census: {movie.census} | {movie.runningTime} min.
                </Typography>
            </div>
            </ButtonBase>
        </Container>
    );
};

export default Movie;
