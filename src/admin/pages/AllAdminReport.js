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
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AllAdminReport() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club ID</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={handleClickOpen}
                      color="success">
                      <CheckBoxIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="error">
                      <DisabledByDefaultIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Dialog */}

          <Dialog
            open={open}
            onClose={handleClose}>
            <DialogTitle>Optional sizes</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}

export default AllAdminReport;
