import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import logo from "../../images/movietale logo boutique.png";
import useStyles from "./navbarStyles";

/**
 * Returns top navigation element.
 *
 * @returns {JSX.Element} top navigation element.
 * @constructor
 */
const Navbar = () => {
    const classes = useStyles();

    return(
        <AppBar className={classes.appBar} position="static">
            <Link to="/" className={classes.brandContainer}>
                <img className={classes.logo} src={logo} alt="movietale" />
            </Link>
            <Toolbar className={classes.toolbar}>
                <Button className={classes.toolbarButton} component={Link} to="./movies">Movies</Button>
                <Button className={classes.toolbarButton} component={Link} to="./coming-soon">Coming Soon</Button>
                <div className={classes.searchBox}>
                    <InputBase placeholder="Search..." classes={{ root: classes.root, input: classes.input}}/>
                    <IconButton className={classes.searchButton}><SearchIcon fontSize="inherit" /></IconButton>
                </div>
                <Button className={classes.accessButton} component={Link} to="./access" variant="contained" color="primary">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;