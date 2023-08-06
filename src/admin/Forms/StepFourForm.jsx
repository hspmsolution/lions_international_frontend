import React, { useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Checkbox,
  Stack,
  TextField,
  Box,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UPDATE_REPORT, CLIENT_MSG,ADMIN_PDF} from "../../constants/actionTypes";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    // maxHeight: 400,
  },
  checkbox: {
    padding: 0,
  },
}));

const StepFourForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileUploadRef = useRef();
  const reports = useSelector((state) => state.adminReporting.adminReports);

  // Function to handle file read
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size 5mb
    if (file.size > 5000000) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Please choose a file smaller than 2MB",
          status: 400,
        },
      });
      event.target.value = "";
      return;
    }
    dispatch({type:ADMIN_PDF,payload:file})
    // const img = {
    //   preview: URL.createObjectURL(event.target.files[0]),
    //   data: event.target.files[0],
    // };
    // setActivity({ ...activity, image: img });
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Step Four
      </Typography>

      <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Sr no</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Checkbox</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {reports.map(
              (
                {
                  id,
                  title,
                  multiple,
                  maxMultiply,
                  selected,
                  count,
                  srNo,
                  adminstars,
                },
                index
              ) =>
                index + 1 > 105 &&
                index + 1 <= 140 && (
                  <TableRow key={id}>
                    <TableCell>{srNo}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{adminstars}</TableCell>
                    <TableCell>
                      {multiple === 0 ? (
                        ""
                      ) : (
                        <FormControl sx={{ width: "100px" }}>
                          <InputLabel id="demo-simple-select-label">
                            Count
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={count}
                            label="Count"
                            name="counter"
                            onChange={(event) => {
                              event.target.value >= 0 &&
                                dispatch({
                                  type: UPDATE_REPORT,
                                  payload: {
                                    name: event.target.name,
                                    count: event.target.value,
                                    id,
                                  },
                                });
                            }}
                          >
                            {[...Array(maxMultiply).keys()].map((value) => (
                              <MenuItem key={value} value={value + 1}>
                                {value + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </TableCell>

                    <TableCell className={classes.checkbox}>
                      {adminstars === 0 ? (
                        ""
                      ) : (
                        <Checkbox
                          checked={selected}
                          name="checkbox"
                          onChange={(event) => {
                            dispatch({
                              type: UPDATE_REPORT,
                              payload: {
                                name: event.target.name,
                                selected: event.target.checked,
                                id,
                              },
                            });
                          }}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <TextField
          ref={fileUploadRef}
          type="file"
          id="image-upload"
          name="pdf"
          label="Upload PDF upto 5MB"
          margin="normal"
          className={classes.label}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            accept: ".pdf,application/pdf",
          }}
          onChange={handleFileRead}
          onClick={() => fileUploadRef.current.click()}
        />
      </Box>
    </div>
  );
};
export default StepFourForm;
