import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
  Button,
  Dialog,
  DialogActions,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { getZone } from "../../actions/clubs";
import { zoneActivity } from "../../actions/activity";
import AllAdminReport from "./AllAdminReport";
import { clubsReporting } from "../../actions/adminReports";


const useStyles = makeStyles({
  title: {
    alignItems: "center",
    color: "#003895",
  },
});

export default function ZonalView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const zoneData = useSelector((state) => state.clubs.zone);
  const [openReporting, setOpenReporting] = React.useState(false);

   
  const handleClickReporting = (clubId) => {
    dispatch(clubsReporting(clubId));
    setOpenReporting(true);
    };
  
    const handleCloseReporting = () => {
      setOpenReporting(false);
    };


  useEffect(() => {
    dispatch(getZone());
  }, []);

  return (
    <>
      <Box bgcolor="white" p={3} borderRadius={4} marginTop={10}>
        <Typography variant="h4" gutterBottom className={classes.title}>
          Zonal View:{" "}
        </Typography>
        <Typography variant="h5" gutterBottom className={classes.title}>
          {" "}
          {zoneData[0]?.regionName},{zoneData[0]?.zoneName}
        </Typography>
        <TableContainer component={Paper}>
          <Button
            onClick={() => {
              dispatch(zoneActivity());
            }}
            variant="outlined"
          >
            Download All Zone Activities
          </Button>
          <Table aria-label="news table">
            <TableHead>
              <TableRow>
                <TableCell>Sr No.</TableCell>
                <TableCell>Club Name</TableCell>
                <TableCell>Club Id</TableCell>
                <TableCell>Last Activity Report</TableCell>
                <TableCell>Admin Reports</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {zoneData?.map((row, index) => (
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
                  <Button
                          variant="outlined"
                          onClick={() => {
                            handleClickReporting(row.clubId);
                          }}
                        >
                          View Reporting
                        </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

            {/* Montly reporting dialog */}
            <Dialog
        open={openReporting}
        onClose={handleCloseReporting}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"none"}
      >
        <AllAdminReport/>
        <DialogActions>
          <Button onClick={handleCloseReporting}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
