import React, { useState,useEffect } from "react";
import axios from "axios";

const DoctorAppoitnmentList = () => {
  const [appointmentList, setAppontmentList] = useState([]);
  useEffect(()=>{
    let doctor = JSON.parse(localStorage.getItem("doctor"))
    let baseURL = localStorage.getItem("baseURL")
    axios.post(baseURL+"showAppointments",doctor).then((response)=>{
      let allpatientData = []
        
        if (response.data && response.data.length) {
          allpatientData = response.data
        }
        
        setAppontmentList(allpatientData)
      let appointmentList = response.data;
      localStorage.setItem("appointmentList",JSON.stringify(appointmentList))
    }).catch(()=>{
      console.log("appointments list error")
    })
  },[])
  return (
    <>
      <div className="appointment_list mt-4 ">
        <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h4 className="pt-3 pb-4 "><span style={{color:" #EE6F1B"}}> Appointments </span> </h4>
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
                    <th scope="col"> Doctor Name </th>
                    <th scope="col"> Doctor phone no</th>
                    <th scope="col"> Mobile No</th>
                    <th scope="col"> status </th>
                    <th scope="col"> Action</th>
                  </tr>
                </thead>
                {appointmentList && appointmentList.length > 0 && (
                  <tbody>
                    {appointmentList.map((appointment) => (
                      <tr key={appointment.appointmentId}>
                        <td> {appointment.appointmentId}</td>
                        <td> {appointment.patientName} </td>
                        <td> {appointment.patientAge}</td>
                        <td> {appointment.problem}</td>
                        <td> {appointment.doctorName}</td>
                        <td> {appointment.doctorPhoneNo}</td>
                        
                        <td> {appointment.patientPhoneNo} </td>
                        <td> {appointment.status}</td>
                        <td>
                          <button className="btn btn-danger"> Delete</button>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppoitnmentList;
