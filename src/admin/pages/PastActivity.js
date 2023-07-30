import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

import { API_URL } from "../../api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NewActivity from "./NewActivity";
import { Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteActivity,
  downloadClubActivity,
  getReportedActivity,
} from "../../actions/activity";

const PastActivity = () => {
  const dispatch = useDispatch();
  const reportedActivity = useSelector(
    (state) => state.activity.reportedActivity
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [activityId, setActivityId] = useState(0);
  const [openDel, setOpenDel] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [pastActivityData, setPastActivityData] = React.useState({});

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = reportedActivity.filter((row) =>
    row.activityType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOpen = (activityId) => {
    setPastActivityData(
      reportedActivity.find((x) => x.activityId === activityId)
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenDel = (activityId) => {
    setOpenDel(true);
    setActivityId(activityId);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  useEffect(() => {
    dispatch(getReportedActivity());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box bgcolor={"white"} p={3} borderRadius={4}>
        <Typography variant="h6">Past Activities</Typography>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <TextField
              id="search"
              label="Search by Activity Type"
              variant="outlined"
              size="small"
              onChange={handleSearchInputChange}
            />
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(downloadClubActivity(reportedActivity));
              }}
            >
              Download club Activities
            </Button>
          </Grid>
        </Grid>
        <TableContainer style={{ marginTop: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Activity Id</TableCell>
                <TableCell align="left">Activity</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="center">Media Coverage</TableCell>
                <TableCell align="center">Image1</TableCell>
                <TableCell align="center">Image2</TableCell>
                <TableCell align="center">Action</TableCell>{" "}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center" component="th" scope="row">
                    {row.activityId}
                  </TableCell>
                  <TableCell align="left">{row.activityType}</TableCell>
                  <TableCell align="left">{row.activityTitle}</TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.lionHours}</TableCell>
                  <TableCell align="center">{row.mediaCoverage}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: "150px",
                      height: "150px",
                      padding: "0.5rem",
                    }}
                  >
                    <img
                      src={`${API_URL + row.image_path}`}
                      alt="Activity"
                      srcset={`${API_URL + row.image_path}`}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: "150px",
                      height: "150px",
                      padding: "0.5rem",
                    }}
                  >
                    {row.image_path2 && (
                      <img
                        src={`${API_URL + row.image_path2}`}
                        alt="Activity"
                        srcset={`${API_URL + row.image_path2}`}
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      onClick={() => {
                        handleClickOpen(row.activityId);
                      }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => {
                        handleClickOpenDel(row.activityId);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Delete Dialog */}
      <Dialog
        open={openDel}
        onClose={() => {
          handleCloseDel();
        }}
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
          <Button
            onClick={() => {
              handleCloseDel();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleCloseDel();
              dispatch(deleteActivity(activityId));
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* /Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth={"none"}>
        <DialogTitle>
          Edit Activity with ID {pastActivityData.activityId}
        </DialogTitle>
        <DialogContent>
          <NewActivity pastActivityData={pastActivityData} isEdit={true}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PastActivity;
