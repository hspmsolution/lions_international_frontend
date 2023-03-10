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
  Box
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const rows = [
  {
    id: 1,
    newsTitle: "News Title 1",
    description: "Description 1",
    paperLink: "Paper Link 1",
    date: "01/01/2022",

  }
];

const AddNews = () => {
  return (
    <Box bgcolor="white" p={3} borderRadius={4}>
    
<Typography variant="h6" gutterBottom>
Reported News
</Typography>
<TableContainer component={Paper}>
  <Table aria-label="news table">
    <TableHead>
      <TableRow>
        <TableCell>Sr No.</TableCell>
        <TableCell>News Title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Paper Link</TableCell>
        <TableCell>Date</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell>{row.newsTitle}</TableCell>
          <TableCell>{row.description}</TableCell>
          <TableCell>{row.paperLink}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>
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

export default AddNews;
