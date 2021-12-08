import { ACCESS } from "../constants/actionTypes";
import * as api from "../api/index";

/**
 * Dispatches login data to the Redux store and sends user to the main page of the website.
 *
 * @param formData login form details.
 * @param navigate useNavigate object which has information on sites that the user been to.
 * @returns {(function(*): Promise<void>)|*} dispatches the login data or returns an error.
 */
export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);

        dispatch({ type: ACCESS, data });

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

/**
 * Dispatches registration data to the Redux store and sends user to the main page of the website.
 *
 * @param formData register form details.
 * @param navigate useNavigate object which has information on sites that the user been to.
 * @returns {(function(*): Promise<void>)|*} dispatches the registration data or returns an error.
 */
export const register = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);

        dispatch({ type: ACCESS, data });

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
