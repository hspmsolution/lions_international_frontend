import React from 'react'
import DashboardAppPage from './DashboardAppPage';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,Typography,
    Paper,
    Box
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
// import { Check, Close } from "@mui/icons-material";

const useStyles=makeStyles({
    title:{
        alignItems:"center",
        color:"#003895",
    }
})
  const Rows = [
    {
      id: 1,
      clubName: "News Title 1",
      activitydate:"2023-27-03 ",
      adminReport:"yes",
    
    }
  ];
export default function ZonalView() {
    const classes=useStyles();

  return (
    <>
  
   <Box bgcolor="white" p={3} borderRadius={4} marginTop={10}>
     <Typography variant="h4" gutterBottom className={classes.title}  >Zonal View</Typography>
     <TableContainer component={Paper}>
    <Table aria-label="news table">
      <TableHead>
        <TableRow>
          <TableCell>Sr No.</TableCell>
          <TableCell>Club Name</TableCell>
          <TableCell>Last Activity Report</TableCell>
          <TableCell>Admin Report of Current Month</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {Rows?.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
            <TableCell>{row.clubName}</TableCell>
            <TableCell>{row.activitydate}</TableCell>
            <TableCell>{row.adminReport}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
   </Box>
   </>
  )
}
