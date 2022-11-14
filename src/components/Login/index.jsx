import React from "react";
import { useNavigate } from "react-router-dom";
import login from '../../assets/login.png'
import './login.css'

const Login = () => {
  const navigate = useNavigate()
  const onLogin = ()=>{
    navigate("/doctor/dashboard")
  }
  return (
    <>
       <section className="doc-login px-2">
     
      <div className="container">
        <div className='row d-flex justify-content-center py-5' style={{border:'1px solid rgba(0,0,0,0.2)',borderRadius:'20px'}}>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-left">
              <img src={login} className="img-fluid"/>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12login-right">
               <div className="p-5">
                  <div className="">
                    <h2 className="text-center">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                    id="password"
                  />
                </div>
               <div className="d-grid  col-6 mx-auto mt-5 mb-3">
               <button type="submit" onClick={onLogin} className="btn text-white " style={{backgroundColor: '#EE6F1B', borderColor: '#EE6F1B'}}>
                  Login
                </button>
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

export default Login;
