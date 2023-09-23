import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import MultiLineChart from "../../components/MultiLineChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCoins,
  faEye,
  faHourglassHalf,
  faUserCheck,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import Popular from "../../components/Popular";

const AdminDashboard = () => {
  return (
    <div className="col-md-12">
      <AdminNavbar />
      <div className="row flex-column flex-md-row m-2" id="dashboard">
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p className="card-text">Total visitor</p>
                <h5>40547</h5>
                <div className="card-footer">
                  <FontAwesomeIcon icon={faArrowUp} beat />
                  <small className="ms-2">+2% than last month</small>
                </div>
              </div>
              <div className="col-2 p-2 position-relative">
                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <FontAwesomeIcon icon={faEye} size="2xl" className="pe-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p className="card-text">Active users</p>
                <h5>26931</h5>
                <div className="card-footer">
                  <FontAwesomeIcon icon={faArrowUp} beat />
                  <small className="ms-2">+3% than last month</small>
                </div>
              </div>
              <div className="col-2 p-2 position-relative">
                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    size="2xl"
                    className="pe-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p className="card-text">Average time spent</p>
                <h5>3 hours per user</h5>
                <div className="card-footer">
                  <FontAwesomeIcon icon={faArrowDown} beat />
                  <small className="ms-2">-1% than last week</small>
                </div>
              </div>
              <div className="col-2 p-2 position-relative">
                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <FontAwesomeIcon
                    icon={faHourglassHalf}
                    size="2xl"
                    className="pe-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p className="card-text">
                  Revenue
                </p>
                <h5>1045978 Ks</h5>
                <div className="card-footer">
                  <FontAwesomeIcon icon={faArrowUp} beat />
                  <small className="ms-2">+3% than last month</small>
                </div>
              </div>
              <div className="col-2 p-2 position-relative">
                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <FontAwesomeIcon
                    icon={faCoins}
                    size="2xl"
                    className="pe-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MultiLineChart />
      <Popular/>
    </div>
  );
};

export default AdminDashboard;
