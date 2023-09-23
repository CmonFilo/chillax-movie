import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar_hb navbar-expand rounded m-3 py-3 mx-2 shadow-sm">
      <h2 className="list_name_CL ms-3">Admin</h2>
      <div className="flex-fill"></div>
      <div>
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link me-2" to="*">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                size="xl"
                className="list_name_CL"
              />
            </Link>
          </li>
          <li>
            <Link className="nav-link me-2" to="/">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                size="xl"
                className="list_name_CL"
              />
            </Link>
          </li>
          <li>
            <Link className="nav-link me-2" to="/">
              <FontAwesomeIcon
                icon={faMoon}
                size="xl"
                className="list_name_CL"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
