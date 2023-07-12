import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Divider,
  Typography,
  Icon,
  Box,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";

function AllAdminReport() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}>
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", fontSize: "24px" }}>
          {" "}
          All Admin Reporting{" "}
        </Typography>
        <Box
          bgcolor="white"
          p={3}>
          <TableContainer component={Paper}>
            <Table aria-label="news table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club Id</TableCell>
                  <TableCell>July 2023</TableCell>
                  <TableCell>August 2023</TableCell>
                  <TableCell>September 2023</TableCell>
                  <TableCell>October 2023</TableCell>
                  <TableCell>November 2023</TableCell>
                  <TableCell>December 2023</TableCell>
                  <TableCell>January 2024</TableCell>
                  <TableCell>February 2024</TableCell>
                  <TableCell>March 2024</TableCell>
                  <TableCell>April 2024</TableCell>
                  <TableCell>May 2024</TableCell>
                  <TableCell>June 2024</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* <TableRow key={row.id}>
                    <TableCell
                      component="th"
                      scope="row">
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
                        onClick={handleClickOpen}>
                        View Activity
                      </Button>
                    </TableCell>
                  </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Dialog */}
        </Box>
      </Box>
    </>
  );
}

export default AllAdminReport;
