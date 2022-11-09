import axios from "axios"
import "./Login.css"
import { redirect, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"

const PatientLogin = () => {
    let navigate = useNavigate()
    let [data,setData]= useState({email:"email",password:"pass"})
    const baseURL = "http://localhost:5000/"
    const patientLogin = (event) => {
        event.preventDefault()
        axios.post(baseURL + "patientLogin",{
            "email":data.email,
            "password":data.password
          }).then((Response) => {
            if (Response.data === "patient_profile") {
                // let data = Response.data
                navigate("profile")
            }else if(Response.data === "patient_login"){
                // let data = Response.data
               navigate("/patient", {replace:true})
            }else{
                console.log("bad request")
                navigate("/patientlogin")
            }
        }).catch(error => {
            console.log("error in patient login function", error)
        })
    }
    const patientregistration = () => {
        axios.get(baseURL + "patientRegister").then((Response) => {
            console.log(Response)
            navigate("/patientregistration")
        }).catch((error) => {
            console.log("error in patient registration function", error)
        })
    }
    const handleChange =(event)=>{
        setData(data=>{
            return {...data,[event.target.name]:event.target.value}
        })
    }
    return (
        <div>

            <div className="container">
                <div className="header">
                    <h2 id="apple">An apple a day keeps the doctor away</h2>
                </div>
                <div className="left">
                    <div className="login-page">
                        <div className="form">
                            <div className="login">
                                <div className="login-header">
                                    <h3>PATIENT LOGIN</h3>
                                    <p>Please enter your credentials to login.</p>
                                </div>
                            </div>
                            <form className="login-form" onSubmit={patientLogin} >
                                <input onChange={handleChange} type="text" placeholder="email" name="email" value={data.email} />
                                <input onChange={handleChange} type="password" placeholder="password" value={data.password} name="password" />
                                <button value="submit">LOGIN</button>
                                <p className="message">Not registered? <Link onClick={patientregistration} >Create an account</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="right">

                </div>

            </div>

        </div>

    )

}
export default PatientLogin