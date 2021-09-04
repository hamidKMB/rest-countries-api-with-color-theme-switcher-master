import searchCountryTypes from "./searchCountry.types";

const INITIAL_STATE = {
    countryName: null,
}

const searchCountryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case searchCountryTypes.ENTER_COUNTRY_NAME:
            return(
                {
                    ...state,
                    countryName: action.payload
                }
            )
        case searchCountryTypes.EMPTY_COUNTRY_NAME:
            return(
                {
                    countryName: null
                }
            )
        default:
            return state
    }
}

export default searchCountryReducer