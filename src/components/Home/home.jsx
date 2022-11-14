import React from 'react'
import './Home.css'
import About from './about'
import Services from './services'

const HomePage = () => {

  return (

    <>
      <section className='hero-carousel'>
        <div className="container-fluid g-0">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img className="w-100" src="https://media.istockphoto.com/photos/doctor-in-hospital-background-with-copy-space-picture-id949812160?k=20&m=949812160&s=170667a&w=0&h=d37eip7n1YrRu2wZxkKndJb_IR6DevLpXbAWBzzWVD8="
                  alt="First slide" />
                <div className="carousel-caption ">
                  <h1 className="display-1 fw-bolder">Doctor</h1>
                  <p className="display-6 fw-bold">the most valuable thing is your health</p>
                </div>
              </div>
              <div className="carousel-item " data-bs-interval="2000">
                <img className="w-100"
                  src="https://static.vecteezy.com/system/resources/thumbnails/006/168/689/small/doctor-working-with-patient-taking-notes-with-clipboard-and-discussing-something-in-his-medical-office-health-care-and-people-concept-photo.jpg"
                  alt="Second slide" />
                <div className="carousel-caption ">
                  <h1 className="display-1 fw-bolder">Patient</h1>
                  <p className="display-6 fw-bold">we care About Patient health</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000" >
                <img className="w-100" src="https://wallpaperaccess.com/full/4112932.jpg" alt="Third slide" />
                <div className="carousel-caption">
                  <h1 className="display-1 fw-bolder ">Hospital</h1>
                  <p className="display-6 fw-bold">We are cities No1 Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
           <About/>

           <Services/>
     
    </>


  )
}

export default HomePage