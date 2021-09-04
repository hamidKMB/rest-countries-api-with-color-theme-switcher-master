import React from "react"
import regionAction from "../../Redux/region/region.actions";
import { connect } from "react-redux";

const DropDown = ({regionAction, selectedRegion}) => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "No Region"];
    const [dropDown, setDropDown] = React.useState(false);
    return (
      <div
        className="relative bg-LightModeElement dark:bg-DarkModeElement shadow-lg w-56 py-3 px-5 rounded cursor-pointer mr-auto sm:m-0"
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
      >
        <span className="flex flex-row justify-between text-LightModeText dark:text-DarkModeText font-semibold">
          {!selectedRegion ? "Filter by Region" : selectedRegion}
          <i
            className={`fa fa-angle-down transform ${dropDown && "rotate-180"}`}
            style={{ fontSize: "24px" }}
          ></i>
        </span>
        {dropDown && (
          <div className="absolute bg-LightModeElement dark:bg-DarkModeElement text-LightModeText dark:text-DarkModeText font-semibold shadow-lg w-56 flex flex-col py-4 px-5 rounded left-0 top-15 mt-5 transition-all duration-700">
            {regions.map((item, index) => (
              <input
                key={index}
                type="submit"
                value={item}
                className="text-left bg-LightModeElement dark:bg-DarkModeElement mb-2 cursor-pointer"
                onClick={regionAction}
              />
            ))}
          </div>
        )}
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    regionAction: (event) => dispatch(regionAction(event))
})

const mapStateToProps = ({region: {selectedRegion}, }) => ({
  selectedRegion,
})

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)