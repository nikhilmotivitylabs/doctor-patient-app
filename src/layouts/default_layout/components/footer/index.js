
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer className='container  '>

        <div className='row   py-5'>
          <div className='col-md-3 col-sm-6 col-12'>
            <Link to="home" className="text-decoration-none"><img className='img w-75 p-3' src='https://eyecarehelpline.com/hospdt/032019/12/186/max.png' alt='logo' /></Link>
          </div>
          <div className='col-md-3 col-sm-6 col-12 '>
            
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="home" className="text-decoration-none">Home</Link>
                </li>
                <li>
                  <Link to="aboutus" className="text-decoration-none">About Us</Link>
                </li>
                <li>
                  <Link to="feedback" className="text-decoration-none">Feedback</Link>
                </li>
                <li>
                  <Link to="contact" className="text-decoration-none">Contact</Link>
                </li>
              </ul>
           
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <h4>Address</h4>

            <address>
              Dallas Center, 6th & 7th Floor:<br></br>
              Knowledge City Rd :<br></br>
              Rai Durg, Hyderabad:<br></br>
              Telangana 500032.<br></br>
              India
            </address>
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <div>
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <p>+91 888-555-4444 / 888-555-6666</p>
                </li>
                <li>
                  <Link to="mail">maxhospital@gmail.com</Link>
                </li>
              </ul>
              <p>
                Social Media Networks
              </p>
              <span class="link"> <i class="bi bi-facebook " style={{ color: 'blue' }}></i></span>
              <span class="link"> <i class="bi bi-google " style={{ color: 'red' }}  ></i></span>
              <span class="link"> <i class="bi bi-twitter " style={{ color: 'blue' }} ></i></span>
              <span class="link">  <i class="bi bi-instagram " style={{ color: '#c40898' }}  ></i></span>
            </div>
          </div>
          <div className=' d-flex justify-content-between py-4 my-4 border-top'>
            <p>Developed and maintained by <Link to="/home" target="_blank">company</Link></p>
            <p className='copyright d-flex'>Copyright Company Name © 2022. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer