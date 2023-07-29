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
  Button
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { getZone } from "../../actions/clubs";
import { zoneActivity } from "../../actions/activity";


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
                <TableCell>Admin Report of Current Month</TableCell>
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
                    {row?.currentAdminReport === 1 ? "yes" : "no"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
