import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
const DoctorAppoitnmentList = () => {
  
  return (
    <>
      <div className="appointment_list mt-4 ">
        <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h2 className="pt-3 pb-4 text-center"> Appointments  </h2>
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
                    <th scope="col"> Ph No</th>
                    <th scope="col"> Action</th>
                  </tr>
                </thead>
                { appointmentList && appointmentList.length > 0 && (
               <tbody>
               { appointmentList.map(appointment => (
                  <tr key={appointment.AppointmentId}>
                    <td > {appointment.AppointmentId}</td>
                    <td> {appointment.PatientName} </td>
                    <td> {appointment.PatientAge}</td>
                    <td> {appointment.Disease}</td>
                    <td> {appointment.PhNo}</td>
                   
                    <td>
                      <button className="btn btn-danger"> Delete</button>{" "}
                    </td>
                  </tr>))}
                </tbody>)}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppoitnmentList;
