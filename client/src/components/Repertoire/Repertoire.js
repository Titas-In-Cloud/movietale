import React, { useState, useEffect } from "react";
import { Grow, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getMovies } from "../../actions/moviesActions";

import MovieForm from "../MovieForm/MovieForm";
import Movies from "../Movies/Movies"

/**
 * Exports website's repertoire page element.
 *
 * @returns {JSX.Element} main home page element.
 * @constructor
 */
const Repertoire = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    let isAdmin = false;

    // checks if the user is admin, sets isAdmin value to true if yes, otherwise isAdmin value remains false.
    if (user) isAdmin = user.result.role === "admin";

    // gets all the movies from the Redux store.
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                { isAdmin && <Container maxWidth="sm"> <MovieForm currentId={currentId} setCurrentId={setCurrentId}/> </Container>}
                <Movies setCurrentId={setCurrentId} />
            </Container>
        </Grow>
    );
}

export default Repertoire;