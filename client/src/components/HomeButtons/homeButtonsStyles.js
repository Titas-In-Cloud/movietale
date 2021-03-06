import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(1, 3, 6),
        marginTop: theme.spacing(2),
        overflow: "auto",
        [theme.breakpoints.only("xs")]: {
            padding: theme.spacing(0, 0, 2),
        },
    },
    button: {
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: "10px",
        fontWeight: "400",
        fontSize: "17px",
        width: "100%",
        marginLeft: ".5rem",
        marginRight: ".5rem",
        padding: theme.spacing(2, 3),
        textTransform: "none",
        boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        "&:hover": {
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        },
    },
    activeButton: {
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: "10px",
        fontWeight: "400",
        fontSize: "17px",
        width: "100%",
        marginLeft: ".5rem",
        marginRight: ".5rem",
        padding: theme.spacing(2, 3),
        textTransform: "none",
        boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        "&:hover": {
            backgroundColor: "#000000",
            boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        },
    },
    calendarButton: {
        backgroundColor: "#ffffff",
        color: "#000000",
        flexDirection: "column",
        display: "inline-block",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "10px",
        fontWeight: "400",
        fontSize: "15px",
        width: "60%",
        minWidth: "65px",
        height: "65px",
        marginLeft: ".5rem",
        marginRight: ".5rem",
        textTransform: "none",
        boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        "&:hover": {
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        },
    },
    activeCalendarButton: {
        backgroundColor: "#000000",
        color: "#ffffff",
        flexDirection: "column",
        display: "inline-block",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "10px",
        fontWeight: "400",
        fontSize: "15px",
        width: "60%",
        minWidth: "65px",
        height: "65px",
        marginLeft: ".5rem",
        marginRight: ".5rem",
        textTransform: "none",
        boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        "&:hover": {
            backgroundColor: "#000000",
            boxShadow: "0 10px 20px -15px rgba(0,0,0,.2)",
        },
    },
    weekday: {
        color: "#a7a7a7",
        fontSize: "12px",
    },
}));
