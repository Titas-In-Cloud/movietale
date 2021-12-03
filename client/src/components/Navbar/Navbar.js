import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";

import useStyles from "./navbarStyles";
import logo from "../../images/movietale logo boutique.png";

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
        </AppBar>
    );
};

export default Navbar;