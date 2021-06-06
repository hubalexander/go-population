import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Home.css";

//Navigation links to the main functionalities of the application, country- and city search.
const Home = () => {
  return (
    <div className="searchTools">
      <p>
        <NavLink to="/city">
          <button className="cityButton">SEARCH BY CITY</button>
        </NavLink>
      </p>
      <p>
        <NavLink to="/country">
          <button className="countryButton">SEARCH BY COUNTRY</button>
        </NavLink>
      </p>
    </div>
  );
};

export default Home;
