import React from "react"
import { useHistory, useParams } from "react-router"
import ApiRequest from "../ApiRequest"
import { emptyCountryName } from "../Redux/searchByCountry/searchCountry.actions";
import { connect } from "react-redux";

const SelectedCountry = ({emptyCountryName}) => {
    const {country} = useParams()
    const history = useHistory()
    const [countryDetail, setCountryDetail] = React.useState([])
    const [borders, setBorders] = React.useState([]); 

    const neighborFunction = (bordersCode) => {
        const bordersUrl = "/alpha?codes="
        const newUrl = bordersUrl.concat(bordersCode.map((item) => item));
        const finalUrl = newUrl.replaceAll(",",";")
        ApiRequest(finalUrl, "GET")
                .then((res) =>setBorders(res.data))
                .catch((err) => console.log(err) )
    }
    React.useEffect(() => {
        countryDetail.length === 0 &&
            ApiRequest(`/name/${country}?fullText=true`, "GET")
            .then((res) => setCountryDetail(res.data))
            .catch((err) => console.log(err))
            countryDetail.length > 0 &&
            countryDetail[0].borders.length > 0 &&
            neighborFunction(countryDetail[0].borders);
    },[country, countryDetail])
    
    return (
      countryDetail.length !== 0 && (
        <div className="h-full min-h-screen bg-LightModeBg dark:bg-DarkModeBg">
          <div className="flex container mx-auto px-2">
            <button
              className="py-2 px-3 rounded mr-auto my-10 shadow-lg bg-LightModeElement dark:bg-DarkModeElement mr-auto text-LightModeText dark:text-DarkModeText"
              onClick={() => {
                history.push("/");
                emptyCountryName();
              }}
            >
              <i className="fa fa-chevron-left mr-5 text-sm"></i>
              Back
            </button>
          </div>
          <div className="flex container flex-col sm:flex-row mx-auto px-2">
            <div className="w-full h-56 md:w-96 md:h-80 sm: mr-10 xl:mr-auto">
              <img
                src={countryDetail[0].flag}
                alt="flag"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:mx-auto">
              <h1 className="my-5 text-xl font-bold mr-auto text-LightModeText dark:text-DarkModeText">
                {country}
              </h1>
              <div className="flex flex-col sm:flex-row text-left text-LightModeText dark:text-DarkModeText sm:items-baseline">
                <div className="sm:mr-10 sm:mb-7">
                  <p>
                    <span className="font-semibold mr-2">Native Name: </span>{" "}
                    {countryDetail[0].nativeName}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Population: </span>{" "}
                    {countryDetail[0].population}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Region: </span>{" "}
                    {countryDetail[0].region}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Sub Region: </span>{" "}
                    {countryDetail[0].subregion}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Capital: </span>{" "}
                    {countryDetail[0].capital}
                  </p>
                </div>
                <div className="my-6">
                  <p>
                    <span className="font-semibold mr-2">
                      Top Level Domain:{" "}
                    </span>
                    {countryDetail[0].topLevelDomain[0]}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Currencies: </span>{" "}
                    {countryDetail[0].currencies[0].name}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Languages: </span>
                    {countryDetail[0].languages[0].name}
                  </p>
                </div>
              </div>
              <h1 className="mt-1 font-semibold text-lg mr-auto text-LightModeText dark:text-DarkModeText">
                Border Countries:
              </h1>
              <div className="flex flex-row flex-wrap mx-auto">
                {borders.length !== 0 ? (
                  borders.map((item, index) => (
                    <button
                      key={index}
                      className="bg-LightModeElement dark:bg-DarkModeElement rounded text-LightModeText dark:text-DarkModeText p-1 mr-auto sm:mr-4 mb-2"
                    >
                      {item.name}
                    </button>
                  ))
                ) : (
                  <h4 className="text-LightModeText dark:text-DarkModeText">
                    no border Country
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    );
}

const mapDispatchToProps = dispatch => ({
    emptyCountryName: () => dispatch(emptyCountryName())
})

export default connect(null, mapDispatchToProps)(SelectedCountry)