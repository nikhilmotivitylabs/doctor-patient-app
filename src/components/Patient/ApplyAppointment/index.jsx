import React from "react";

const ApplyAppointment=()=>{
    return(
        <>
       <section className="doc-login" >
     
     <div className="container">
       <div className='row d-flex justify-content-center my-4'>
     
           <div className="col-lg-8">
              <div className="card  shadow">
                 <div className="card-body">
                   <h2 className="text-center">Book Appointment</h2>
             <form>
               <div className="mb-3">
                 <label for="name" className="form-label">
                    Name
                 </label>
                 <input
                   type="name"
                   className="form-control"
                   id="name"
                   value="josna"
                   readOnly
                   aria-describedby="nameHelp"
                 />
                 
               </div>
               <div className="mb-3">
                 <label for="password" className="form-label">
                   PhoneNo
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="password"
                   value="4567899078"
                   readOnly
                 />

             </div>
               <div className="mb-3">
                 <label for="email" className="form-label">
                  Email
                 </label>
                 <input
                   type="email"
                   className="form-control"
                   id="email" value="josna@gmail.com" readOnly
                 />                
               </div>

               <div className="mb-3">
                 <label for="gender" className="form-label">
                    Gender
                 </label>
                 <input
                   type="gender"
                   className="form-control"
                   id="gender" value="female" readOnly
                   aria-describedby="genderHelp"
                 />  
               </div>
               <div className="mb-4">
               <select class="form-select" aria-label="Default select example">
               <option selected>Specialist</option>
               <option value="1">Ent</option>
               <option value="2">Cardiologist</option>
               <option value="3">Physcologist</option>
               <option value="4">Dermotologist</option>
               <option value="5">Gynocologist</option>
              </select>
              </div>
               
              <div className="d-grid  col-6 mx-auto mt-5 mb-3">
              <button type="submit" onClick={ApplyAppointment} className="btn btn-primary">
                 Book Appointment
               </button>
              </div>
               
             </form>
           </div>
         </div>
           </div>
       </div>
       
     </div>
   </section>
    </> 
    )
}
export default ApplyAppointment