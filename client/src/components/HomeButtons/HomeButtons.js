import React, { useState, useEffect } from "react";

import { Button, Grid } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";

import useStyles from "./homeButtonsStyles";

/**
 * Exports movie sessions date navigation buttons as an element.
 *
 * @returns {JSX.Element} buttons grid element.
 * @constructor
 */
const HomeButtons = () => {
    const classes = useStyles();

    const newDate = new Date();
    let date = newDate.getDate();
    let day = newDate.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const [activeButton, setActiveButton] = useState(0);

    const hasWindow = typeof window !== "undefined";
    const [windowWidth, setWindowWidth] = useState( hasWindow ? window.innerWidth : null);

    useEffect(() => {
        if(hasWindow) {
            function handleResize() {
                setWindowWidth(hasWindow ? window.innerWidth : null);
            }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [hasWindow])

    return (
        <Grid className={classes.buttonsContainer}>
            <Button className={classes.activeCalendarButton} variant="contained" disableRipple disableElevation
                    style={{ width: "65px" }}><DateRangeIcon style={{ fontSize: "34px", textAlign: "center", paddingTop: "5px" }}/></Button>
            { windowWidth >= 600 ?
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button className={activeButton === 0 ? classes.activeButton : classes.button}
                            variant="contained" disableRipple disableElevation style={{ minWidth: "120px" }}
                            onClick={() => setActiveButton(0)}>Today</Button>
                    <Button className={activeButton === 1 ? classes.activeButton : classes.button}
                            variant="contained" disableRipple disableElevation style={{ minWidth: "150px" }}
                            onClick={() => setActiveButton(1)}>Tomorrow</Button>
                </div>
                :
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button className={activeButton === 0 ? classes.activeCalendarButton : classes.calendarButton}
                            variant="contained" disableRipple disableElevation onClick={() => setActiveButton(0)}>
                        <div>{date}</div>
                        <div className={classes.weekday}>{days[ (day - 1) % 7 ]}</div>
                    </Button>
                    <Button className={activeButton === 1 ? classes.activeCalendarButton : classes.calendarButton}
                            variant="contained" disableRipple disableElevation onClick={() => setActiveButton(1)}>
                        <div>{date + 1}</div>
                        <div className={classes.weekday}>{days[ day % 7 ]}</div>
                    </Button>
                </div>
            }
            <Button className={activeButton === 2 ? classes.activeCalendarButton : classes.calendarButton}
                    variant="contained" disableRipple disableElevation onClick={() => setActiveButton(2)}>
                <div>{date + 2}</div>
                <div className={classes.weekday}>{days[ (day + 1) % 7 ]}</div>
            </Button>
            <Button className={activeButton === 3 ? classes.activeCalendarButton : classes.calendarButton}
                    variant="contained" disableRipple disableElevation onClick={() => setActiveButton(3)}>
                <div>{date + 3}</div>
                <div className={classes.weekday}>{days[ (day + 2) % 7 ]}</div>
            </Button>
            <Button className={activeButton === 4 ? classes.activeCalendarButton : classes.calendarButton}
                    variant="contained" disableRipple disableElevation onClick={() => setActiveButton(4)}>
                <div>{date + 4}</div>
                <div className={classes.weekday}>{days[ (day + 3) % 7 ]}</div>
            </Button>
            <Button className={activeButton === 5 ? classes.activeCalendarButton : classes.calendarButton}
                    variant="contained" disableRipple disableElevation onClick={() => setActiveButton(5)}>
                <div>{date + 5}</div>
                <div className={classes.weekday}>{days[ (day + 4) % 7 ]}</div>
            </Button>
            <Button className={activeButton === 6 ? classes.activeCalendarButton : classes.calendarButton}
                    variant="contained" disableRipple disableElevation onClick={() => setActiveButton(6)}>
                <div>{date + 6}</div>
                <div className={classes.weekday}>{days[ (day + 5) % 7 ]}</div>
            </Button>
            <Button className={activeButton === 7 ? classes.activeCalendarButton : classes.calendarButton}
                    variant="contained" disableRipple disableElevation onClick={() => setActiveButton(7)}>
                <div>{date + 7}</div>
                <div className={classes.weekday}>{days[ (day + 6) % 7 ]}</div>
            </Button>
        </Grid>
    );
}

export default HomeButtons;
