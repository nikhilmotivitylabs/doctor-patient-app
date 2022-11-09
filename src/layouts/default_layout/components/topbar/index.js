import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
const TopBar = () => {
  return (
   <>

<header>
<nav className="navbar navbar-expand-md bg-light">
  <div className="container">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item dropdown mx-2">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctor
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Register</Link></li>
            <li><Link className="dropdown-item" href="#">List</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Patient
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Register</Link></li>
            <li><Link className="dropdown-item" href="#">Login</Link></li>
            
          </ul>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link active" aria-current="page" href="#">About</Link>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link active" aria-current="page" href="#">FeedBack</Link>
        </li>

        <li className="nav-item mx-4">
          <Link className="nav-link active" aria-current="page" href="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
</header>
            </>
  )
}

export default TopBar