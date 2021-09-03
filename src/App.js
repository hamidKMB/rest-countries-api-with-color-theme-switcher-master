import React from "react"
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ToggleDarkMode from "./Redux/darkMode/darkMode.actions"
import './App.css';
import Home from "./pages/home.page";
import SelectedCountry from "./pages/selected-country.page";

function App({ToggleDarkMode, isDark}) {
    React.useEffect(() => {
      isDark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }, [isDark])

  return (
    <div className="App">
      <header className="block shadow-lg bg-white dark:bg-DarkModeElement z-10 relative">
        <div className="flex flex-row-reverse items-center py-5 container mx-auto px-2 text-LightModeText dark:text-DarkModeText">
          <h4
            className="inline-block hover: cursor-pointer font-semibold text-base"
            onClick={ToggleDarkMode}
          >
            {" "}
            <span className="transform rotate-90">🌙 </span>
            Dark Mode
          </h4>
          <h1 className="inline-block mr-auto text-base sm:text-2xl font-extrabold">
            Where in the world?
          </h1>
        </div>
      </header>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/:country" component={SelectedCountry}/>
      </Switch>
    </div>
  );
}


//REDUX
const mapStateToProps = ({darkMode: { isDark }}) => ({
  isDark,
})

const mapDispatchToProps = (dispatch) => ({
  ToggleDarkMode: () => dispatch(ToggleDarkMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
