import { combineReducers } from "redux";
import darkModeReducer from "./darkMode/darkMode.reducers";
import regionReducer from "./region/region.reducers"
import searchCountryReducer from "./searchByCountry/searchCountry.reducers";

export default combineReducers({
    darkMode: darkModeReducer ,
    region: regionReducer ,
    searchCountry: searchCountryReducer
})