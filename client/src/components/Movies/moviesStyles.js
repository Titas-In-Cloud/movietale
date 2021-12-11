import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: theme.spacing(0),
    },
    moviesContainer: {
        marginTop: theme.spacing(2),
        display: "flex",
        alignItems: "flex-start",
    },
    circularProgress: {
        position: "relative",
        marginLeft: "50%",
        marginTop: "12ch",
    }
}));
