import {
  faAlignLeft,
  faArrowRightFromBracket,
  faBars,
  faChartLine,
  faCircleQuestion,
  faMoon,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";

const AdminNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar navbar_hb navbar-expand rounded m-3 py-3 mx-2 position-sticky">
      <h2 className="list_name_CL ms-3 d-none d-md-block">Admin</h2>
      <button className="offcanvas_CL rounded ms-2 d-md-none" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          style={{ backgroundColor: "#132328", color: "#e4dbb4" }}
          closeButton
        >
          <Offcanvas.Title style={{ fontSize: "30px" }}>Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{ backgroundColor: "#132328", color: "#e4dbb4" }}
        >
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
        </Offcanvas.Body>
      </Offcanvas>
      <div className="header text-center d-md-none">
        <Link to="/admin">
          <img src={logo} style={{ width: "40px" }} className="ms-3 d-block" />
        </Link>
      </div>
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
