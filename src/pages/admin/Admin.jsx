import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-2">
            <AdminSidebar />
          </div>
          <div className="col-md-10">
            <AdminDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
