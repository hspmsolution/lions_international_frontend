import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
  Grid:{
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  }
})
const rows=[
  
    {
      id: 1,
      title:'Lion Member',
      FullName:"ss",
      ClubName: "News Title 1",
      DOB:'12/10/1996',
    },
    {
      id: 2,
      title:'Lion Member',
      FullName:"ss",
      ClubName: "News Title 1",
      DOB:'12/10/1996',
    },
    {
      id: 3,
      title:'Lion Member',
      FullName:"ss",
      ClubName: "News Title 1",
      DOB:'12/10/1996',
    },
    {
      id: 4,
      title:'Lion Member',
      FullName:"ss",
      ClubName: "News Title 1",
      DOB:'12/10/1996',
    },
    {
      id: 5,
      title:'Lion Member',
      FullName:"ss",
      ClubName: "News Title 1",
      DOB:'12/10/1996',
    },
  
]


export default function Members() {
  const classes=useStyles();
  return (
    <Box bgcolor={"white"} p={3} borderRadius={4}>
      
    <TableContainer style={{ marginTop: "16px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Sr No</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Club Name</TableCell>
            <TableCell align="left">Date Of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.FullName}</TableCell>
              <TableCell align="left">{row.ClubName}</TableCell>
              <TableCell align="left">{row.DOB}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
    
  );
}



 
