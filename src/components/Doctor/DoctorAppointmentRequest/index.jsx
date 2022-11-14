import React, {useState,useEffect  } from "react";
import axios from "axios";
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"

const DoctorAppointmentRequest = () => {
  const[patientData,setPatientData]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5001/users")
      .then((response)=>
      {
        let allpatientData = [];
        console.log(response.data);
        if (response.data && response.data.length) {
          allpatientData = response.data
        }
        setPatientData(allpatientData)
      })
      .catch((error) => console.error(`Error:${error}`))
    },[]);

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
  
    const emptyRows =
      page > 0
        ? Math.max(0, (1 + page) * rowsPerPage - patientData.length)
        : 0
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage)
    }
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
    }




  return (
    <>
      <div className="appointment_req mt-4">
        <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h4 className="pt-3 pb-2 ">
                 <span style={{color:"#EE6F1B"}}>Appointment </span>Queue
                </h4>
              </div>
            </div>
            <div className="table-responsive">
            {/* <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th scope="col"> Appointment Id</th>
                  <th scope="col"> Patient Name </th>
                  <th scope="col"> Patient Age </th>
                  <th scope="col"> Health Issue</th>
                  <th scope="col"> Mobile No</th>
                  <th scope="col"> Action</th>
                </tr>
              </thead>
              {patientData && patientData.length > 0 && (
              <tbody>
                {
                   patientData.map(user => (
                  <tr key={user.appointmentId}>
                  <td> {user.appointmentId}</td>
                  <td> {user.patientName}</td>
                  <td> {user.patientAge}</td>
                  <td> {user.disease} </td>
                  <td> {user.phNo} </td>
                  <td>
                    <button className="btn btn-success "> Accepted</button>
                  </td>
                </tr>))
                }
              </tbody>)}
            </table> */}

            <Table
                sx={{ minWidth: 500, marginTop: "10px" }}
                aria-label='custom pagination table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Appointment Id</TableCell>
                    <TableCell align='left'>Patient Name</TableCell>
                    <TableCell align='left'>Patient Age</TableCell>
                    <TableCell align='left'>Health Issue</TableCell>
                    <TableCell align='left'>Mobile No</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? patientData.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : patientData
                  ).map((appointment) => (
                    <TableRow key={appointment.appointmentId}>
                      <TableCell component='th' scope='row'>
                        {appointment.appointmentId}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.patientName}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.patientAge}
                      </TableCell>
                      <TableCell align='left'>{appointment.disease}</TableCell>
                      <TableCell align='left'>{appointment.phNo}</TableCell>
                      <TableCell align="left"> <button className="btn btn-success "> Accepted</button></TableCell>
                    </TableRow>

                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      count={patientData.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppointmentRequest;
