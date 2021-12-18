import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: theme.spacing(3, 0, 7),
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    showTimeContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },
    showTimeButton: {
        backgroundColor: "#000000",
        marginTop: theme.spacing(1),
    },
    fileInput: {
        width: "97%",
        margin: "10px 0",
        fontFamily: "Roboto",
    },
    createButton: {
        backgroundColor: "#000000",
        marginBottom: 10,
    },
}));
