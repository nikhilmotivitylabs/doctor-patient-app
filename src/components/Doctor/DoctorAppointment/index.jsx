import React, { useState,useEffect } from "react";
import axios from "axios";

const DoctorAppoitnmentList = () => {
  const [appointmentList, setAppontmentList] = useState([]);

  const [errorcase, setErrorCase] = useState("");

  useEffect(() => {
    const url = "http://localhost:5001/appointments";

    axios
      .get(url)
      .then((response) => {
        let appointments = [];

        if (response.data && response.data.length) {
          appointments = response.data;
        }

        setAppontmentList(appointments);
      })
      .catch((errors) => {
        setErrorCase(errors);

        console.log(`Error : ${errorcase}`);
      });
  }, []);

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
                    <th scope="col"> Health Issue </th>
                    <th scope="col"> Mobile No</th>
                  
                  
                  </tr>
                </thead>
                {appointmentList && appointmentList.length > 0 && (
                  <tbody>
                    {appointmentList.map((appointment) => (
                      <tr key={appointment.AppointmentId}>
                        <td> {appointment.AppointmentId}</td>
                        <td> {appointment.PatientName} </td>
                        <td> {appointment.PatientAge}</td>
                        <td> {appointment.Disease}</td>
                        <td> {appointment.PhNo}</td>

                        
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
