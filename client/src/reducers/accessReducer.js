import { ACCESS, LOGOUT } from "../constants/actionTypes";

export default (state = { accessData: null }, action) => {
    switch (action.type) {
        case ACCESS:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, accessData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, accessData: null };
        default:
            return state;
    }
};
