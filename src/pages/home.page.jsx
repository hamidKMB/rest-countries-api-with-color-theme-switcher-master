import React from "react"
import DropDown from "../components/drop-down/drop-down.component";
import SearchBar from "../components/search-bar/search-bar.component"
import { connect } from "react-redux";

const Home = ({selectedRegion, countryName}) => {
    console.log(selectedRegion + "In HomePage");
    return (
      <div className="bg-LightModeBg dark:bg-DarkModeBg h-screen">
        <div className="container mx-auto px-2 pt-20">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <SearchBar/>
                <DropDown/>
            </div>
        </div>
        <h1>
            {selectedRegion}
        </h1>
        <h1>
            {countryName}
        </h1>
      </div>
    );}

const mapStateToProps = ({region:{selectedRegion}, searchCountry:{countryName}}) => ({
    selectedRegion,
    countryName
})

export default connect(mapStateToProps)(Home)