import React, { useState } from "react";
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
  ButtonGroup,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Edit, Delete, Search } from "@mui/icons-material";

const rows = [
  {
    name: " ",
    title: " ",
    city: " ",
    amount: " ",
    hours: " ",
    mediaCoverage: " ",
  },
];

const AddActivity = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Box bgcolor={"white"} p={3} borderRadius={4}>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Button type="submit" variant="contained" color="primary">
            Add New
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Box>
            <Button type="button" variant="outlined">
              Print
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" spacing={3} style={{ marginTop: "16px" }}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            onChange={handleSearchInputChange}
          />
        </Grid>
      </Grid>
      <TableContainer style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Sr No</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="left">Media Coverage</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.hours}</TableCell>
                <TableCell align="left">{row.mediaCoverage}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="edit" color='primary'>
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AddActivity;
