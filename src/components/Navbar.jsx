import React from "react";
import Chillax from "../images/Chillax.png";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Chillax} alt="" style={{ height: "70px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-lg-2">
              <Link
                className="nav-link fw-bold rounded ps-2 my-1"
                aria-current="page"
                to="/"
              >
                Movies
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link
                className="nav-link fw-bold rounded ps-2 my-1"
                aria-current="page"
                to="/favorites"
              >
                Favorite
              </Link>
            </li>
            <li className="nav-item dropdown ms-lg-2">
              <Link
                className="nav-link dropdown-toggle fw-bold rounded ps-2 my-1"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item fw-bold" to="/downloads">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fw-bold" to="/aboutus">
                    About Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
