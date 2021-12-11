import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.only("xs")] : {
            padding: "0",
        },
    },
    card: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },
    media: {
        height: "14ch",
        paddingTop: "100%",
    },
    heart: {
        position: "absolute",
        top: "20px",
        right: "5px",
        color: "white",
    },
    description: {
        padding: theme.spacing(3, 3, 5),
        [theme.breakpoints.only("xs")] : {
            padding: theme.spacing(1, 1, 3),
        },
    },
}));
