import React from "react";
import Chillax from "../../images/Chillax.png";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faAlignLeft,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="col-md-2 sidebar_CL position-fixed rounded d-none d-md-block"
      style={{ height: "100%" }}
    >
      <nav className="d-none d-md-block">
        <div className="header my-3">
          <Link to="/admin">
            <img
              src={Chillax}
              style={{ width: "100px" }}
              className="mx-auto d-block"
            />
          </Link>
        </div>
        <ul className="admin_list_CL d-block list-unstyled text-decoration-none p-3">
          <li className="list-item list-item_CL py-2">
            <Link
              to="#dashboard"
              className="text-decoration-none d-md-flex d-lg-block justify-content-center"
            >
              <FontAwesomeIcon
                icon={faMicrosoft}
                className="list_name_CL me-2"
              />
              <span className="list_name_CL d-md-none d-lg-inline">
                Overview
              </span>
            </Link>
          </li>
          <li className="list-item list-item_CL py-2">
            <Link
              to="#sales"
              className="text-decoration-none d-md-flex d-lg-block justify-content-center"
            >
              <FontAwesomeIcon
                icon={faChartLine}
                className="list_name_CL me-2"
              />
              <span className="list_name_CL d-md-none d-lg-inline">
                Analytics
              </span>
            </Link>
          </li>
          <li className="list-item list-item_CL py-2">
            <Link
              to="#promotions"
              className="text-decoration-none d-md-flex d-lg-block justify-content-center"
            >
              <FontAwesomeIcon icon={faUsers} className="list_name_CL me-2" />
              <span className="list_name_CL d-md-none d-lg-inline">
                Customers
              </span>
            </Link>
          </li>
          <li className="list-item list-item_CL py-2">
            <Link
              to="#rewards"
              className="text-decoration-none d-md-flex d-lg-block justify-content-center"
            >
              <FontAwesomeIcon
                icon={faAlignLeft}
                className="list_name_CL me-2"
              />
              <span className="list_name_CL d-md-none d-lg-inline">
                Reports
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
