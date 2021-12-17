import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.only("md")] : {
            paddingRight: theme.spacing(4),
            paddingLeft: theme.spacing(4),
        },
        [theme.breakpoints.down("sm")] : {
            paddingRight: theme.spacing(4),
            paddingLeft: theme.spacing(4),
        },
    },
    noMovieContainer: {
        paddingBottom: theme.spacing(53),
    },
    noMovieText: {
        backgroundColor: "#3f51b5",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
        color: "#ffffff",
        fontSize: "18px",
        borderRadius: "25px",
        maxWidth: "100%",
        padding: theme.spacing(2, 4),
        margin: theme.spacing(4),
    },
    detailsContainer: {
        display: "flex",
        width: "90%",
        [theme.breakpoints.down("md")] : {
            flexDirection: "column",
            alignItems: "center",
            paddingTop: theme.spacing(0),
            width: "100%",
        },
    },
    posterSection: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "100%",
        position: "sticky",
        top: 0,
        padding: theme.spacing(2, 12),
        [theme.breakpoints.down("md")]: {
            position: "relative",
            padding: theme.spacing(3),
        },
    },
    poster: {
        maxWidth: "100%",
        maxHeight: "100%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "90%",
            maxHeight: "90%",
        },
    },
    descriptionContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        width: "100%",
        padding: theme.spacing(2, 8, 0, 4),
        [theme.breakpoints.only("lg")]: {
            padding: theme.spacing(2, 0, 0, 0),
            maxWidth: "440px",
        },
        [theme.breakpoints.only("md")]: {
            padding: theme.spacing(4, 0, 0, 0),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4, 0, 0, 0),
            alignItems: "center",
        },
    },
    title: {
        fontSize: "55px",
        fontWeight: "500",
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            fontSize: "8vw",
        },
    },
    descriptionTypes: {
        fontSize: "13px",
        fontWeight: "400",
        color: "#a7a7a7",
        maxWidth: "90%",
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
            paddingBottom: theme.spacing(0),
        },
    },
    description: {
        fontSize: "16px",
        fontWeight: "500",
        color: "#a7a7a7",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            paddingTop: theme.spacing(0),
        },
    },
    strongFont: {
        fontSize: "25px",
        fontWeight: "400",
        color: "#000000",
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            paddingTop: theme.spacing(0),
        },
    },
    circularProgress: {
        position: "relative",
        marginTop: "12ch",
    }
}));
