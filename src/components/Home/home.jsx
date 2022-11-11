import React from 'react'
import './Home.css'
import about from '../../assets/about.png'
import cardio from '../../assets/cardiology.png'
import gasteo from '../../assets/gastroenterology.png'
import onology from '../../assets/oncology.png'
import neph from '../../assets/nephrology.png'
import neuro from '../../assets/neuro_surgery.png'
import ortho from '../../assets/heart.png'

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
      <section className='about'>
      <div className='container'>
          <div className='about-title text-center'>
          <h2>About Us</h2>
          
            </div>
            <div className='row d-flex justify-content-center align-items-center mt-5'> 
            
            
            <div className=' col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
                

                
                            <img className='img-fluid d-block mx-auto' src={about} alt='doctorimage'/>
                
            </div>
            <div className='col-lg-8 col-md-6 col-sm-6 col-12 mb-2'>
                <h3 className='mb-4'>Welcome to <strong style={{color:'#EE6F1B'}}>MotivityLabs</strong></h3>


                <p className='mb-2 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Praesentium earum sequi delectus necessitatibus harum. Natus, illo voluptate? Quia at odio tempore obcaecati neque accusantium minima, 
                    cumque, eum quae perspiciatis eos modi nemo.</p>

                    <ul style={{listStyleType:'none',paddingLeft:'10px'}}>
                     <li className='mt-2'><i className="bi bi-check-circle-fill me-2"></i>Lorem ipsum dolor sit amet</li>
                        <li className='mt-2 '><i className="bi bi-check-circle-fill me-2"></i>Consectetur adipisicing elit, sed do</li>
                        <li className='mt-2 '><i className="bi bi-check-circle-fill me-2"></i>Eiusmod tempor incididunt ut labore</li>
                    </ul>

            </div>
            </div>
            </div>
        </section>

      <section className='services'>
        <div className='container'>
          <div className='services-title text-center'>
            <h2>Services</h2>
             

          </div>


          
                  <div className='row d-flex text-center'>
                    <div className='col-lg-4 col-md-6 g-5'>
                    <div className="card">
                        <div className="card-body">
                        <img src={cardio}/>
                          <h4 className="card-title" style={{color:"#EE6F1B"}}>Cardiology</h4>
                          <p className="card-subtitle mb-0 text-muted" style={{color:"#0000"}}>Heart</p>
                          
                          
                        </div>
                   </div>
                    </div>

                    <div className='col-lg-4 col-md-6 g-5'>
                    <div className="card">
                        <div className="card-body">
                          <img src={onology}/>
                          <h4 className="card-title" style={{color:"#EE6F1B"}}>Oncology</h4>
                          <p className="card-subtitle mb-0 text-muted">Cancer</p>

                          
                        </div>
                   </div>
                    </div>
                     
                    <div className='col-lg-4 col-md-6 g-5 '>
                    <div className="card">
                        <div className="card-body">
                          <img src={neph}/>
                          <h4 className="card-title" style={{color:"#EE6F1B"}}>Nephrology</h4>
                          <p className="card-subtitle mb-0 text-muted">Kidneys</p>
                          
                        </div>
                   </div>
                    </div>

                    <div className='col-lg-4 col-md-6 g-5' >
                    <div className="card">
                        <div className="card-body">
                           <img src={ortho}/>
                          <h4 className="card-title" style={{color:"#EE6F1B"}}>Orthopaedics</h4>
                          <p className="card-subtitle mb-0 text-muted">Muscles</p>
                          
                        </div>
                   </div>
                    </div>

                    <div className='col-lg-4 col-md-6 g-5'>
                    <div className="card">
                        <div className="card-body">
                        <img src={neuro}/>
                          <h4 className="card-title" style={{color:"#EE6F1B"}}>Neurology</h4>
                          <p className="card-subtitle mb-0 text-muted">Nerves</p>
                          
                        </div>
                   </div>
                    </div>

                    <div className='col-lg-4 col-md-6 g-5'>
                    <div className="card">
                        <div className="card-body">
                           <img src={gasteo}/>
                          <h4 className="card-title" style={{color:"#EE6F1B"}}>Gastroenterology</h4>
                          <p className="card-subtitle mb-0 text-muted">Digestive System</p>

                          
                        </div>
                   </div>
                    </div>
                    

                  </div>

                
        </div>

      </section>
     
    </>


  )
}

export default HomePage