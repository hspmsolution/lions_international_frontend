import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { Box, MenuItem, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  addActivity,
  getActivity,
  getCategory,
  getPlaceHolder,
  getSubtype,
} from "../../actions/activity";
import { ACTIVITY_PLACEHOLDER } from "../../constants/actionTypes";

const useStyles = makeStyles({
  heading: {
    width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
  },
  grid: {
    marginTop: "0px",
    width: "80%",
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
  },
  label: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "1em",
    },
  },
  btn: {
    marginTop: "15px",
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
  placeHolderValue: "",
  place: "",
  image: { preview: "", data: "" },
};
export default function NewActivity() {
  const classes = useStyles();
  const fileUploadRef = useRef();
  const [activity, setActivity] = useState(activityDetail);
  const type = useSelector((state) => state.activity.type);
  const subType = useSelector((state) => state.activity.subType);
  const category = useSelector((state) => state.activity.category);
  const placeHolder = useSelector((state) => state.activity.placeHolder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivity());
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === "activityType") {
        newData.activityCategory = "";
        newData.activitySubType = "";
        newData.placeHolderValue = "";
        dispatch({ type: ACTIVITY_PLACEHOLDER, payload: "" });
      }
      if (name === "activitySubType") {
        newData.placeHolderValue = "";
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
    formData.append("cabinetOfficers", activity.cabinetOfficers);
    formData.append("description", activity.description);
    formData.append("lionHours", activity.lionHours);
    formData.append("mediaCoverage", activity.mediaCoverage);
    formData.append("activityType", activity.activityType);
    formData.append("activitySubType", activity.activitySubType);
    formData.append("activityCategory", activity.activityCategory);
    formData.append("placeHolderValue", activity.placeHolderValue);
    formData.append("place", activity.place);
    formData.append("image", activity.image.data);

    dispatch(addActivity(formData));
    setActivity(activityDetail);
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
    if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg") {
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
    setActivity({ ...activity, image: img });
  };

  return (
    <form onSubmit={submitDetails}>
      <Box bgcolor="white" p={3} borderRadius={4}>
        <Typography variant="h5" gutterBottom className={classes.heading}>
          Basic Activity Information
        </Typography>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Name </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Cabinet Officer Name</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="cabinetOfficers"
              value={activity.cabinetOfficers}
              name="cabinetOfficers"
              label="Enter Cabinet Officer Name"
              fullWidth
              onChange={handleChange}
              variant="standard"
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Date</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Type</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="activityType"
              value={activity.activityType}
              select
              fullWidth
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Subtype</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="activitySubType"
              select
              fullWidth
              name="activitySubType"
              label=" Activity Subtype "
              value={activity.activitySubType}
              onChange={(e) => {
                dispatch(getCategory(e.target.value));
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Category</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="activityCategory"
              select
              fullWidth
              name="activityCategory"
              label="Activity Category Type "
              value={activity.activityCategory}
              onChange={(e) => {
                handleChange(e);
                dispatch(getPlaceHolder(e.target.value));
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
          style={{ marginTop: "16px" }}
          className={classes.heading}
        >
          Detailed Activity Information
        </Typography>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Place</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>People Served</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="placeholder"
              name="placeHolderValue"
              label={placeHolder}
              fullWidth
              type="number"
              disabled={!placeHolder}
              value={activity.placeHolderValue}
              variant="standard"
              onChange={handleChange}
              className={classes.label}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity City</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Amount Spent</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Lion Hours</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Media Coverage</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Activity Description</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={6} sm={6} className={classes.title}>
            <Typography>Upload Images</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              ref={fileUploadRef}
              type="file"
              id="image-upload"
              name="image"
              label="Upload Photo less than 500kb"
              fullWidth
              required
              margin="normal"
              className={classes.label}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/jpeg,image/png",
              }}
              onChange={handleFileRead}
              onClick={() => fileUploadRef.current.click()}
            />
            {activity.image.preview && (
              <img src={activity.image.preview} width="100" height="100" />
            )}
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={2}>
            <Button type="submit" variant="contained" className={classes.btn}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Box marginLeft={1}>
              <Button type="button" variant="outlined" className={classes.btn}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
