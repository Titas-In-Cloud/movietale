import { ACCESS, LOGOUT, ACCESS_ERROR, RESET_ERROR } from "../constants/actionTypes";

const accessReducer = (state = { accessData: null }, action) => {
    switch (action.type) {
        case ACCESS:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, accessData: action?.data, error: null };
        case LOGOUT:
            localStorage.clear();
            return { ...state, accessData: null, error: null };
        case ACCESS_ERROR:
            return { ...state, error: action.error };
        case RESET_ERROR:
            return { ...state, error: null }
        default:
            return state;
    }
};

export default accessReducer;
