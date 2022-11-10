import React from "react";

const DoctorDashboard = () => {
  return (
    <>
      <div className="doc-dashboard mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
          <div className="card">
              <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" className="card-img-top" alt="."/>
              <div className="card-body">
                <h5 className="card-title">Dr MS Reddy</h5>
                <p className="card-text mb-0">Orthopedic</p>
                <p className="card-text">Apollo Hospital, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
