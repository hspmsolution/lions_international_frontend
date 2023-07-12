import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { getAdminReports } from "../../actions/adminReports";

const monthNames = [
  "July 2023",
  "August 2023",
  "September 2023",
  "October 2023",
  "November 2023",
  "December 2023",
  "January 2024",
  "February 2024",
  "March 2024",
  "April 2024",
  "May 2024",
  "June 2024",
];

const today = new Date();
const curMonth = today.getMonth() + 1;
const prevMonth = curMonth === 1 ? 12 : curMonth - 1;

export default function SelectMonth() {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      xs={6}>
      <TextField
        id="Month"
        select
        fullWidth
        label=" Select Month "
        onChange={(e) => {
          dispatch(getAdminReports(e.target.value));
        }}>
        {/* <MenuItem value={curMonth}>{monthNames[curMonth - 1]}</MenuItem>
        <MenuItem value={prevMonth}>{monthNames[prevMonth - 1]}</MenuItem> */}

        {monthNames.map((item, index) => (
          <MenuItem
            key={index}
            value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
}
