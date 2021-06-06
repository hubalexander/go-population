import React from "react";
import "./css/Navigation.css";
import { NavLink } from "react-router-dom";

//Navigation links to the home site.
const Navigation = () => {
  return (
    <div>
      <div className="homeButton">
        <NavLink to="/">
          <button className="citypopButton" title="Home">
            HOME
          </button>
        </NavLink>
      </div>
      <p className="navigationBar">
        <NavLink to="/">
          <button className="citypopButton">CITYPOP</button>
        </NavLink>
      </p>
    </div>
  );
};

export default Navigation;
