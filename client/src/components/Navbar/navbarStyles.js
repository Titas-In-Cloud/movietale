import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        margin: "20px 20px auto auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 10px 10px 10px",
        backgroundColor: "transparent",
        alignItems: "center",
        boxShadow: "none",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        },
    },
    logo: {
        margin: theme.spacing(1),
        maxWidth: "200px",
    },
    brandContainer: {
        display: "inline-block",
        boxSizing: "border-box",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            paddingTop: theme.spacing(2),
        },
    },
    toolbarBox: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
        },
        paddingRight: theme.spacing(2),
    },
    toolbarButton: {
        color: "#000000",
        margin: theme.spacing(1, 2, 1, 2),
        borderRadius: "10px",
        height: "40%",
        fontWeight: "400",
    },
    accessButton: {
        backgroundColor: "#000000",
        margin: theme.spacing(1, 0, 1, 0),
        borderRadius: "20px",
        height: "7ch",
        width: "12ch",
        fontWeight: "400",
    },
    searchBox: {
        margin: theme.spacing(1, 2, 1, 2),
        backgroundColor: "#eeeeee",
        borderRadius: "20px",
        paddingLeft: theme.spacing(2),
    },
    root: {
        color: "#000000",
    },
    input: {
        transition: theme.transitions.create("width"),
        width: "8ch",
        "&:focus": {
            width: "20ch",
        },
    },
    searchButton: {
        color: "#000000",
        fontSize: "2rem",
    },
}));
