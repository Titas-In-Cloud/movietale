import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    slideshow: {
        overflow: "hidden",
        padding: theme.spacing(2, 0),
        position: "relative",
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
    slideshowDots: {
        textAlign: "center",
        position: "absolute",
        bottom: "8%",
        width: "100%",
        zIndex: "99",
        [theme.breakpoints.only("xs")]: {
            bottom: "15%",
        },
    },
    slideshowDot: {
        backgroundColor: "#dedede",
        display: "inline-block",
        height: "1.5vh",
        width: "1.5vh",
        borderRadius: "50%",

        cursor: "pointer",
        margin: theme.spacing(2, 3, "auto", "auto"),
    },
    slideshowDotActive: {
        backgroundColor: "#f8f8fa",
        display: "inline-block",
        height: "1.5vh",
        width: "1.5vh",
        borderRadius: "50%",

        cursor: "pointer",
        margin: theme.spacing(2, 3, "auto", "auto"),
    },
}));
