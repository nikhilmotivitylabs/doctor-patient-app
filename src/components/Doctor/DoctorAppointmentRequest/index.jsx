import React, {useState,useEffect  } from "react";
import axios from "axios";

const DoctorAppointmentRequest = () => {
  const[patientData,setPatientData]=useState([]);
  // let doctor = localStorage.getItem("doctor")
  // let baseURL = localStorage.getItem("baseURL")
  //   useEffect(()=>{
  //     axios.post(baseURL+"showAppointments",doctor)
  //     .then((response)=>
  //     {
  //       let allpatientData = []
        
  //       if (response.data && response.data.length) {
  //         allpatientData = response.data
  //       }
  //       localStorage.setItem("appointmentsList",response.data)
  //       setPatientData(allpatientData)

  //     })
  //     .catch((error) => console.error(`Error:${error}`))
  //   },[])
  useEffect(()=>{
    let doctor = JSON.parse(localStorage.getItem("doctor"))
    let baseURL = localStorage.getItem("baseURL")
    axios.post(baseURL+"showAppointments",doctor).then((response)=>{
      let allpatientData = []
        
        if (response.data && response.data.length) {
          allpatientData = response.data
        }
        
        setPatientData(allpatientData)
      let appointmentList = response.data;
      localStorage.setItem("appointmentList",JSON.stringify(appointmentList))
    }).catch(()=>{
      console.log("appointments list error")
    })
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
                  <th scope="col"> Disease </th>
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
                  <td> {user.problem} </td>
                  <td> {user.patientPhoneNo} </td>
                  <td>
                    <button className="btn btn-success hover"> accept</button>
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
