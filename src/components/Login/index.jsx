import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import login from '../../assets/login.png'
import './login.css'
import axios from "axios";


const Login = () => {
  const navigate = useNavigate()
  const [doctor,setDoctor] = useState({email:"", password:""})
  useEffect(()=>{
   
  })
  const onLogin = (event)=>{
    let baseURL = "http://localhost:8080/"
    event.preventDefault()
    axios.post(baseURL+"doctorlogin",{email:doctor.email,password:doctor.password}).then(response=>{
      let doc = response.data
      localStorage.setItem("doctor",JSON.stringify(doc))
      return (doc.email===doctor.email?navigate("/doctor/dashboard"):navigate("/login"))
    }).catch(error=>{
      navigate("/logins")
    })
  }
  const handleChange=(event)=>{
    setDoctor({...doctor,[event.target.name]:event.target.value})
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
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    className="form-control"
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
