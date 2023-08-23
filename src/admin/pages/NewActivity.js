import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { Box, MenuItem, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { API_URL } from "../../api";

import {
  addActivity,
  getActivity,
  getCategory,
  getPlaceHolder,
  getSubtype,
  getClubDirector,
  editActivity,
} from "../../actions/activity";
import { ACTIVITY_PLACEHOLDER } from "../../constants/actionTypes";

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
    alignContent: "flex-end",
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
const media = [
  {
    id: 1,
    name: "True",
  },
  { id: 2, name: "False" },
];
const activityDetail = {
  amount: "",
  activityTitle: "",
  city: "",
  date: "",
  cabinetOfficers: "",
  description: "",
  lionHours: "",
  mediaCoverage: "",
  activityType: "",
  activitySubType: "",
  activityCategory: "",
  placeholder: "",
  place: "",
  image1: { preview: "", data: "" },
  image2: { preview: "", data: "" },
};
export default function NewActivity({ pastActivityData, isEdit = false }) {
  console.log(pastActivityData, isEdit);

  if (isEdit) {
    pastActivityData = {
      ...pastActivityData,
      image1: { preview: "", data: "" },
      image2: { preview: "", data: "" },
    };
    pastActivityData.date = pastActivityData.date.split("T")[0];
  }

  const classes = useStyles();
  const theme = useTheme();
  const fileUploadRef = useRef();
  const [activity, setActivity] = useState(
    isEdit ? pastActivityData : activityDetail
  );
  const [personName, setPersonName] = React.useState(
    isEdit ? pastActivityData?.cabinetOfficers?.split(",") : []
  );
  const club_directors = useSelector((state) => state.activity.club_directors);
  const type = useSelector((state) => state.activity.type);
  const subType = useSelector((state) => state.activity.subType);
  const category = useSelector((state) => state.activity.category);
  const placeHolderLabel = useSelector((state) => state.activity.placeHolder);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getActivity());
    dispatch(getClubDirector());

    if (isEdit) {
      // we are selected types in advance for the dropdown
      dispatch(getSubtype(activity.activityType));
      dispatch(getCategory(activity.activitySubType,activity.activityType));
      dispatch(getPlaceHolder(activity.activityCategory,activity.activityType,activity.activitySubType));
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === "activityType") {
        newData.activityCategory = "";
        newData.activitySubType = "";
        newData.placeholder = "";
        dispatch({ type: ACTIVITY_PLACEHOLDER, payload: "" });
      }
      if (name === "activitySubType") {
        newData.placeholder = "";
        newData.activityCategory = "";
        dispatch({ type: ACTIVITY_PLACEHOLDER, payload: "" });
      }
      return newData;
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("amount", activity.amount);
    formData.append("activityTitle", activity.activityTitle);
    formData.append("city", activity.city);
    formData.append("date", activity.date);
    formData.append("cabinetOfficers", personName);
    formData.append("description", activity.description);
    formData.append("lionHours", activity.lionHours);
    formData.append("mediaCoverage", activity.mediaCoverage);
    formData.append("activityType", activity.activityType);
    formData.append("activitySubType", activity.activitySubType);
    formData.append("activityCategory", activity.activityCategory);
    formData.append("placeholder", activity.placeholder);
    formData.append("place", activity.place);
    formData.append("image", activity?.image1?.data);
    formData.append("image", activity?.image2?.data);

    if (isEdit) {
      formData.append("activityId", activity.activityId);
      dispatch(editActivity(formData,navigate));
    } else {
      dispatch(addActivity(formData));
    }
    setActivity(activityDetail);
    setPersonName([]);
  };

  // Function to handle file read
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size
    if (file.size > 500000) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Please choose a file smaller than 500kb",
          status: 400,
        },
      });
      event.target.value = "";
      return;
    }
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg"
    ) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: "file type not supported", status: 400 },
      });
      event.target.value = "";
      return;
    }

    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setActivity({ ...activity, [event.target.name]: img });
  };

  // Select
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Club Director",
    "Club Treasurer ",
    "Lion Member",
    "Club Secretary",
    "Club President",
    "Zone Chairperson ",
    "Region Chairperson",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <form onSubmit={submitDetails}>
      <Box bgcolor="white" p={3} borderRadius={4}>
        <Typography variant="h5" gutterBottom className={classes.heading}>
          Basic Activity Information
        </Typography>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Name </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              type="text"
              id="activityTitle"
              value={activity.activityTitle}
              name="activityTitle"
              label="Enter Activity Title"
              fullWidth
              autoComplete="given-name"
              onChange={handleChange}
              variant="standard"
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Cabinet Officer Attended</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-chip-label">
                Select Cabinet Officer
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChangeSelect}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Select Cabinet Officer"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {club_directors.map((name) => (
                  <MenuItem
                    key={name.fullName}
                    value={name.fullName}
                    style={getStyles(name, personName, theme)}
                  >
                    {name.fullName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Date</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              id="date"
              value={activity.date}
              name="date"
              label="Select Activity Date"
              fullWidth
              variant="standard"
              type="date"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Type</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="activityType"
              value={activity.activityType}
              select
              fullWidth
              required
              name="activityType"
              label=" Select Activity Type "
              onChange={(e) => {
                dispatch(getSubtype(e.target.value));
                handleChange(e);
              }}
              className={classes.label}
            >
              {type.map((getType, index) => (
                <MenuItem key={index} value={getType.type}>
                  {getType.type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Subtype</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="activitySubType"
              select
              fullWidth
              required
              name="activitySubType"
              label=" Activity Subtype "
              value={activity.activitySubType}
              onChange={(e) => {
                dispatch(getCategory(e.target.value,activity.activityType));
                handleChange(e);
              }}
              className={classes.label}
            >
              {subType.map((type, index) => (
                <MenuItem key={index} value={type.subtype}>
                  {type.subtype}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Category</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="activityCategory"
              select
              fullWidth
              required
              name="activityCategory"
              label="Activity Category Type "
              value={activity.activityCategory}
              onChange={(e) => {
                handleChange(e);
                dispatch(getPlaceHolder(e.target.value,activity.activityType,activity.activitySubType));
              }}
              className={classes.label}
            >
              {category.map((cat, index) => (
                <MenuItem key={index} value={cat.category}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: "2rem" }}
          className={classes.heading}
        >
          Detailed Activity Information
        </Typography>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Place</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              id="place"
              name="place"
              type="text"
              value={activity.place}
              label="Enter Activity Place"
              fullWidth
              variant="standard"
              onChange={handleChange}
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>People Served</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              id="placeholder"
              name="placeholder"
              label={placeHolderLabel}
              fullWidth
              type="number"
              disabled={isEdit ? false : !placeHolderLabel}
              value={activity.placeholder}
              variant="standard"
              onChange={handleChange}
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity City</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              id="city"
              name="city"
              type="text"
              value={activity.city}
              label="Enter Activity Place City"
              fullWidth
              variant="standard"
              onChange={handleChange}
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Amount Spent</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              id="amount"
              name="amount"
              type="number"
              value={activity.amount}
              label="Enter Amount Spent"
              fullWidth
              variant="standard"
              onChange={handleChange}
              className={classes.label}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Lion Hours</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              required
              id="lionHours"
              name="lionHours"
              type="number"
              value={activity.lionHours}
              label="Enter Lion Hours"
              fullWidth
              onChange={handleChange}
              variant="standard"
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Media Coverage</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="mediaCoverage"
              select
              required
              label=" Media Coverage"
              value={activity.mediaCoverage}
              fullWidth
              name="mediaCoverage"
              onChange={handleChange}
            >
              {media?.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography>Activity Description</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="description"
              name="description"
              label="Description"
              variant="standard"
              value={activity.description}
              onChange={handleChange}
              fullWidth
              className={classes.label}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6} className={classes.title}>
            <Typography sx={{ margin: "auto 0" }}>Upload Images</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              ref={fileUploadRef}
              type="file"
              id="image-upload"
              name="image1"
              label="Upload Photo less than 500kb"
              fullWidth
              required={!isEdit}
              margin="normal"
              className={classes.label}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/jpeg,image/png,image/jpg",
              }}
              onChange={handleFileRead}
              onClick={() => fileUploadRef.current.click()}
            />{" "}
            <TextField
              ref={fileUploadRef}
              type="file"
              id="image-upload"
              name="image2"
              label="Upload Photo less than 500kb"
              fullWidth
              margin="normal"
              className={classes.label}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/jpeg,image/png,image/jpg",
              }}
              onChange={handleFileRead}
              onClick={() => fileUploadRef.current.click()}
            />
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {(activity.image1?.preview || activity?.image_path) && (
                <Box>
                  <img
                    src={
                      activity.image1?.preview
                        ? activity?.image1?.preview
                        : API_URL + activity?.image_path
                    }
                    width="100"
                    height="100"
                    alt="Preview"
                  />
                  <Typography textAlign={"center"}>Image 01</Typography>
                </Box>
              )}
              {(activity.image2?.preview || activity?.image_path2) && (
                <Box>
                  <img
                    src={
                      activity.image2?.preview
                        ? activity?.image2?.preview
                        : API_URL + activity?.image_path2
                    }
                    width="100"
                    height="100"
                    alt="Preview"
                  />
                  <Typography textAlign={"center"}>Image 02</Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" gap={4}>
          <Grid item>
            <Button type="submit" variant="contained" className={classes.btn}>
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button type="button" variant="outlined" className={classes.btn}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
