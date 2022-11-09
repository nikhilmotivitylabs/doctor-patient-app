
import React from "react"
import "./App.css"
import HomePage from "./components/Home"
import Doctor from "./components/Doctor"
import { Routes, Route } from "react-router-dom"
import PatientLogin from "./components/Patient"
import DefaultLayout from "./layouts/default_layout"
import DoctorRegsitration from "./components/Doctor/DoctorRegistration"

const App = () => (

  <>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
  </>

)



export default App