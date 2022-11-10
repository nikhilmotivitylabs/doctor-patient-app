import React from 'react'
import error from "../../assets/error_page.png"

const ErrorPage = () => {
  return (
    
    <>
    <section>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-12 text-center'>
                <img src={error} alt='error' className='img-fluid' style={{ marginBlock: "100px" }}  />
            </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default ErrorPage