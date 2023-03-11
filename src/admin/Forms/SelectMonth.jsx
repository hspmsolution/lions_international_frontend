import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider } from "@mui/material";

const Months = [
  {
    value: "a",
    label: "June 2022",
  },
  {
    value: "b",
    label: "July 2022",
  }
];

export default function SelectMonth() {
const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Grid item xs={6} >
            <TextField
              id="Month"
              select
              fullWidth
              label=" Select Month  "
              value={category}
              onChange={handleChange}
            >
              {Months.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
    </Grid>
  )
}
