import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    containerLogin: {
        paddingBottom: theme.spacing(18),
    },
    paper: {
        marginTop: theme.spacing(9),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        padding: theme.spacing(2),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    accessButton: {
        backgroundColor: "#000000",
        margin: theme.spacing(3, 0, 2),
        borderRadius: "20px",
    },
    boxButton: {
        borderRadius: "20px",
    },
}));
