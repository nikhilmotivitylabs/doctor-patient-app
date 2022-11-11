import React, {useState,useEffect  } from "react";
import axios from "axios";
import "./viewStatus.css"

const ViewStatus=()=>{
  const[appiontmentstatus,setappiontmentstatus]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5001/viewstatus")
      .then((response)=>
      {
        let viewData = []
        if (response.data && response.data.length) {
          viewData = response.data
        }
        setappiontmentstatus(viewData)
      })
      .catch((error) => console.error(`Error:${error}`))
    },[])
    return(
        <>
        <div className="view_status mt-4 ">
            <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h4 className="pt-3 pb-4 ">
                  <span style={{color:"#EE6F1B"}}>Appointment</span>  Status </h4>

              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th scope="col"> # </th>
                    <th scope="col"> Patient Name </th>
                    <th scope="col"> Patient Age </th>
                    <th scope="col"> Health Issue </th>
                    <th scope="col"> Mobile No</th>
                    <th scope="col"> Date </th>
                    <th scope="col"> Time</th>
                    <th scope="col"> Status</th>
                  </tr>
                </thead>
                {appiontmentstatus && appiontmentstatus.length > 0 && (
              <tbody>
                {
                   appiontmentstatus.map(user => (
                  <tr key={user.appointmentId}>
                    <td> {user.appointmentId}</td>
                    <td> {user.patientName} </td>
                    <td>{user.doctorName}</td>
                    <td> {user.disease} </td>
                    <td> {user.drPhNo}</td>
                    <td>{user.app_Date}</td>
                    <td>{user.app_Time} </td>
                    <td>
                        <span style={{
                      color:"#EE6F1B",
                      fontWeight:'bold', 
                       border: "2px solid #EE6F1B",
                       padding:'3px'
                       
                       }}>{user.status}</span>
                        </td>
                    </tr>))
                }
              </tbody>)}
              </table>
            </div>
          </div>
        </div>
        </div>
        </> 
    )
}
export default ViewStatus