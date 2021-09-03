import { combineReducers } from "redux";
import darkModeReducer from "./darkMode/darkMode.reducers";
export default combineReducers({
    darkMode: darkModeReducer ,
})