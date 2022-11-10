import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

const Doctor = () => {
  return (
    <>
    <section>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar/>
          </div>
          <div className='col-lg-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
 

    </>
  )
}

export default Doctor