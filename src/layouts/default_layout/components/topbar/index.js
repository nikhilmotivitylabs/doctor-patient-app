import React from 'react'
import '../topbar/Home.css'
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
<div>

<section>
    <div className="container-fuild">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="w-100" src="https://media.istockphoto.com/photos/doctor-in-hospital-background-with-copy-space-picture-id949812160?k=20&m=949812160&s=170667a&w=0&h=d37eip7n1YrRu2wZxkKndJb_IR6DevLpXbAWBzzWVD8="
     alt="First slide"/>

      <div className="carousel-caption ">
        
      <h1 className="display-1 fw-bolder">Doctor</h1>
        <p className="display-6 fw-bold">the most valuable thing is your health</p>
      </div>
    </div>
    <div className="carousel-item ">

    <img className="d-block w-100" 
    src="https://static.vecteezy.com/system/resources/thumbnails/006/168/689/small/doctor-working-with-patient-taking-notes-with-clipboard-and-discussing-something-in-his-medical-office-health-care-and-people-concept-photo.jpg" 
    alt="Second slide"/>

<div className="carousel-caption ">

<h1 className="display-1 fw-bolder">Patient</h1>
        <p className="display-6 fw-bold">we care About Patient health</p>
  
  </div>
      
    
    </div>
    <div className="carousel-item">
    <img className="w-100" src="https://wallpaperaccess.com/full/4112932.jpg" alt="Third slide"/>
      
      <div className="carousel-caption">
      <h1 className="display-1 fw-bolder ">Hospital</h1>
        <p className="display-6 fw-bold">We are cities No1 Hospital</p>

      </div>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
</section>

    
</div>
  
</header>
            </>
  )
}

export default TopBar