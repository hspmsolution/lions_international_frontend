import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Button,
  Grid,
  TextField,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { getRegion  } from "../../actions/clubs";
import {
  downloadClubActivity,
  getReportedActivity,regionActivity
} from "../../actions/activity";

const useStyles = makeStyles({
  title: {
    alignItems: "center",
    color: "#003895",
  },
});
export default function RegionalView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const regionData = useSelector((state) => state.clubs.region);

  const clubsByZone = regionData.reduce((acc, club) => {
    const { zoneName, ...rest } = club;
    if (!acc[zoneName]) {
      acc[zoneName] = [];
    }
    acc[zoneName].push(rest);
    return acc;
  }, {});

  // Create a 2D array from the object of clubs grouped by zone
  const clubsArray = Object.entries(clubsByZone);
  clubsArray.sort((a, b) => {
    const aZoneNumber = Number(a[0].slice(5));
    const bZoneNumber = Number(b[0].slice(5));
    return aZoneNumber - bZoneNumber;
  });

  useEffect(() => {
    dispatch(getRegion());
  }, []);

  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (clubId) => {
    dispatch(getReportedActivity(clubId));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const reportedActivity = useSelector(
    (state) => state.activity.reportedActivity
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = reportedActivity.filter((row) =>
    row.activityType.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // useEffect(() => {
  //   dispatch(getReportedActivity());
  // }, []);

  return (
    <>
      <Box bgcolor="white" p={3} borderRadius={4} marginTop={10}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" className={classes.title}>
            Regional View{" "}
          </Typography>

          <Button
            onClick={() => {
              dispatch(regionActivity());
            }}
            variant="outlined"
          >
            Download All Region Activities
          </Button>
        </Box>

        <Typography variant="h5" className={classes.title}>
          {" "}
          {clubsArray?.[0]?.[1]?.[0].regionName}
        </Typography>
        {clubsArray?.map((zone) => (
          <Box key={zone} bgcolor="white" p={3}>
            <TableContainer component={Paper}>
              <Typography variant="h6" gutterBottom>
                {zone[0]}
              </Typography>
              <Table aria-label="news table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr No.</TableCell>
                    <TableCell>Club Name</TableCell>
                    <TableCell>Club Id</TableCell>
                    <TableCell>Last Activity Report</TableCell>
                    <TableCell>Admin Report of Current Month</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {zone[1]?.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{row.clubName}</TableCell>
                      <TableCell>{row.clubId}</TableCell>
                      <TableCell>
                        {row?.latestActivity &&
                          new Date(row?.latestActivity).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {row?.currentAdminReport === 1 ? "yes" : "no"}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            handleClickOpen(row.clubId);
                          }}
                        >
                          View Activity
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Dialog */}
          </Box>
        ))}
      </Box>{" "}
      <Dialog maxWidth={"none"} open={open} onClose={handleClose}>
        <DialogTitle>Activities</DialogTitle>
        <DialogContent>
          <Box
            // bgcolor={"white"}
            p={3}
            borderRadius={4}
          >
            <Typography variant="h6">Past Activities</Typography>
            <Grid container spacing={2} style={{ marginTop: "16px" }}>
              <Grid item lg={6} style={{ textAlign: "left" }}>
                <TextField
                  id="search"
                  label="Search by Activity Type"
                  variant="outlined"
                  size="small"
                  onChange={handleSearchInputChange}
                />
              </Grid>
              <Grid item lg={6} style={{ textAlign: "right" }}>
                <IconButton aria-label="edit" color="primary">
                  <CloudDownloadIcon
                    onClick={() => {
                      dispatch(downloadClubActivity(reportedActivity));
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
            <TableContainer style={{ marginTop: "16px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Sr No</TableCell>
                    <TableCell align="left">Activity</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">City</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Hours</TableCell>
                    <TableCell align="center">Media Coverage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell align="center" component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{row.activityType}</TableCell>
                      <TableCell align="left">{row.activityTitle}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.lionHours}</TableCell>
                      <TableCell align="center">{row.mediaCoverage}</TableCell>
                      {/* <TableCell align="center">
                        <IconButton
                          aria-label="edit"
                          color="primary">
                          <CloudDownloadIcon />
                        </IconButton>
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
