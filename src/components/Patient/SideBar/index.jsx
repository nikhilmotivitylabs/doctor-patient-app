import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="card shadow my-4 sidebar">
        <div className="card-body">
          <div className="profile text-center">
            <img
              className="image-setting image-fluid rounded-circle"
              src="https://www.york.ac.uk/media/research/2020/covid19/ICU.jpg"
              alt="not found" 
            />

            <div className="my-3">
              <h4>Veera</h4>

              <h5>problem : heart</h5>
            </div>
          </div>
          <div className="sidebar-nav">
            <ul className="nav nav-pill flex-column mb-auto">
              <li className="nav-item p-1">
                <NavLink
                  className="nav-link"
                  to="/patient/dashboard"
                >
                  <i className='bi bi-house-door-fill m-2'></i> Dasboard
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink
                  className="nav-link"
                
                  to="/patient/applyappointment"
                >
                 <i className='bi bi-calendar-check-fill m-2'></i> Book Appointment
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink
                  className="nav-link "
                 
                  to="/patient/viewstatus"
                >
                 <i className='bi bi-list m-2'></i> View Status
                </NavLink>
              </li>
              <li className="nav-item p-1">
                <NavLink className="nav-link"  to="/">
                <i className='bi bi-box-arrow-right m-2'></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
