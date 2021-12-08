import React from "react";

import { Box, Container, Button, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import useStyles from "./footerStyles";

/**
 * Exports footer element.
 *
 * @returns {JSX.Element} footer element.
 * @constructor
 */
const Footer = () => {
    const classes = useStyles();

    return(
        <Box className={classes.mainBox} >
            <Container maxWidth="lg">
                <Box className={classes.regularBox}>
                    <Button className={classes.boxButton}>About Us</Button>
                    <Button className={classes.boxButton}>Rules of Cinema</Button>
                    <Button className={classes.boxButton}>Team</Button>
                </Box>
                <Box className={classes.regularBox}>
                    <Typography className={classes.textSecondary}>
                        2021 - All rights reserved. Write to us: cinema@movietale.com
                    </Typography>
                </Box>
                <Box className={classes.iconBox}>
                    <Button className={classes.iconButton} disableRipple
                            onClick={() => {window.open("https://facebook.com")}}><FacebookIcon fontSize="inherit" /></Button>
                    <Button className={classes.iconButton} disableRipple
                            onClick={() => {window.open("https://instagram.com")}}><InstagramIcon fontSize="inherit" /></Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
