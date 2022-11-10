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
              className="image-setting w-50 h-30 image-fluid rounded-circle"
              src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
              alt="not found"
            />

            <div className="my-3">
              <h4>Venkata</h4>

              <h5>Cardiology</h5>
            </div>
          </div>
          <div className="sidebar-nav">
            <ul className="nav nav-pill flex-column mb-auto">
              <li className="nav-item p-1">
                <NavLink
                  className="nav-link"
                  to="/doctor/dashboard"
                >
                  <i className='bi bi-house-door-fill m-2'></i> Dasboard
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink
                  className="nav-link"
                
                  to="/doctor/appointmentreq"
                >
                 <i className='bi bi-calendar-check-fill m-2'></i> Appointment Queue
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink
                  className="nav-link "
                 
                  to="/doctor/appointment"
                >
                 <i className='bi bi-list m-2'></i> Appointments
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
