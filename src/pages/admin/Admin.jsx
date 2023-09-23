import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'

const Admin = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-2">
                <AdminSidebar/>
            </div>
            <div className="col-10">
                <AdminDashboard/>
            </div>
        </div>
    </div>
  )
}

export default Admin