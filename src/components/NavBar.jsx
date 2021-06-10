import React from "react";

// FONTAWESOME IMPORTS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "grey" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="_">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="_">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="_">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="_">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="_">
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
