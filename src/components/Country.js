import React, { useState } from "react";
import "./css/Country.css";

import { fetchCity, fetchCities } from "./tools/Fetch.js";
import topThreePopulation from "./tools/TopThree";
import loading from "./tools/Loading.js";

//Declaration of various state hook values.
function Country() {
  const [value, setValue] = useState("");
  const [cityPopulation, setCityPopulation] = useState("");
  const [cityName, setCityName] = useState("");
  const [threeCities, setThreeCities] = useState("");
  const [clickCountry, setClickCountry] = useState(false);
  const [clickCity, setClickCity] = useState(false);
  const [error, setError] = useState(false);

  //Calls fetch (country) function and sets country geodata to useState (according to the user input).
  const fetchCountryData = async () => {
    const result = await fetchCities(value);
    try {
      setThreeCities(topThreePopulation(result));
      setClickCountry(true);
    } catch (error) {
      setError(true);
    }
  };

  //Calls fetch (city) function and sets country geodata to useState (according to the user input).
  const fetchCityPopulation = async (city) => {
    const result = await fetchCity(city);
    setCityPopulation(result.population);
    setCityName(city);
  };

  //Renders the site. User input initially returns either a list of three cities or error message, depending on the user input.
  //Clicking on ne of the displayed ciities returns the population number of that city.
  return (
    <div>
      {!clickCountry && !error ? (
        <div className="countrySubmit">
          <form
            onSubmit={(e) => {
              fetchCountryData();
              e.preventDefault();
            }}
          >
            <p className="submitTitle">SEARCH BY COUNTRY</p>
            <input
              className="submitField"
              type="text"
              pattern="[A-Za-z\s]{1,}"
              placeholder="Enter a country"
              value={value}
              required
              onChange={(e) => {
                setValue(e.target.value);
                e.preventDefault();
              }}
            ></input>
            <input className="submitField" type="submit" value="Search"></input>
          </form>
        </div>
      ) : null}
      {threeCities && !value.replace(/\s/g, "").length ? (
        <div className="notValidInput">
          <br />
          <div className="returnButton">
            <div>
              <div className="errorTitle">No matching country</div>
              <div className="invalidButton">
                <button
                  className="buttonStyle"
                  onClick={() => window.location.reload()}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {error ? (
        <div className="notValidInput">
          <br />
          <div className="returnButton">
            <div>
              <div className="errorTitle">No matching country</div>
              <div className="invalidButton">
                <button
                  className="buttonStyle"
                  onClick={() => window.location.reload()}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {!error &&
      value.replace(/\s/g, "").length &&
      clickCountry &&
      !clickCity ? (
        <div>
          <div className="countryList">
            <div>
              <button
                className="countryButtonStyle"
                onClick={() => {
                  fetchCityPopulation(threeCities[0]) && setClickCity(true);
                }}
              >
                {threeCities[0]}
              </button>
              <div>
                <button
                  className="countryButtonStyle"
                  onClick={() => {
                    fetchCityPopulation(threeCities[1]) && setClickCity(true);
                  }}
                >
                  {threeCities[1]}
                </button>
              </div>

              <div>
                <button
                  className="countryButtonStyle"
                  onClick={() => {
                    fetchCityPopulation(threeCities[2]) && setClickCity(true);
                  }}
                >
                  {threeCities[2]}
                </button>
              </div>
              <div>
                <p className="loadingBar" id="loader">
                  Loading...
                </p>
                <div className="listReturnButton">
                  <button
                    className="buttonStyle"
                    onClick={() => window.location.reload()}
                  >
                    Return
                  </button>
                </div>
              </div>
            </div>
            <p className="hideMessage">{setTimeout(loading, 400)}</p>
          </div>
        </div>
      ) : null}
      {clickCity ? (
        <div>
          <div className="cityResult">
            <div>
              <b>City:</b> {cityName}
              <p>
                <b>Population:</b> {cityPopulation}
              </p>
            </div>
            <div className="returnButton">
              <p className="loadingBar" id="loader">
                Loading...
              </p>
              <div className="returnButton">
                <button
                  className="buttonStyle"
                  onClick={() => window.location.reload()}
                >
                  Return
                </button>
              </div>
            </div>
          </div>
          <p className="hideMessage">{setTimeout(loading, 400)}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Country;
