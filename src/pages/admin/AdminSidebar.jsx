import React from "react";
import Chillax from "../../images/Chillax.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faAlignLeft, faChartLine, faUsers } from "@fortawesome/free-solid-svg-icons";

const AdminSidebar = () => {
  return (
    <div className="sidebar_CL mt-3 rounded" style={{height: "100vh"}}>
      <img src={Chillax} style={{width: "100px"}} className="rounded mx-auto d-block py-2"/>
      <ul className="admin_list_CL">
        <li className="mt-3 fs-5 disabled">Main Menu</li>
        <li className="mt-3 fw-bold fs-5"><FontAwesomeIcon icon={faMicrosoft}/> Overview</li>
        <li className="mt-3 fw-bold fs-5"><FontAwesomeIcon icon={faChartLine}/> Analytics</li>
        <li className="mt-3 fw-bold fs-5"><FontAwesomeIcon icon={faUsers}/> Customers</li>
        <li className="mt-3 fw-bold fs-5"><FontAwesomeIcon icon={faAlignLeft}/> Reports</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
