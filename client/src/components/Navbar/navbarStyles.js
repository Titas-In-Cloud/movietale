import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        margin: "20px 20px auto auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px 10px 10px 10px",
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    logo: {
        margin: "10px 10px 10px 5px",
        maxWidth: "200px",
    },
    brandContainer: {
        display: "inline-block",
        boxSizing: "border-box",
    },
}));