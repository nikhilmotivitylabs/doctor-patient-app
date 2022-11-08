import React from 'react'
import '../../css/doctor.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const index = () => {
  return (
    <div className='maindiv20'>

<form action="doctorRegistration">
		<div class="container">
			<div class="login-page">
				<div class="form">
					<div class="login">
						<div class="login-header">
							<h2>Doctor Registration Form</h2>
						</div>
					</div>
					<form class="login-form">
						<input type="text" name="firstname" placeholder="Enter First Name" required="true" /> 
                            <input type="text" name="lastname" placeholder="Enter Last Name" required="true" /> 
                            <select name="department" placeholder="Enter Department ">
							<option value="ENT">ENT</option>
							<option value="Dentist">Dentist</option>
							<option value="cordialogy">cordialogy</option>
							<option value="Neurology">Neurology</option>
							<option value="Orthopedic">Orthopedic</option>
							<option value="dermatology">dermatology</option>
							<option value="general">General</option>


						</select> 
                        <input type="email" name="email" placeholder="Enter doctor Email" required="true" />
                        <input type="password" name="password" placeholder="Enter Password" required="true" /> 
                        <input type="text" name="address" placeholder="Enter  Address"required="true" /> 
                        <input type="phonenumber" name="phoneno"placeholder="Enter  PhoneNo" /> 
                        <input type="number" name="exp"placeholder="Enter Experience"/> 
                        <select name="gender"required="required" placeholder="Enter Gender">
							<option value="male">male</option>
							<option value="female">female</option>
							<option value="other">other</option>
						</select>
						<button type="submit">Register</button>
						<p class="message">
							already registered? <a href="doctorlogin.jsp">login</a>
						</p>
					</form>
				</div>
			</div>
		</div>


	</form>

    </div>
  )
}

export default index