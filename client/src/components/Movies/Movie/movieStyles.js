import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        height: "14ch",
        paddingTop: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        height: "90%",
        position: "relative",
        margin: theme.spacing(3),
    },
}));
