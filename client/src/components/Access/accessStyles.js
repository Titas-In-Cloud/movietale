import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    containerLogin: {
        paddingBottom: theme.spacing(20),
    },
    containerLoginError: {
        paddingBottom: theme.spacing(13),
    },
    containerRegistration: {
        paddingBottom: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        padding: theme.spacing(2),
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    errorMessage: {
        width: "100%",
        margin: theme.spacing(1, 3, 0, 3),
        textAlign: "center",
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
