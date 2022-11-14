import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import login from '../../../assets/login.png'

const Patientlogin = () => {
    const navigate = useNavigate()
    const onLogin = ()=>{
      navigate("/patient/applyappointment")
    }
    return (
      <>
         <section className="doc-login px-2">
       
        <div className="container">
          <div className='row d-flex justify-content-center py-5' style={{border:'1px solid rgba(0,0,0,0.2)',borderRadius:'20px'}}>
              <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-left">
                <img src={login} className="img-fluid"/>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-right">
                 <div className="p-5">
                    <div className="">
                      <h2 className="text-center"><span style={{color:"#EE6F1B",marginRight:'0.5rem'}}>Patient</span>Login</h2>
                <form className='mt-4'>
                  <div className="mb-3">
                    <label htmlFor="patientEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="patientEmail"
                      placeholder="Enter Your Email"
                      aria-describedby="emailHelp"
                    />
                    
                  </div>
                  <div className="mb-3">
                    <label htmlFor="patientPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      id="patientPassword"
                    />
                  </div>
                 <div className="d-grid  col-6 mx-auto mt-5 mb-3">
                 <button type="submit" onClick={onLogin} className="btn text-white " style={{backgroundColor: '#EE6F1B', borderColor: '#EE6F1B'}}>
                    Login
                  </button>
                  <NavLink className="text-center text-decoration-none py-2" style={{color:"#EE6F1B"}} to="/patientregister">Sign Up</NavLink>
                 </div>
                  
                </form>
              </div>
            </div>
              </div>
          </div>
          
        </div>
      </section>
      </>
     
    );
  };
  
  export default Patientlogin;