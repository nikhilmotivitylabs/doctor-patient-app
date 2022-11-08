import React from 'react'
import './doctorLogin.css'
const DoctorLogin = () => {
  return (
   
    <div class="container">
    <div class="header">
            <h2 >TREAT PATIENTS WITH DIGNITY AND  RESPECT</h2>
    </div>
    <div class="left">
        <div class="login-page">
            <div class="form">
              <div class="login">
                <div class="login-header">
                  <h3>DOCTOR LOGIN</h3>
                  <p>Please enter your credentials to login.</p>
                </div>
              </div>
              <form class="login-form" action="doctorloginm" method="post">
                <input type="text" placeholder="email" name ="email" />
                <br></br>
                
                <input type="password" placeholder="password" name="password"/>
                <br></br>
                <button value="submit">login</button>
                <br></br>
                <p class="message">Not registered? <a href="doctorregistration.jsp">Create an account</a></p>
              </form>
              </div>
          </div>
    </div>
    <div class="right">
           
    </div>

</div>


  )
}

export default DoctorLogin