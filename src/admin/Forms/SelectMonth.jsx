import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { getAdminReports } from "../../actions/adminReports";
import {
  ADMIN_REPORTS,
  CLIENT_MSG,
  SELECTED_MONTH,
} from "../../constants/actionTypes";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const available_months = [
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
];

const today = new Date();
const curMonth = today.getMonth() + 1;
const prevMonth = curMonth === 1 ? 12 : curMonth - 1;
const currentDate = today.getDate();

// condition to decide whether user can report

const canReport = (selectedMonth) => {
 
  if (selectedMonth === prevMonth) {

    // last date to report
    return currentDate <= 31;
  } else if (selectedMonth === curMonth) {
    return true;
  }
  return false;
  // return selectedMonth >= curMonth;
};

export default function SelectMonth() {
  const dispatch = useDispatch();
  return (
    <Grid item xs={6}>
      <TextField
        id="Month"
        select
        fullWidth
        label="Select Month "
        onChange={(e) => {
          const selectedIndexes = monthNames
            .map((month, index) => (month === e.target.value ? index + 1 : -1))
            .filter((index) => index !== -1);
          if (canReport(selectedIndexes[0])) {
            dispatch(getAdminReports(selectedIndexes[0]));
            dispatch({ type: SELECTED_MONTH, payload: selectedIndexes[0] });
          } else {
            dispatch({ type: ADMIN_REPORTS, payload: [] });
            dispatch({
              type: CLIENT_MSG,
              message: {
                info: "You can only report for current month",
                status: 400,
              },
            });
          }
        }}
      >
        {available_months.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
}
