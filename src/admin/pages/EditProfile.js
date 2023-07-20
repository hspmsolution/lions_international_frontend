import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, MenuItem, Button } from "@mui/material";
import { updateMember, memberProfile } from "../../actions/member";
import { UPDATE_MEMBER_PROFILE, CLIENT_MSG } from "../../constants/actionTypes";
import { API_URL } from "../../api";

const useStyles = makeStyles({
  Btn: {
    "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",
      padding: "10px 16px 10px 16px",
    },
    "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",
      padding: "10px 16px 10px 16px",
    },
  },
  box: {
    margin: "1em",
    backgroundImage: "url('/assets/img/bg.avif')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Transgender" },
];

export default function Profile() {
  const classes = useStyles();
  const fileUploadRef = useRef();
  const [imageData, setImageData] = useState({ preview: "", data: "" });
  const user = useSelector((state) => state.auth.memberProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(memberProfile());
  }, []);

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
    setImageData(img);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: UPDATE_MEMBER_PROFILE,
      payload: { name, value },
    });
  };
  const submitDetails = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePicture", imageData.data);
    formData.append("firstName", user.firstName);
    formData.append("middleName", user.middleName);
    formData.append("lastName", user.lastName);
    formData.append("address1", user.address1);
    formData.append("address2", user.address2);
    formData.append("city", user.city);
    formData.append("state", user.state);
    formData.append("postalCode", user.postalCode);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("spouseName", user.spouseName);
    formData.append("dob", user.dob);
    formData.append("occupation", user.occupation);
    formData.append("gender", user.gender);

    dispatch(updateMember(formData, navigate));
  };

  return (
    <div className={classes.root}>
      <form onSubmit={submitDetails}>
        <Box
          bgcolor="white"
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          borderRadius="5px"
          className={classes.box}
        >
          <Typography varient='h6'sx={{
              color: "#003895",
              fontWeight:'700',
              fontSize:'1.5em'

          }} >Profile</Typography>
          {/* <Card
            sx={{
              maxWidth: 345,
            }}
          >
            <Stack direction="row" spacing={2} alignContent="center">
              <Avatar
                alt={user.firstName.charAt(0)}
                src={API_URL+user.profilePicture}
                sx={{ width: 56, height: 56 }}
              />
            </Stack>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Name:{user.firstName + " " + user.lastName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                club Id:{user.clubId}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                club Name:{user.clubName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Designation:{user.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Region Name:{user.regionName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Zone Name:{user.zoneName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
          </Card> */}

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="firstName"
                value={user.firstName}
                name="firstName"
                label="Enter First Name"
                fullWidth
                autoComplete="given-name"
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="middleName"
                value={user.middleName}
                name="middleName"
                label="Enter Middle Name"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="lastName"
                value={user.lastName}
                name="lastName"
                label="Enter last Name"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="email"
                type="email"
                value={user.email}
                name="email"
                label="Enter email"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="phone"
                type="tel"
                name="phone"
                value={user.phone}
                label="Enter Phone Number"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="occupation"
                name="occupation"
                label="Enter Occupation"
                fullWidth
                value={user.occupation}
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="spouseName"
                value={user.spouseName}
                name="spouseName"
                label="Enter spouse Name"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                // required
                id="dob"
                value={user.dob}
                name="dob"
                label="Enter Date Of Birth"
                fullWidth
                variant="standard"
                type="date"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="address1"
                value={user.address1}
                name="address1"
                label="Enter Address line 1"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="address2"
                value={user.address2}
                name="address2"
                label="Enter address line 2"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="city"
                name="city"
                value={user.city}
                label="Enter City"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="state"
                name="state"
                value={user.state}
                label="Enter state"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="postalCode"
                name="postalCode"
                type="number"
                value={user.postalCode}
                label="Enter postalCode"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="gender"
                select
                label="Select Gender"
                value={user.gender}
                fullWidth
                name="gender"
                onChange={handleChange}
              >
                {gender?.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              ref={fileUploadRef}
              type="file"
              id="image-upload"
              name="profilePicture"
              label="Upload Photo less than 500kb"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/jpeg,image/png",
              }}
              onChange={handleFileRead}
              onClick={() => fileUploadRef.current.click()}
            />
            {(imageData.preview || user?.profilePicture) && (
              <img src={imageData.preview || API_URL+user?.profilePicture} width="100" height="100" />
            )}
          </Grid>

          <Grid
            container
            justifyContent="center"
            marginTop={2}
            className={classes.Btn}
          >
            <Grid item xs={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Box marginLeft={3}>
                <Button type="button" variant="outlined">
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}
