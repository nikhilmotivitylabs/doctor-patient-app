import React from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
const TopBar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark shadow fixed-top">
        <div className="container">
          <NavLink className="navbar-brand " to="/">
            <img src="https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png" className="" alt="icon"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item mx-2">
          < NavLink className="nav-link "  to='/'>Home</ NavLink>
        </li> */}
              <li className="nav-item mx-4">
                <NavLink
                  className="nav-link text-light"
  
                  to="/doctorlogin"
                >
                  Doctor
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink
                  className="nav-link text-light"
  
                  to='/patientlogin'
                >
                  Patient
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
