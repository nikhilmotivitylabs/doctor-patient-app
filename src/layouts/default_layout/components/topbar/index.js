import React from 'react'
import './Topbar.css'
const TopBar = () => {
  return (
   <>
<header>
<nav className="navbar navbar-expand-md bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown mx-4">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctor
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Doctor Register</a></li>
            <li><a className="dropdown-item" href="#">Doctor List</a></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown mx-4">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Patient
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Patient Register</a></li>
            <li><a className="dropdown-item" href="#">Patient Logining</a></li>
            
          </ul>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="#">FeedBack</a>
        </li>

        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        {/* <li className="nav-item dropdown mx-4">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>  
</header>
            </>
  )
}

export default TopBar