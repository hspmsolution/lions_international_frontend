import React, { useEffect } from "react";
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
import { Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getReportedNews } from "../../actions/news";


const News = () => {
  const dispatch = useDispatch();
  const reportedNews = useSelector((state) => state.news.reportedNews);
  useEffect(() => {
    dispatch(getReportedNews());
  }, []);

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
            {reportedNews?.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.newsTitle}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <a
                    href={row.newsPaperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    {row.newsPaperLink}
                  </a>
                </TableCell>

                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit" color="primary">
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

export default News;
