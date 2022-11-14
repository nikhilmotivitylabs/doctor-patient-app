
import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/default_layout"
import HomePage from "./components/Home/home"
import DoctorLogin from "./components/DoctorAuth/DoctorLogin"
import DoctorRegister from "./components/DoctorAuth/DoctorRegister"
import PatientLogin from "./components/PatientAuth/PatientLogin"
import PatientRegister from "./components/PatientAuth/PatientRegister"
import Doctor from "./components/Doctor"
import DoctorDashboard from "./components/Doctor/DoctorDashboard"
import DoctorAppointmentRequest from "./components/Doctor/DoctorAppointmentRequest"
import DoctorAppointment from "./components/Doctor/DoctorAppointment"
import Patient from "./components/Patient"
import PatientDashboard from "./components/Patient/Dashboard"
import PatientApplyAppointment from "./components/Patient/ApplyAppointment"
import PatientViewStatus from "./components/Patient/ViewStatus"
import Error from './components/Error'


const App = () => (
  <>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />

          <Route path ='doctorlogin' element={<DoctorLogin/>}/>
          <Route path='doctorregister' element ={<DoctorRegister/>}/>

          <Route path ='patientlogin' element={<PatientLogin/>}/>
          <Route path='patientregister' element ={<PatientRegister/>}/>

          
          <Route path='doctor' element={<Doctor/>}>
            <Route path='dashboard' element={<DoctorDashboard/>}/>
            <Route path='appointmentreq' element={<DoctorAppointmentRequest/>}/>
            <Route path='appointment' element={<DoctorAppointment/>}/>
          </Route>
          <Route path='patient' element={<Patient/>}>
            <Route path='dashboard' element={<PatientDashboard/>}/>
            <Route path="applyappointment" element={<PatientApplyAppointment/>}/>
            <Route path="viewstatus" element={<PatientViewStatus/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    

      
  </>

)
export default App