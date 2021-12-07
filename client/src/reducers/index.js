import { combineReducers } from "redux";

import movies from "./moviesReducer";
import access from "./accessReducer";

export default combineReducers({ movies, access });
