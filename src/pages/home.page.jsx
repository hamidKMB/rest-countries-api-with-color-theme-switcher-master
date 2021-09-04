import React from "react"
import DropDown from "../components/drop-down/drop-down.component";
import SearchBar from "../components/search-bar/search-bar.component"
import { connect } from "react-redux";
import ApiRequest from "../ApiRequest";
import { emptyRegion } from "../Redux/region/region.actions";
import CountryDetailHomePage from "../components/country-detail-home-page/country-detail-home-page.component";


const Home = ({selectedRegion, countryName, emptyRegion}) => {
    
    const [state, setState] =  React.useState([])
    
    React.useEffect(() => {
        if (countryName) {
          ApiRequest(`/name/${countryName}`, "GET")
            .then((res) => setState(res.data))
            .catch((err) => console.log(err));

        } else if (selectedRegion) {
        selectedRegion === "No Region" ?
            emptyRegion()
            :
            ApiRequest(`/region/${selectedRegion}`, "GET")
                .then((res) => setState(res.data))
                .catch((err) => console.log(err));

        } else {
          ApiRequest("/all", "GET")
            .then((res) => setState(res.data))
            .catch((err) => console.log(err));
        }
    },[selectedRegion, countryName, emptyRegion])
    console.log(state);
    return (
      <div className="bg-LightModeBg dark:bg-DarkModeBg h-full min-h-screen">
        <div className="container mx-auto px-2 pt-8 sm:pt-16 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <SearchBar />
            <DropDown />
          </div>
        </div>
        <div className="container mx-auto px-0 lg:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7">
          {
            Array.isArray(state) ?
            state.map((item, index) => (
            <CountryDetailHomePage
              key= {index}
              countryName= {item.name}
              flag = {item.flag}
              population = {item.population}
              capital = {item.capital}
              region = {item.region}
            />
          ))
          :
          <h1 className="text-3xl font-bold absolute w-11/12 mt-36 text-center text-LightModeText dark:text-DarkModeText">
            Not Found Retry
          </h1>
          }
        </div>
      </div>
    )}

const mapStateToProps = ({region:{selectedRegion}, searchCountry:{countryName}}) => ({
    selectedRegion,
    countryName
})

const mapDispatchToProps = (dispatch) => ({
    emptyRegion: () => dispatch(emptyRegion())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)