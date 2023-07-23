import React, { useState, useRef, useEffect } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  ButtonGroup,
  InputAdornment,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Edit, Delete, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, getReportedActivity } from "../../actions/activity";

import {
  addActivity,
  getActivity,
  getCategory,
  getPlaceHolder,
  getSubtype,
  getClubDirector,
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

const PastActivity = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(getReportedActivity());
  }, []);

  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const theme = useTheme();
  const fileUploadRef = useRef();
  const [activity, setActivity] = useState(activityDetail);
  const [activityId,setActivityId] = useState(0);
  const [personName, setPersonName] = React.useState([]);
  const club_directors = useSelector((state) => state.activity.club_directors);
  const type = useSelector((state) => state.activity.type);
  const subType = useSelector((state) => state.activity.subType);
  const category = useSelector((state) => state.activity.category);
  const placeHolder = useSelector((state) => state.activity.placeHolder);

  useEffect(() => {
    dispatch(getActivity());
    dispatch(getClubDirector());
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
    formData.append("cabinetOfficers", personName);
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
    setActivity({ ...activity, image: img });
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

  // Delete Dialog
  const [openDel, setOpenDel] = React.useState(false);
  const handleClickOpenDel = (activityId) => {
    setOpenDel(true);
    setActivityId(activityId)
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };
  return (
    <>
      <Box bgcolor={"white"} p={3} borderRadius={4}>
        <Typography variant="h6">Past Activities</Typography>
        <Grid
          container
          justifyContent="space-between"
          spacing={3}
          style={{ marginTop: "16px" }}
        >
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <TextField
              id="search"
              label="Search by Activity Type"
              variant="outlined"
              size="small"
              onChange={handleSearchInputChange}
            />
          </Grid>
        </Grid>
        <TableContainer style={{ marginTop: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Activity Id</TableCell>
                <TableCell align="left">Activity</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="center">Media Coverage</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center" component="th" scope="row">
                    {row.activityId}
                  </TableCell>
                  <TableCell align="left">{row.activityType}</TableCell>
                  <TableCell align="left">{row.activityTitle}</TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.lionHours}</TableCell>
                  <TableCell align="center">{row.mediaCoverage}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={()=>{handleClickOpenDel(row.activityId)}}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Delete Dialog */}
      <Dialog
        open={openDel}
        onClose={()=>{handleCloseDel()}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete? This action cannot be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleCloseDel()}}>Cancel</Button>
          <Button
            onClick={() => {
              handleCloseDel();
              dispatch(deleteActivity(activityId));
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* /Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth={"none"}>
        <DialogTitle>Edit Past Activities</DialogTitle>
        <DialogContent>
          <form onSubmit={submitDetails}>
            <Box bgcolor="white" p={3} borderRadius={4} width={"900px"}>
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
                  <Typography>Cabinet Officer Attended</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <TextField
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
            /> */}
                  <FormControl sx={{ m: 1, width: "100%" }}>
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
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
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
                    <img
                      src={activity.image.preview}
                      width="100"
                      height="100"
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid item xs={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.btn}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Box marginLeft={1}>
                    <Button
                      type="button"
                      variant="outlined"
                      className={classes.btn}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PastActivity;
