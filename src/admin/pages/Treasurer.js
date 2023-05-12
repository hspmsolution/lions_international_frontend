import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import PopupMenu from "../components/Popup/PopupMenu";

import { makeStyles } from "@mui/styles";
import { clubStatement } from "../../actions/expense";

const useStyles = makeStyles({
  Grid: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
});

export default function Treasurer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const statement = useSelector((state) => state.expense.statement);
  useEffect(() => {
    dispatch(clubStatement());
  }, []);
  return (
    <Box bgcolor={"white"} p={3} borderRadius={4}>
      <Grid xs={6} sm={3} spacing={3} className={classes.Grid}>
        <PopupMenu type="withdraw" />
        <PopupMenu type="expense" />
        <PopupMenu type="deposite" />
      </Grid>
      <Paper
        elevation={3}
        sx={{ marginLeft: "auto", padding: "10px", width: "20%" }}
      >
        <Typography>Total Amount Balance</Typography>
        {statement.reduce((sum, state) => sum + parseInt(state.amount), 0)}
      </Paper>

      <TableContainer style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Sr No</TableCell>
              <TableCell align="left">Purpose</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="center">Withdraw</TableCell>
              <TableCell align="center">Expense</TableCell>
              <TableCell align="center">Deposite</TableCell>
              <TableCell align="center">Mode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statement.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.purpose}</TableCell>
                <TableCell align="left">{row.date.slice(0, 10)}</TableCell>

                <TableCell align="center">
                  {row.type === "withdraw" && row.amount}
                </TableCell>
                <TableCell align="center">
                  {row.type === "expense" && row.amount}
                </TableCell>
                <TableCell align="center">
                  {row.type === "deposite" && row.amount}
                </TableCell>
                <TableCell align="center">{row.paymentMode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
