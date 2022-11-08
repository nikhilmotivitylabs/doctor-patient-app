import React from "react";

const DoctorRegsitration =()=>{

  return(
    <div >
        <div className='row no-gutters '>
            <div className='col-md-6 no-gutters d-none d-sm-none d-md-block'>
                <div className='leftside '> 
                
                </div>
            </div>
            <div className='col-md-6 no-gutters '>
                <div className='Rightside'>

               <form>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Firstname</label>
<input type="text" name="firstname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text"></div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Lastname</label>
<input type="text" name="lastname" class="form-control" id="exampleInputPassword1"/>
</div>
<div>
<select class="form-select" aria-label="Default select example">
<option selected>select name department</option>
<option value="1">ENT</option>
<option value="2">Dentist</option>
<option value="3">Cordialogy</option>
<option value="1">Neurology</option>
<option value="2">Orthopedic</option>
<option value="3">dermatology</option>
<option value="4">general</option>

</select></div>


<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text"></div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label"> Address</label>
<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text"></div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">PhoneNumber</label>
<input type="number" class="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Experience</label>
<input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text"></div>
</div>

<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>

<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
<label class="form-check-label" for="inlineRadio1">male</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
<label class="form-check-label" for="inlineRadio2">female</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
<label class="form-check-label" for="inlineRadio2">other</label>
</div>
<div>

<button type="submit" class="btn btn-primary">Submit</button></div>
</form>
                

                </div> 
                </div>
        </div>
            
    </div>
)
}
export default DoctorRegsitration