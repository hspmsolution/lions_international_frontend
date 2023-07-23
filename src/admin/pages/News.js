import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
import { tableCellClasses } from "@mui/material/TableCell";

import { Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getReportedNews, deleteReportedNews } from "../../actions/news";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const News = () => {
  const dispatch = useDispatch();
  const reportedNews = useSelector((state) => state.news.reportedNews);
  useEffect(() => {
    dispatch(getReportedNews());
  }, []);

  // Delete Dialog

  const [openDel, setOpenDel] = React.useState(false);
  const [selectId, setSelectId] = useState(0);
  const handleClickOpenDel = (id) => {
    setOpenDel(true);
    setSelectId(id);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
    setSelectId(0);
  };
  return (
    <Box bgcolor="white" p={3} borderRadius={4}>
      <Typography variant="h6" gutterBottom>
        Reported News
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="news table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Sr No.</StyledTableCell>
              <StyledTableCell>News Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Paper Link</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {reportedNews?.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.newsTitle}</StyledTableCell>
                <StyledTableCell>{row.description}</StyledTableCell>
                <StyledTableCell>
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
                </StyledTableCell>

                <StyledTableCell>{row.date?.slice(0, 10)}</StyledTableCell>
                <StyledTableCell>
                  {/* <IconButton
                    aria-label="edit"
                    color="primary">
                    <Edit />
                  </IconButton> */}
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => {
                      handleClickOpenDel(row.newsId);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Dialog */}
      <Dialog
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete? This action cannot be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel}>Cancel</Button>
          <Button
            onClick={() => {
              dispatch(deleteReportedNews(selectId));
              handleCloseDel();
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default News;
