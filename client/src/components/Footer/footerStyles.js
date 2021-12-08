import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    mainBox: {
        color: "transparent",
        paddingTop: theme.spacing(4),
    },
    regularBox: {
        display: "flex",
        maxWidth: "inherit",
        justifyContent: "center",
        textAlign: "center",
        margin: theme.spacing(4, 0),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            paddingTop: theme.spacing(2),
        },
    },
    iconBox: {
        display: "flex",
        maxWidth: "inherit",
        justifyContent: "center",
        margin: theme.spacing(4, 0),
    },
    boxButton: {
        color: "#000000",
        margin: theme.spacing(1, 3, 1, 3),
        borderRadius: "15px",
        height: "40%",
        fontWeight: "400",
        "&:hover": {
            background: "none",
        },
    },
    iconButton: {
        color: "#000000",
        fontSize: "28px",
        "&:hover": {
            background: "none",
        },
    },
    textSecondary: {
        color: "#b8b8b8",
        fontSize: "11px",
        fontWeight: "500",
    },

}));
