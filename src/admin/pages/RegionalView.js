import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
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
    activitydate: "2023-27-03 ",
    adminReport: "yes",
  },
];
export default function RegionalView() {
    const classes=useStyles();
  return (
    <Box bgcolor="white" p={3} borderRadius={4} marginTop={10}>
        <Typography variant="h4"  className={classes.title} >Regional View</Typography>
      {[1, 2, 3, 4].map((zone) => (
        <Box key={zone} bgcolor="white" p={3}>
          <TableContainer component={Paper}>
            <Typography variant="h6" gutterBottom>
              Zone {zone}
            </Typography>
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
                    <TableCell>{row.adminReport}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
}
