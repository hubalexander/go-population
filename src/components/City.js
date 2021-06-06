import React, { useState } from "react";
import "./css/City.css";
import { fetchCity } from "./tools/Fetch.js";
import firstUpper from "./tools/UpperCase.js";
import loading from "./tools/Loading.js";

//Functional compenent. Declaration of various state hook values.
function City() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  //Calls fetch (city) function and sets country geodata to useState (according to the user input).
  const fetchCityPopulation = async () => {
    const result = await fetchCity(value);
    setData(result);
    setClick(true);
  };

  //Renders of the component. City population or error messages are displayed depending on the user input
  return (
    <div>
      {!click ? (
        <div className="citySubmit">
          <form
            onSubmit={(e) => {
              fetchCityPopulation();
              e.preventDefault();
            }}
          >
            <p className="submitTitle">SEARCH BY CITY</p>
            <input
              className="submitField"
              type="text"
              pattern="[A-Za-z\s]{1,}"
              placeholder="Enter a city"
              value={value}
              required
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <input className="submitField" type="submit" value="Search"></input>
          </form>
        </div>
      ) : null}
      {data && data.name && data.name.toLowerCase() !== value.toLowerCase() ? (
        <div className="notValidInput">
          <br />
          <div className="returnButton">
            <div>
              <div className="errorTitle">No matching city</div>
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
      {value && !data ? (
        <div className="notValidInput">
          <br />
          <div className="returnButton">
            <div>
              <div className="errorTitle">No matching city</div>
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
      {data && data.name && data.name.toLowerCase() === value.toLowerCase() ? (
        <div>
          <div className="cityData">
            <div>
              <b>City:</b> {firstUpper(value)}
              <p>
                <b>Population:</b> {data.population}
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

export default City;
