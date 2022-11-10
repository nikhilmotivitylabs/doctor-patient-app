import React from "react";

const ViewStatus=()=>{
    return(
        <>
        <div className="view_status mt-4 ">
            <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h2 className="pt-3 pb-4 text-center"> Appointment Status </h2>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th scope="col"> App_Id</th>
                    <th scope="col"> Patient Name </th>
                    <th scope="col"> Doctor Name </th>
                    <th scope="col"> Disease </th>
                    <th scope="col"> Dr Ph No</th>
                    <th scope="col"> App_Date </th>
                    <th scope="col"> App_Time</th>
                    <th scope="col"> Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1</td>
                    <td> Otto </td>
                    <td> otto </td>
                    <td> fever </td>
                    <td> 85787889588</td>
                    <td> 1/11/22 </td>
                    <td>10:30 </td>
                    <td style={{color:"green",fontWeight:'bold'}}>Accept </td>
                   
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        </> 
    )
}
export default ViewStatus