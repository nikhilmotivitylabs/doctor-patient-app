import React from "react";

const login = () => {
  return (
    <>
       <section className="doc-login">
     
      <div className="container">
        <div className='row d-flex justify-content-center py-5'>
      
            <div className="col-lg-4">
               <div className="card p-5 shadow">
                  <div className="card-body">
                    <h2 className="text-center">Login</h2>
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
               <div className="d-grid  col-6 mx-auto mt-5 mb-3">
               <button type="submit" className="btn btn-primary">
                  Login
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
   
  );
};

export default login;
