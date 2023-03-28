import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button } from "@mui/material";
import { addUser } from "../../actions/user";

const useStyles=makeStyles({
 
  Btn:{
    '& .css-12vebo6-MuiButtonBase-root-MuiButton-root':{
      borderRadius: "0px 8px 0px 8px",
      padding: "10px 16px 10px 16px",
    },
    '& .css-731omg-MuiButtonBase-root-MuiButton-root':{
      borderRadius: "0px 8px 0px 8px",
      padding: "10px 16px 10px 16px",
    }
  }
  ,
  box:{
    margin:"5%",
    backgroundImage:"url('assets/img/bg.avif')",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",

   
  }
})

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Transgender" },
 
];

const userDetail = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  email: "",
  phone: "",
  spouseName: "",
  dob: "",
  occupation: "",
  gender: "",
};
export default function Profile() {
  const classes=useStyles();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(userDetail);
  const dispatch=useDispatch();

const validate=()=>{

  let temp = {...errors};
  if ('firstName' in userDetail)
    temp.firstName = userDetail.firstName ? '' : 'This field is required.';
  if ('lastName' in userDetail)
    temp.lastName=userDetail.lastName ? '': 'This field is required.';

    if ('email' in userDetail) {
      temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetail.email)
        ? ''
        : 'Email is not valid.';
    }

  if ('phone' in userDetail)
    temp.phone =
    userDetail.phone.length > 6
        ? ''
        : 'Minimum 6 numbers required.';
    setErrors(temp);
   return Object.values(temp).every((x) => x === '');

  };

  useEffect(()=>{
    dispatch(addUser);
  },[dispatch,user])
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitDetails = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addUser(user));
    }
  };

  return (
   <div className={classes.root}>
     <Box
      bgcolor="white"
      p= {4}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={submitDetails}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
      mx="auto"
      marginLeft="5%"
      marginRight="5%"
      marginTop= "5%"
      borderRadius="5px"  
      className={classes.box}
    >
      <Typography variant="h3">Profile</Typography>
      
        <Grid container spacing= {4}>
          <Grid item xs={12} sm= {4}>
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
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="lastName"
              value={user.lastName}
              name="lastName"
              label="Enter last Name"
              fullWidth
              onChange={handleChange}
              variant="standard"
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
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
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="phone"
              type="number"
              name="phone"
              value={user.phone}
              label="Enter Phone Number"
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
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
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="spouseName"
              value={user.spouseName}
              name="spouseName"
              label="Enter spouse Name"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
         
          <Grid item xs={12} sm= {4}>
            <TextField
              required
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
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="address1"
              value={user.address1}
              name="address1"
              label="Enter Address line 1"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="address2"
              value={user.address2}
              name="address2"
              label="Enter address line 2"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          
          <Grid item xs={12} sm= {4}>
            <TextField
              
              id="city"
              name="city"
              value={user.city}
              label="Enter City"
              fullWidth
              required
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="state"
              name="state"
              value={user.state}
              label="Enter state"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
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
  
          <Grid item xs={12} sm= {4}>
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

        <Grid container justifyContent="center" marginTop={2} className={classes.Btn}>
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
   </div>
  );
}
