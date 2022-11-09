import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
const TopBar = () => {
  return (
   <>

<header>
<nav className="navbar navbar-expand-md bg-light">
  <div className="container">
    <Link className="navbar-brand" to='/'>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {/* <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li> */}
         <li className="nav-item mx-4">
          <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
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