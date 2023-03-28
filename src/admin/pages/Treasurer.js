import * as React from "react";
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
  Button,
  Box,
  Collapse,
  ButtonGroup,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";

import WithDraw from "../Buttons/WithDraw";
import Expense from "../Buttons/Expense";
import Deposite from "../Buttons/Deposite";
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
      activityType:"ss",
      activityTitle: "News Title 1",
      total:30000,
    },
  
]


export default function Treasurer() {
  const classes=useStyles();
  return (
    <Box bgcolor={"white"} p={3} borderRadius={4}>
    <Grid xs={6} sm={3} spacing={3} className={classes.Grid}>
      <WithDraw/>
      <Expense/>
      <Deposite/>
    </Grid>
    <TableContainer style={{ marginTop: "16px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Sr No</TableCell>
            <TableCell align="left">Activity Type</TableCell>
            <TableCell align="left">Activity Title</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.activityType}</TableCell>
              <TableCell align="left">{row.activityTitle}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
    
  );
}



 
