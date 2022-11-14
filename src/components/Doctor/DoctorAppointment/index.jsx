import React, { useState, useEffect } from "react"
import axios from "axios"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"

const DoctorAppoitnmentList = () => {
  const [appointmentList, setAppontmentList] = useState([])
  const [errorcase, setErrorCase] = useState("")

  useEffect(() => {
    const url = "http://localhost:5001/appointments"

    axios
      .get(url)
      .then((response) => {
        let appointments = []

        if (response.data && response.data.length) {
          appointments = response.data
        }

        setAppontmentList(appointments)
      })
      .catch((errors) => {
        setErrorCase(errors)

        console.log(`Error : ${errorcase}`)
      })
  }, [])

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - appointmentList.length)
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
      <div className='appointment_list mt-3 '>
        <div className='card mb-1 '>
          <div className='card-body  d-sm-block'>
            <div className='row '>
              <div className='col-md-12 '>
                <h4 className='pt-3 pb-2 '>
                  <span style={{ color: " #EE6F1B" }}> Appointments </span>{" "}
                </h4>
              </div>
            </div>
            <div className='table-responsive'>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? appointmentList.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : appointmentList
                  ).map((appointment) => (
                    <TableRow key={appointment.AppointmentId}>
                      <TableCell component='th' scope='row'>
                        {appointment.AppointmentId}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.PatientName}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.PatientAge}
                      </TableCell>
                      <TableCell align='left'>{appointment.Disease}</TableCell>
                      <TableCell align='left'>{appointment.PhNo}</TableCell>
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
                      count={appointmentList.length}
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

export default DoctorAppoitnmentList
