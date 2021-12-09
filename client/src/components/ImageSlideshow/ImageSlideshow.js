import React, { useState, useEffect } from "react";

import { Container } from "@material-ui/core";

import { CinemaSlides } from "./CinemaSlides";
import useStyles from "./imageSlideshowStyles";

/**
 * Exports home page image slideshow element.
 *
 * @returns {JSX.Element} image slideshow element.
 * @constructor
 */
const ImageSlideshow = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);
    const timeoutRef = React.useRef(null);
    const delay = 7000;

    // resets the timer of the slides. Must be done after each slide to the next slide.
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    // checks the time of current slide and slides forward after 7000 units.
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrent((prevIndex) =>
                    prevIndex === CinemaSlides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [current]);

    return(
        <Container className={classes.slideshow} maxWidth="lg">
            <div className={classes.slideshowDots} >
                {CinemaSlides.map((image, inx) => {
                    return (
                        <div key={inx} className={ current === inx ? classes.slideshowDotActive : classes.slideshowDot }
                             onClick={() => { setCurrent(inx) }}/>
                    )
                })}
            </div>
            <div className={classes.slideshowSlider} style={{ WebkitTransform: `translate3d(${-current * 150}%, 0, 0)` }}>
                {CinemaSlides.map((slide, index) => {
                    return (
                        <div className={classes.cinemaPhoto} key={index}>
                            <img className={classes.cinemaPhoto} src={slide.image} alt="cinema-photo" /> )
                        </div>
                    )
                })}
            </div>
        </Container>
    );
}

export default ImageSlideshow;
