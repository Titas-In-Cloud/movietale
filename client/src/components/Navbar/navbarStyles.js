import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        margin: "20px 20px auto auto",
        display: "flex",
        flexDirection: "row",
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
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
    },
    toolbarButton: {
        color: "#000000",
        marginRight: "25px",
        borderRadius: "10px",
        height: "40%",
        fontWeight: "400",
    },
    accessButton: {
        backgroundColor: "#000000",
        borderRadius: "10px",
        height: "65%",
        width: "10%",
        fontWeight: "400",
    },
    searchBox: {
        margin: "0px 20px 0px 0px",
        backgroundColor: "#eeeeee",
        borderRadius: "20px",
        paddingLeft: "15px",
    },
    root: {
        color: "#000000",
    },
    input: {
        transition: theme.transitions.create('width'),
        width: "8ch",
        '&:focus': {
            width: "20ch",
        },
    },
    searchButton: {
        color: "#000000",
        fontSize: "2rem",
    },
}));