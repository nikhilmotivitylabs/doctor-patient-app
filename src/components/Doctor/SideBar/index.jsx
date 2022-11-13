import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate()
  let doctor = JSON.parse(localStorage.getItem("doctor"))
  const handleLogout = ()=>{
    localStorage.clear("doctor")
    localStorage.clear(doctor)
    localStorage.removeItem("doctor")
    navigate("/")
  }
  return (
    <>
      <div className="card shadow my-4 sidebar-doc">
        <div className="card-body p-1">
          <div className="profile text-center">
            <img
              className="img-fluid  rounded-circle"
              src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
              alt="not found"
            />

            <div className="my-3">
              <h4>DR. {doctor.firstname} {doctor.lastname}</h4>

              <p className="text-muted">{doctor.department}</p>
            </div>
          </div>
          <div className="sidebar-nav">
            <ul className="nav nav-pill flex-column mb-auto">
              <li className="nav-item p-1">
                <NavLink
                  className="nav-link"
                  to="/doctor/dashboard"
                >
                  <i className='bi bi-house-door-fill m-2'></i> Dashboard
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
                <i onClick={handleLogout} className='bi bi-box-arrow-right m-2'></i> Logout
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
