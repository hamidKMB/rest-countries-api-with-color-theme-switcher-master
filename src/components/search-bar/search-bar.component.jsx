import React from "react"
import { connect } from "react-redux"
import searchCountryAction from "../../Redux/searchByCountry/searchCountry.actions"
import {ReactComponent as SearchLogo} from "./searchLogo.svg";

const SearchBar = ({searchCountryAction}) => {
    return (
      <div className="bg-LightModeElement dark:bg-DarkModeElement flex flex-row items-center shadow-lg rounded w-1/3 py-4 px-5">
        <SearchLogo />
        <input
          type="text"
          onKeyUp={searchCountryAction}
          placeholder="Search for a Country ..."
          className="bg-LightModeElement dark:bg-DarkModeElement outline-none ml-5 text-LightModeText dark:text-DarkModeText placeholder-LightModeText dark:placeholder-DarkModeText dark:placeholder-opacity-50 placeholder-opacity-50 font-semibold"
        />
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    searchCountryAction: (event) => dispatch(searchCountryAction(event))
})

export default connect(null, mapDispatchToProps)(SearchBar)