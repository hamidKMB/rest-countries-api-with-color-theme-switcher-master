import searchCountryTypes from "./searchCountry.types";


const searchCountryAction = (event) => ({
    type: searchCountryTypes.ENTER_COUNTRY_NAME,
    payload: event.target.value
})

export default searchCountryAction