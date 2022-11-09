import React from 'react'

const doctorAppoitnmentList = () => {
  return (
    <div>
        <section>
        <div>
          <div className="container mt-4 ">
            <div className="card mb-4 ">
              <div className="card-body overflow-auto d-sm-block">
                <div className="row ">
                  <div className="col-md-12 ">
                    <h2 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text"> Appointments list </h2>
                    <div className="input-group md-form form-sm form-2 pl-0">
                      <input className="form-control my-0 py-1 pl-3 purple-border" type="text" placeholder="Search something here..." aria-label="Search" />
                      <span className="input-group-addon waves-effect purple lighten-2" id="basic-addon1"><a><i className="fa fa-search white-text" aria-hidden="true"> </i> </a> </span>
                    </div>
                  </div>
                </div>
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th> Appointment Id</th>
                      <th> Patient Name </th>
                      <th> Patient Age </th>
                      <th> Disease </th>
                      <th> Ph No</th>
                      <th> Username </th>
                      <th> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> MarkaksdjgfladgskfjlF </td>
                      <td> Otto </td>
                      <td> @mdo </td>
                      <td> @mdo </td>
                      <td> @mdo </td>
                      <td> @mdo </td>
                      <td><button className='btn btn-danger'> Delete</button> </td>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default doctorAppoitnmentList