
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer className='footer-bs'>
        <div className="container min-vw-100 bg-light ">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h3> <Link to="home" className="text-decoration-none"><img className='img w-75 p-3' src='https://eyecarehelpline.com/hospdt/032019/12/186/max.png' alt='logo' /></Link></h3>
                <p className="mb-30 ">

                  <h5>
                    Social Media Networks
                  </h5>

                  <div>
                    <span class="link"> <i class="bi bi-facebook " style={{color:'blue'}}></i></span>
                    <span class="link"> <i class="bi bi-google " style={{color:'red'}}  ></i></span>
                    <span class="link"> <i class="bi bi-twitter " style={{color:'blue'}} ></i></span>
                    
                    <span class="link">  <i class="bi bi-instagram " style={{color:'#c40898'}}  ></i></span>
                  </div>
                </p>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">

              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="home" className="text-decoration-none">Home</Link>
                </li>
                <li>
                  <Link to="aboutus" className="text-decoration-none">About Us</Link>
                </li>
                <li>
                  <Link to="service" className="text-decoration-none">Service</Link>
                </li>
                <li>
                  <Link to="contact" className="text-decoration-none">Contact</Link>
                </li>
              </ul>

            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Service</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="marketing" className="text-decoration-none">Medical</Link>
                  </li>
                  <li>
                    <Link to="brandin" className="text-decoration-none">International specialists</Link>
                  </li>
                  <li>
                    <Link to="webdesign" className="text-decoration-none">Latest Technology Equipment </Link>
                  </li>
                  <li>
                    <Link to="graphics" className="text-decoration-none">Therapy Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
                <h4>Address</h4>
                <ul className="list-unstyled">
                  <p>Dallas Center, 6th & 7th Floor, 83/1, Plot No A1, Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032.</p>
                  <li>
                    <p>+91 888-555-4444 / 888-555-6666</p>
                   
                  </li>
                  <li>
                    <p><Link to="mail">maxhospital@gmail.com</Link>
                    </p> 
                  </li>
                  <li>
                    <p>
                      <ul>

                      </ul>
                    </p>
                  </li>
                </ul>
              
            </div>
          </div>
          <div className="d-flex justify-content-center border-top">

            <div className="copyright  ">
              <p>Developed and maintained by <Link to="/home" target="_blank">company</Link></p>

              <p>Copyright Company Name © 2022. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer