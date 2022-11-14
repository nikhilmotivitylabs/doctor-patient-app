import React, {useState,useEffect  } from "react";
import axios from "axios";

const DoctorAppointmentRequest = () => {
  const[patientData,setPatientData]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5001/users")
      .then((response)=>
      {
        let allpatientData = []
        if (response.data && response.data.length) {
          allpatientData = response.data
        }
        setPatientData(allpatientData)
      })
      .catch((error) => console.error(`Error:${error}`))
    },[])
  return (
    <>
      <div className="appointment_req mt-4">
        <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h4 className="pt-3 pb-4 ">
                 <span style={{color:"#EE6F1B"}}>Appointment </span>Queue
                </h4>
              </div>
            </div>
            <div className="table-responsive">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th scope="col"> Appointment Id</th>
                  <th scope="col"> Patient Name </th>
                  <th scope="col"> Patient Age </th>
                  <th scope="col"> Health Issue</th>
                  <th scope="col"> Mobile No</th>
                  <th scope="col"> Action</th>
                </tr>
              </thead>
              {patientData && patientData.length > 0 && (
              <tbody>
                {
                   patientData.map(user => (
                  <tr key={user.appointmentId}>
                  <td> {user.appointmentId}</td>
                  <td> {user.patientName}</td>
                  <td> {user.patientAge}</td>
                  <td> {user.disease} </td>
                  <td> {user.phNo} </td>
                  <td>
                    <button className="btn btn-success "> Accepted</button>
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
  );
};

export default DoctorAppointmentRequest;
