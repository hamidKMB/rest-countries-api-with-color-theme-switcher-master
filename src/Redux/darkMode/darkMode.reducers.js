
import darkModeTypes from "./darkMode.types";

const INITIAL_STATE = {
    isDark: false ,
}

export default function darkModeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case darkModeTypes.TOGGLE_DARK_MODE:
            return({
                ...state,
                isDark: !state.isDark
            })
        default:
            return state
    }
}