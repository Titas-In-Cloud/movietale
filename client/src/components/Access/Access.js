import React, { useState } from "react";
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { register, login } from "../../actions/accessActions";

import Input from "./Input";
import useStyles from "./accessStyles";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

/**
 * Exports login and registration form element.
 *
 * @returns {JSX.Element} login and registration form element.
 * @constructor
 */
const Access = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistration, setIsRegistration] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // either shows or doesn't show password on the login/registration forms.
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    // dispatches either registration or login details.
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isRegistration) {
            dispatch(register(formData, navigate));
        } else {
            dispatch(login(formData, navigate));
        }
    };

    // keeps track of changes on the login/registration form.
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    // switches the registration and login forms.
    const switchMode = () => {
        setIsRegistration((prevIsRegistration) => !prevIsRegistration);
        showPassword && handleShowPassword(false);
    };

    return(
        <Container className={ !isRegistration && classes.containerLogin } component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">{isRegistration ? "Register" : "Login"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isRegistration && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange}
                               type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isRegistration && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button className={classes.accessButton} type="submit" fullWidth variant="contained" color="primary">
                        { isRegistration ? "Register" : "Login" }
                    </Button>
                    <Grid container justifyContent="center" >
                        <Grid item>
                            <Button className={classes.boxButton} onClick={switchMode}>
                                { isRegistration ? "Already have an account? Login" : "Don't have an account? Register" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Access;
