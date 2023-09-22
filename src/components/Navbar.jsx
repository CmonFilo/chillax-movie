import React from "react";
import Chillax from "../images/Chillax.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Chillax} alt="" style={{ width: "100px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item rounded me-2">
              <Link className="nav-link fw-bold" aria-current="page" to="/">
                Movies
              </Link>
            </li>
            <li className="nav-item rounded me-2">
              <Link className="nav-link fw-bold" to="/shows">
                TV Shows
              </Link>
            </li>
            <li className="nav-item rounded me-2">
              <Link className="nav-link fw-bold" to="/favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item rounded me-2">
              <Link className="nav-link fw-bold" to="/aboutus">
                About Us
              </Link>
            </li>
          </ul>
        </div>
          <Search/>
          {/* <DarkMode/> */}
      </div>
    </nav>
  );
};

export default Navbar;
