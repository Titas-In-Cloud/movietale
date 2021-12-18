import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

/**
 * Exports login and registration form input fields.
 *
 * @param name user name.
 * @param handleChange keeps track of changes on the login/registration form.
 * @param label React form label element.
 * @param half boolean value to check if the input field must be small (6) or big (12).
 * @param autoFocus React form autoFocus parameter.
 * @param type React form type parameter.
 * @param handleShowPassword value which checks if the password should be shown or not.
 * @returns {JSX.Element} input fields of login and registration form.
 * @constructor
 */
const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
    return(
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === "password" ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}/>
        </Grid>
    );
};

export default Input;
