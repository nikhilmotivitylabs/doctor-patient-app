import React from 'react'
import { NavLink } from 'react-router-dom'
import error from "../../assets/error_page.png"

const ErrorPage = () => {
  return (
    
    <>
    <section>
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 text-center'>
              <div className='mb-3'>

              <img src={error} alt='error' className='img-fluid'  />
              </div>
              <div className='w-100 h-100'>
                <p className=''>This page can't be be found!</p>
                <NavLink className='btn btn-theme' to='/'>

                  Back to Home

                </NavLink>
              
              </div> 
                
            </div>
           
         
            </div>

        </div>
    </section>
    </>
  )
}

export default ErrorPage