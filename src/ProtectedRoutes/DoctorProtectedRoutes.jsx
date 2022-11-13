import { Navigate, Outlet, useNavigate } from "react-router-dom"

const DoctorProtectedRoutes =()=>{
    let doctor = JSON.parse(localStorage.getItem("doctor"))
   return doctor !== null ?<Outlet/>:<Navigate to ="/login"/>
    
}
export default DoctorProtectedRoutes