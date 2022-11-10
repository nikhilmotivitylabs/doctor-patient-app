import React, {useState,useEffect  } from "react";
import axios from "axios";

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
                <h2 className="pt-3 pb-4 text-center"> Appointment Status </h2>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th scope="col"> App_Id</th>
                    <th scope="col"> Patient Name </th>
                    <th scope="col"> Doctor Name </th>
                    <th scope="col"> Disease </th>
                    <th scope="col"> Dr Ph No</th>
                    <th scope="col"> App_Date </th>
                    <th scope="col"> App_Time</th>
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
                    <td style={{color:"orange",fontWeight:'bold'}}>{user.status}</td>
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