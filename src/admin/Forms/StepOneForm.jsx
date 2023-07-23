import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UPDATE_REPORT } from "../../constants/actionTypes";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginTop: "16px",
    maxWidth: "max-content",
  },
  checkbox: {
    padding: 0,
  },
  tbCont: {
    marginTop: "1rem",
  },
}));

const StepOneForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.adminReporting.adminReports);

  return (
    <div className={classes.tbCont}>
      <Typography variant="h5" gutterBottom>
        Step One
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
                  selected,
                  count,
                  maxMultiply,
                  srNo,
                  adminstars,
                },
                index
              ) =>
                index + 1 <= 35 && (
                  <TableRow key={id}>
                    <TableCell sx={{ fontWeight: "bold" }}>{srNo}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{adminstars}</TableCell>

                    <TableCell sx={{ width: "20px" }}>
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

                        //
                        // <TextField
                        //   disabled={multiple === 0}
                        //   type="number"
                        //   value={count}
                        //   name="counter"
                        //   onChange={(event) => {
                        //     event.target.value >= 0 &&
                        //       dispatch({
                        //         type: UPDATE_REPORT,
                        //         payload: {
                        //           name: event.target.name,
                        //           count: event.target.value,
                        //           id,
                        //         },
                        //       });
                        //   }}
                        // />
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
    </div>
  );
};
export default StepOneForm;
