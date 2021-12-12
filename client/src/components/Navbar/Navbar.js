import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { AppBar, Toolbar, Button, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import { getMoviesBySearch } from "../../actions/moviesActions";

import logo from "../../images/movietale logo boutique.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./navbarStyles";

/**
 * Exports top navigation element.
 *
 * @returns {JSX.Element} top navigation element.
 * @constructor
 */
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    let isAdmin = false;

    // checks if the user is admin, sets isAdmin value to true if yes, otherwise isAdmin value remains false.
    if (user) isAdmin = user.result.role === "admin";

    // commands to log out user.
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        navigate("/");

        setUser(null);
    };

    // searches for movies by the search query and navigates user to search page.
    const searchPost = () => {
        if(search.trim()) {
            dispatch(getMoviesBySearch({ search }));
            navigate(`/search?searchQuery=${search || "none"}`);
            setSearch("");
        }
    };

    // checks the user's JSON Web Token and logs out user if it has expired.
    useEffect(() => {
        const token = user?.token;

        if(token) {
            if(decode(token).exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return(
        <AppBar className={classes.appBar} position="static">
            { !isAdmin ?
                <Link to="/">
                    <img className={classes.logo} src={logo} alt="movietale" />
                </Link>
                :
                <Link to="./repertoire">
                    <img className={classes.logo} src={logo} alt="movietale" />
                </Link>
            }
            <Toolbar className={classes.toolbar}>
                <div className={classes.toolbarBox}>
                    {!isAdmin &&
                        <Button className={classes.toolbarButton} component={Link} to="/">Movies</Button>
                    }
                    {!isAdmin ? (
                        <Button className={classes.toolbarButton} component={Link} to="./repertoire">Repertoire</Button>
                    ) :
                        <Button className={classes.toolbarButton} component={Link} to="./repertoire">Create/Edit Movie</Button>
                    }
                    {user && !isAdmin && (
                        <Button className={classes.toolbarButton} component={Link} to="./favourites">Favourites</Button>
                    )}
                </div>
                {user ? (
                    <div>
                        <Button className={classes.accessButton} variant="contained" color="primary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <div>
                        <Button className={classes.accessButton} component={Link} to="./access" variant="contained" color="primary">Login</Button>
                    </div>
                )}
                {!isAdmin &&
                    <div className={classes.searchBox}>
                        <InputBase value={search} placeholder="Search..." classes={{ root: classes.root, input: classes.input}}
                                   onChange={(e) => setSearch(e.target.value)}
                                   onKeyPress={(key) => key.charCode === 13 && searchPost()}/>
                        <IconButton className={classes.searchButton} onClick={searchPost}><SearchIcon fontSize="inherit" /></IconButton>
                    </div>
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
