import React from 'react'
import { Outlet } from 'react-router-dom'

const Doctor = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-9'>
            <Outlet />
          </div>
        </div>
      </div>

    </>
  )
}

export default Doctor