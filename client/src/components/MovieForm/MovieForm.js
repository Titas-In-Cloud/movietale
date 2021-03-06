import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import moment from "moment";

import { Container, TextField, Button, Typography, Paper } from "@material-ui/core";

import { createMovie, updateMovie } from "../../actions/moviesActions";
import useStyles from "./movieFormStyles";

/**
 * Exports form element to create or edit movie posters.
 *
 * @param   currentId Redux store state element.
 * @param   setCurrentId Redux store state element.
 * @returns {JSX.Element} form to create/edit movie posters.
 * @constructor
 */
const MovieForm = ({ currentId, setCurrentId }) => {
    const [movieData, setMovieData] = useState(
        { title: "", description: "", releaseYear: "", runningTime: "", director: "", census: "", genres: [], poster: "", showTimes: [], favourites: "" });
    const [date, setDate] = useState("01/01/2022T12:00");
    const movie = useSelector((state) => (currentId ? state.movies.movies.find((message) => message._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // if movie is selected to be edited, displays data on the edit form.
    useEffect(() => {
        if(movie) setMovieData(movie)
    }, [movie]);

    // adds new show time date to the movie data. Either pushes new date onto existing dates or starts
    // with an array with one initial date.
    const addNewDate = () => {
        if(movieData.showTimes.length !== 0 && movieData.showTimes[0] !== "" && movieData.showTimes[0] !== null){
            setMovieData({ ...movieData, showTimes: [ ...movieData.showTimes, date ] });
        } else {
            setMovieData({ ...movieData, showTimes: [ date ] });
        }
    }

    // handles form submit, if the Redux store state has an id of a movie - updates the current movie poster,
    // otherwise creates a new one.
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updateMovie(currentId, { ...movieData }));
        } else {
            dispatch(createMovie({ ...movieData }, navigate));
        }
        clear();
    }

    // clears the data on the create/edit form.
    const clear = () => {
        setCurrentId(null);
        setMovieData({ title: "", description: "", releaseYear: "", runningTime: "", director: "", census: "", genres: [], poster: "", showTimes: [], favourites: "" });
    }

    return (
        <Container className={classes.mainContainer}>
            <Paper className={classes.paper} elevation={6}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{ currentId ? "Edit Movie Poster" : "Create New Movie Poster" }</Typography>
                    <TextField name="title" variant="outlined" label="Title" fullWidth
                               value={movieData.title} onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}/>
                    <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4}
                               value={movieData.description} onChange={(e) => setMovieData({ ...movieData, description: e.target.value })}/>
                    <TextField name="releaseYear" variant="outlined" label="Release Year" fullWidth
                               value={movieData.releaseYear} onChange={(e) => setMovieData({ ...movieData, releaseYear: e.target.value })}/>
                    <TextField name="runningTime" variant="outlined" label="Running Time" fullWidth
                               value={movieData.runningTime} onChange={(e) => setMovieData({ ...movieData, runningTime: e.target.value })}/>
                    <TextField name="director" variant="outlined" label="Director" fullWidth
                               value={movieData.director} onChange={(e) => setMovieData({ ...movieData, director: e.target.value })}/>
                    <TextField name="census" variant="outlined" label="Census" fullWidth
                               value={movieData.census} onChange={(e) => setMovieData({ ...movieData, census: e.target.value })}/>
                    <TextField name="genres" variant="outlined" label="Genres" fullWidth
                               value={movieData.genres} onChange={(e) => setMovieData({ ...movieData, genres: e.target.value.split(",") })}/>
                    <TextField name="showTimes" variant="outlined" label="Show Times" fullWidth multiline
                               value={movieData.showTimes} onChange={(e) => setMovieData({ ...movieData, showTimes: e.target.value.split(",") })}/>
                    <div className={classes.showTimeContainer}>
                        <TextField id="datetime-local" label="Choose show time" type="datetime-local"
                                   fullWidth InputLabelProps={{ shrink: true }} defaultValue="2022-01-01T12:00"
                                   onChange={(e) => setDate(moment(e.target.value).format("DD/MM/YYYYTHH:mm"))}/>
                        <Button className={classes.showTimeButton} variant="contained" color="secondary" onClick={addNewDate}>Add</Button>
                    </div>
                    <div className={classes.fileInput}><FileBase type="poster" multiple={false} onDone={({ base64 }) => setMovieData({ ...movieData, poster: base64 })} /></div>
                    <Button className={classes.createButton} variant="contained" color="secondary" size="large" type="submit" fullWidth>{currentId ? "Submit" : "Create"}</Button>
                    <Button variant="contained" color="primary" size="small" onClick={clear} fullWidth>Clear Form</Button>
                </form>
            </Paper>
        </Container>
    );
}

export default MovieForm;
