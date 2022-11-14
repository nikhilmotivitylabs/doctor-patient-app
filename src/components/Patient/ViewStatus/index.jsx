import React, {useState,useEffect  } from "react";
import axios from "axios";
import "./viewStatus.css"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import { borderRadius } from "@mui/system";


const ViewStatus=()=>{
  const[appiontmentstatus,setappiontmentstatus]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5001/viewstatus")
      .then((response)=>
      {
        let viewData = []
        if (response.data && response.data.length) {
          viewData = response.data
        }
        setappiontmentstatus(viewData)
      })
      .catch((error) => console.error(`Error:${error}`))
    },[]);

    const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - appiontmentstatus.length)
      : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }



    return(
        <>
        <div className="view_status mt-4 ">
            <div className="card mb-4 ">
          <div className="card-body  d-sm-block">
            <div className="row ">
              <div className="col-md-12 ">
                <h4 className="pt-3 pb-4 ">
                  <span style={{color:"#EE6F1B"}}>Appointment</span>  Status </h4>

              </div>
            </div>
            <div className="table-responsive">
              {/* <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th scope="col"> # </th>
                    <th scope="col"> Patient Name </th>
                    <th scope="col"> Patient Age </th>
                    <th scope="col"> Health Issue </th>
                    <th scope="col"> Mobile No</th>
                    <th scope="col"> Date </th>
                    <th scope="col"> Time</th>
                    <th scope="col"> Status</th>
                  </tr>
                </thead>
                {appiontmentstatus && appiontmentstatus.length > 0 && (
              <tbody>
                {
                   appiontmentstatus.map(user => (
                  <tr key={user.appointmentId}>
                    <td> {user.appointmentId}</td>
                    <td> {user.patientName} </td>
                    <td>{user.doctorName}</td>
                    <td> {user.disease} </td>
                    <td> {user.drPhNo}</td>
                    <td>{user.app_Date}</td>
                    <td>{user.app_Time} </td>
                    <td>
                        <span style={{
                      color:"#EE6F1B",
                      fontWeight:'bold', 
                       border: "2px solid #EE6F1B",
                       padding:'3px'
                       
                       }}>{user.status}</span>
                        </td>
                    </tr>))
                }
              </tbody>)}
              </table> */}
              <Table
                sx={{ minWidth: 500, marginTop: "50px" }}
                aria-label='custom pagination table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Appointment Id</TableCell>
                    <TableCell align='left'>Patient Name</TableCell>
                    <TableCell align='left'>Doctor Name</TableCell>
                    <TableCell align='left'>Disease</TableCell>
                    <TableCell align='left'>DR No</TableCell>
                    <TableCell align="left">App_Date</TableCell>
                    <TableCell align="left">App_Time</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? appiontmentstatus.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : appiontmentstatus
                  ).map((appointment) => (
                    <TableRow key={appointment.appointmentId}>
                      <TableCell component='th' scope='row'>
                        {appointment.appointmentId}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.patientName}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.doctorName}
                      </TableCell>
                      <TableCell align='left'>{appointment.disease}</TableCell>
                      <TableCell align='left'>{appointment.drPhNo}</TableCell>
                      <TableCell align='left'>{appointment.app_Date}</TableCell>
                      <TableCell align='left'>{appointment.app_Time}</TableCell>
                      <TableCell align="left"> <span style={{
                      color:"#EE6F1B",
                      fontWeight:'bold', 
                       border: "2px solid #EE6F1B",
                       padding:'3px',
                       borderRadius:'10px'
                       
                       }}>{appointment.status}</span></TableCell>
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
                      count={appiontmentstatus.length}
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
    )
}
export default ViewStatus