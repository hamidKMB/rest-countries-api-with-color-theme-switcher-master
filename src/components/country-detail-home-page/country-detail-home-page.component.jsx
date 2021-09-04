import React from "react"
import { useHistory } from "react-router";

const CountryDetailHomePage = ({countryName, flag, population, region, capital}) => {
    const history = useHistory();
    return (
      <div
        className="bg-LightModeElement dark:bg-DarkModeElement rounded-md shadow-xl mx-auto h-64 md:h-80 xl:h-64 w-5/6 cursor-pointer"
        onClick={() => history.push(`${countryName}`)}
      >
        <div className="h-1/2">
          <img
            alt="alt"
            src={flag}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="h-1/2 p-5 text-left text-LightModeText dark:text-DarkModeText">
          <h4 className="font-bold mb-2 text-sm">{countryName}</h4>
          <p className="text-sm">
            <span className="font-semibold">Population:</span> {population}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </div>
    );
}

export default CountryDetailHomePage