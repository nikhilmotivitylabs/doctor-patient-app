import React from "react";

const DoctorAppointmentRequest = () => {
  return (
    <>
      <div className="appointment_req mt-4 ">
        <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h2 className="pt-3 pb-4 text-center">
                  Appointment Queue
                </h2>
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
                  <th scope="col"> Username </th>
                  <th scope="col"> Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1</td>
                  <td> Otto </td>
                  <td> 20 </td>
                  <td> heart-attack </td>
                  <td> 9573133220 </td>
                  <td> otto123 </td>
                  <td>
                    <button className="btn btn-success hover"> accept</button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppointmentRequest;
