
import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/default_layout"
import HomePage from "./components/Home"
import Login from "./components/Login"
import Doctor from "./components/Doctor"
import DoctorDashboard from "./components/Doctor/DoctorDashboard"
import DoctorAppointmentRequest from "./components/Doctor/DoctorAppointmentRequest"
import DoctorAppointment from "./components/Doctor/DoctorAppointment"




const App = () => (
  <>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<Login/>}/>
          <Route path='doctor' element={<Doctor/>}>
            <Route path='dashboard' element={<DoctorDashboard/>}/>
            <Route path='appointmentreq' element={<DoctorAppointmentRequest/>}/>
            <Route path='appointment' element={<DoctorAppointment/>}/>
           
          </Route>
          
        </Route>
      </Routes>

      
  </>

)
export default App