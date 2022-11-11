import React from "react";

const ApplyAppointment=()=>{
    return(
        <>

       <div className="book_apppointment" >
     
     
       <div className='row d-flex justify-content-center my-4'>
     
           <div className="col-lg-9">
              <div className="card  shadow">
                <div className="card-header" style={{background:"0"}}> <h4 ><span style={{color:"#EE6F1B"}}>Book</span> Appointment</h4>  </div>
                 <div className="card-body p-5">
                  
                 <form className='row g-3'>
                  <div className='col-md-12'>
                    <label for='patientName' className='form-label'>
                      Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientName'
                      value='Ayher koe'
                      readOnly
                      disabled
                    />
                  </div>
                  <div className='col-md-12'>
                    <label for='patientEmail' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='patientEmail'
                      value='Ayherkoe@gmail.com'
                      readOnly
                      disabled
                    />
                  </div>

                  <div className='col-md-12'>
                    <label for='patientMobileNo' className='form-label'>
                      Mobile no
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='patientMobileNo'
                      placeholder='1234 Main St'
                      value='9999999999'
                      readOnly
                      disabled
                    />
                  </div>

                  <div className='col-md-12'>
                    <label for='patientGender' className='form-label'>
                      Gender
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientGender'
                      value='Female'
                      readOnly
                      disabled
                    />
                  </div>
                  <div className='col-md-12'>
                    <label className='form-label' for='doctorSpecialization'>
                      Specialist
                    </label>
                    <select className='form-select' id='doctorSpecialization'>
                      <option selected>Select Specialist</option>
                      <option value='1'>Ent</option>
                      <option value='2'>Cardiologist</option>
                      <option value='3'>Physcologist</option>
                      <option value='4'>Dermotologist</option>
                      <option value='5'>Gynocologist</option>
                    </select>
                  </div>

                  <div className='col-6 d-grid mx-auto mt-5 mb-3'>
                    <button
                      type='submit'
                      onClick={ApplyAppointment}
                      className='btn text-white'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
           </div>
         </div>
           </div>
       </div>
       
    </div>
   
    </> 
    )
}
export default ApplyAppointment