import React from "react";
import Chillax from "../images/Chillax.png";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import DarkMode from "./DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/admin") {
    return null;
  }
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Chillax} alt="" style={{ width: "100px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ color: "#e4dbb4" }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item rounded mb-1 mb-md-0 ms-md-2">
              <Link className="nav-link fw-bold" aria-current="page" to="/">
                <span className="px-2">Movies</span>
              </Link>
            </li>
            <li className="nav-item rounded mb-1 mb-md-0 ms-md-2">
              <Link className="nav-link fw-bold" to="/shows">
                <span className="px-2">TV Shows</span>
              </Link>
            </li>
            <li className="nav-item rounded mb-1 mb-md-0 ms-md-2">
              <Link className="nav-link fw-bold" to="/aboutus">
                <span className="px-2">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <Search />
        {/* <DarkMode/> */}
      </div>
    </nav>
  );
};

export default Navbar;
