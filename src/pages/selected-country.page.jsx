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
    countryDetail.length !==0 &&
      <div className="h-full bg-LightModeBg dark:bg-DarkModeBg">
        <div className="flex container mx-auto px-2">
          <button
            className="shadow-lg bg-LightModeElement dark:bg-DarkModeElement mr-auto"
            onClick={() => {
                history.push("/")
                emptyCountryName()
            }}
          >
            Back
          </button>
        </div>
        <div className="flex container flex-col-reverse sm:flex-row mx-auto px-2">
          <div className="w-56 h-56">
            <img
              src={countryDetail[0].flag}
              alt="flag"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg mr-auto">{country}</h1>
            <div className="flex flex-col sm:flex-row text-left text-LightModeText dark:text-DarkModeText">
              <div>
                <p>
                  <span>Native Name: </span> {countryDetail[0].nativeName}
                </p>
                <p>
                  <span>Population: </span> {countryDetail[0].population}
                </p>
                <p>
                  <span>Region: </span> {countryDetail[0].region}
                </p>
                <p>
                  <span>Sub Region: </span> {countryDetail[0].subregion}
                </p>
                <p>
                  <span>Capital: </span> {countryDetail[0].capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {countryDetail[0].topLevelDomain[0]}
                </p>
                <p>
                  <span>Currencies: </span>{" "}
                  {countryDetail[0].currencies[0].name}
                </p>
                <p>
                  <span>Languages: </span> 
                  {countryDetail[0].languages[0].name}
                </p>
              </div>
            </div>
            <h1 className="mr-auto">Border Countries:</h1>
            {
                borders.length !== 0 ?
                borders.map((item, index) => (
                    <button key={index}>
                        {item.name}
                    </button>
                ))
                :
                <h4>
                    no border Country
                </h4>
            }
          </div>
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    emptyCountryName: () => dispatch(emptyCountryName())
})

export default connect(null, mapDispatchToProps)(SelectedCountry)