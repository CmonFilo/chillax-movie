import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import MultiLineChart from "../../components/MultiLineChart";

const AdminDashboard = () => {
  return (
    <div className="col-md-12 ps-3">
      <AdminNavbar />
      <div className="row flex-column flex-md-row m-2" id="dashboard">
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p>
                  Total visitor
                  <i className="fa-solid fa-arrow-down fa-bounce"></i>
                </p>
                <h5>4054</h5>
                <div className="card-footer">
                  <small>-1% than last week</small>
                </div>
              </div>
              <div className="col-2 p-2">
                <i className="fa-solid fa-eye fa-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p className="card-text">
                  Active users <i className="fa-solid fa-arrow-up fa-beat"></i>
                </p>
                <h5>35420</h5>
                <div className="card-footer">
                  <small>+4% than last month</small>
                </div>
              </div>
              <div className="col-2 p-2">
                <i className="fa-solid fa-cart-plus fa-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mt-3">
          <div className="card_CL rounded shadow-sm p-3">
            <div className="row">
              <div className="card-body col-10 px-3">
                <p className="card-text">
                  Average time spent
                  <i className="fa-solid fa-arrow-up fa-beat"></i>
                </p>
                <h5>57603</h5>
                <div className="card-footer">
                  <small>+2% Customer</small>
                </div>
              </div>
              <div className="col-2 p-2">
                <i className="fa-solid fa-users fa-xl"></i>
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
                  <i className="fa-solid fa-arrow-up fa-beat"></i>
                </p>
                <h5>7023</h5>
                <div className="card-footer">
                  <small>+3% than last month</small>
                </div>
              </div>
              <div className="col-2 p-2">
                <i className="fa-solid fa-cart-plus fa-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MultiLineChart/>
    </div>
  );
};

export default AdminDashboard;
