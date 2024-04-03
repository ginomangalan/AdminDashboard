import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(job, daysSince, applications, daysLeft, status) {
  return { job, daysSince, applications, daysLeft, status };
}

const rows = [
  createData("Housekeeper", 15, 16, 24, "Active"),
  createData("Registered Nurse", 23, 91, 37, "Expired"),
  createData("Dental Assistant", 2, 167, 24, "Active"),
  createData("Driver", 30, 37, 67, "Active"),
  createData("Packer", 5, 44, 49, "Expired"),
];
const makeStyles = (status) => {
  if (status === "Active") {
    return {
      background: "rgb(145 254 149 / 47%)",
      color: "green",
    };
  } else {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  }
};
export default function BasicTable() {
  return (
    <div className="Table">
      <h2>Recent Orders</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Job Name</TableCell>
              <TableCell align="center">No. of Days</TableCell>
              <TableCell align="center">Applications</TableCell>
              <TableCell align="center">Expires in (Days)</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.job}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <a href="#">{row.job}</a>
                </TableCell>
                <TableCell align="center">{row.daysSince}</TableCell>
                <TableCell align="center">{row.applications}</TableCell>
                <TableCell align="center">{row.daysLeft}</TableCell>
                <TableCell align="center">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
