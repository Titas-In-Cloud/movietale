import React, { useState, useEffect } from "react";
import { Grow, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getFavouriteMovies } from "../../actions/moviesActions";

import Movies from "../Movies/Movies"

/**
 * Exports website's favourite movies page element.
 *
 * @returns {JSX.Element} favourite movies page element.
 * @constructor
 */
const Favourites = () => {
    const setCurrentId = useState(null);
    const dispatch = useDispatch();

    // gets all favourite movies from the Redux store.
    useEffect(() => {
        dispatch(getFavouriteMovies());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                <Movies setCurrentId={setCurrentId} />
            </Container>
        </Grow>
    );
}

export default Favourites;