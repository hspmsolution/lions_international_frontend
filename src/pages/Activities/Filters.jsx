import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import { getActivity } from "../../actions/activity";
import { getClubs } from "../../actions/clubs";
import { ACTIVITY_FILTER, RESET_FILTER } from "../../constants/actionTypes";
import { events } from "../../actions/client";

const useStyles = makeStyles({
  heading: {
    width: "fit-content",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
    "@media (max-width: 600px)": { width: "100%", textAlign: "center" },
  },
  grid: {
    marginTop: "0px",
    width: "80%",
    "@media (max-width: 600px)": { width: "100%" },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "flex--end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#003895",
    fontSize: "0.6em",
    "@media (max-width: 600px)": {
      alignContent: "flex-start",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  label: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "1em",
    },
  },
  btn: {
    margin: "1rem",
    "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
    "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
  },
});

export default function Filters() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activityType = useSelector((state) => state.activity.type);
  const clubList = useSelector((state) => state.clubs.clubList);
  const filters = useSelector((state) => state.activity.activityFilter);
  const handleChange = (name, value) => {
    dispatch({
      type: ACTIVITY_FILTER,
      payload: { name, value },
    });
  };

 const applyFilters = () => {
    filters.page = 1;
    dispatch(events(filters));
  }

  const resetFilters = () => {
    dispatch({type:RESET_FILTER})
    dispatch(events({
      club:"",
      type:"",
      from:"",
      to:"",
      page:1
    }))          
  }
  useEffect(() => {
    dispatch(getActivity());
    dispatch(getClubs());
  }, []);

  return (
    <>
      <Box
        bgcolor="white"
        p={3}
        margin={"1rem 1rem"}
        borderRadius={4}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          container
          spacing={1}
          className={classes.grid}
          margin={"1rem 1rem"}
        >
          <Grid item xs={12} lg={6}>
            <Typography variant="h6" gutterBottom className={classes.heading}>
              Select Filters
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.grid} margin={"1rem 1rem"}>
          <Grid item xs={12} lg={10}>
            <Autocomplete
              id="club"
              name="club"
              options={clubList}
              value={filters.club}
              getOptionLabel={(option) => option?.clubName || ""}
              onChange={(event, newValue) => handleChange("club", newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Club"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.grid} margin={"1rem 1rem"}>
          <Grid item xs={12} lg={10}>
            <Autocomplete
              id="activityType"
              name="type"
              options={activityType}
              value={filters.type}
              getOptionLabel={(option) => option?.type || ""}
              onChange={(event, newValue) => handleChange("type", newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Activity Type"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.grid} margin={"1rem 1rem"}>
          <Grid item xs={12} lg={10}>
            <TextField
              id="fromDate"
              name="from"
              value={filters.from}
              label="From Date"
              fullWidth
              variant="standard"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange("from", e.target.value)}
              className={classes.label}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.grid} margin={"1rem 1rem"}>
          <Grid item xs={12} lg={10}>
            <TextField
              id="toDate"
              name="to"
              value={filters.to}
              label="To Date"
              fullWidth
              variant="standard"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange("to", e.target.value)}
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.grid} margin={"1rem 1rem"}>
          <Grid item>
            <Button
              variant="contained"
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.grid} margin={"1rem 1rem"}>
          <Grid item>
            <Button onClick={resetFilters}
            variant="contained">Reset Filters</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
