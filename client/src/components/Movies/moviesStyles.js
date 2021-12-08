import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        marginTop: theme.spacing(3),
        display: "flex",
        alignItems: "center",
    },
    circularProgress: {
        position: "relative",
        marginLeft: "50%",
        marginTop: "12ch",
    }
}));
