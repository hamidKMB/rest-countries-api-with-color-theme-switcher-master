import React from "react"
import DropDown from "../components/drop-down/drop-down.component";
import SearchBar from "../components/search-bar/search-bar.component"
import { connect } from "react-redux";
import ApiRequest from "../ApiRequest";

const Home = ({selectedRegion, countryName}) => {
    const [state, setState] =  React.useState([])
    
    React.useEffect(() => {
        if (selectedRegion) {
            ApiRequest(`/region/${selectedRegion}`, "GET")
              .then((res) => setState(res.data))
              .catch((err) => console.log(err));
        } else if (countryName) {
            ApiRequest(`/name/${countryName}`, "GET")
              .then((res) => setState(res.data))
              .catch((err) => console.log(err));
        }
        ApiRequest("/all", "GET").then(
            (res) => setState(res.data)
        ).catch((err) => console.log(err))
    },[selectedRegion, countryName])

    return (
      <div className="bg-LightModeBg dark:bg-DarkModeBg h-screen">
        <div className="container mx-auto px-2 pt-8 sm:pt-20 mb-5">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <SearchBar />
            <DropDown />
          </div>
        </div>
        <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {state.map((item, index) => (
            <div key={index} className="bg-LightModeElement dark:bg-DarkModeElement rounded shadow-xl h-64">
              <div className="h-1/2">
                <img alt="alt" src={item.flag}/>
              </div>
              <div className="h-1/2">
                  {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );}

const mapStateToProps = ({region:{selectedRegion}, searchCountry:{countryName}}) => ({
    selectedRegion,
    countryName
})

export default connect(mapStateToProps)(Home)