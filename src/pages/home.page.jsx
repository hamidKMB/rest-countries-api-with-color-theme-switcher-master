import React from "react"
import DropDown from "../components/drop-down/drop-down.component";
import SearchBar from "../components/search-bar/search-bar.component"
import { connect } from "react-redux";
import ApiRequest from "../ApiRequest";
import { emptyRegion } from "../Redux/region/region.actions";
import { useHistory } from "react-router";

const Home = ({selectedRegion, countryName, emptyRegion}) => {
    const history = useHistory();
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
                .then((res) => 
                    res.status === "SUCCESS" ?
                        setState(res.data):
                        setState("Not Found")
                        )
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
        <div className="container mx-auto px-2 pt-8 sm:pt-20 mb-5">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <SearchBar />
            <DropDown />
          </div>
        </div>
        <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {
            Array.isArray(state) ?
            state.map((item, index) => (
            <div key={index} className="bg-LightModeElement dark:bg-DarkModeElement rounded-md shadow-xl mx-auto h-64 w-5/6" onClick={() => history.push(`${item.name}`)}>
              <div className="h-1/2">
                <img alt="alt" src={item.flag} className="w-full h-full object-cover rounded-t-md"/>
              </div>
              <div className="h-1/2">
                  {item.name}
              </div>
            </div>
          ))
          :
            <h1>
                NOT FOUND
            </h1>
          }
        </div>
      </div>
    );}

const mapStateToProps = ({region:{selectedRegion}, searchCountry:{countryName}}) => ({
    selectedRegion,
    countryName
})

const mapDispatchToProps = (dispatch) => ({
    emptyRegion: () => dispatch(emptyRegion())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)