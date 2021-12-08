import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    slideshow: {
        overflow: "hidden",
        padding: theme.spacing(2, 0),
    },
    slideshowSlider: {
        whiteSpace: "nowrap",
        transition: "ease 1000ms",
    },
    cinemaPhoto: {
        display: "inline-block",
        height: "inherit",
        width: "100%",
        borderRadius: "20px",
        marginRight: "50%",
    },
}));
