import regionTypes from "./region.types";

const INITIAL_STATE = {
    selectedRegion: null,
}

export default function regionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case regionTypes.SELECTED_REGION:
            return(
                {
                    ...state,
                    selectedRegion: action.payload
                }
            )
            
        default:
            return state
    }
}