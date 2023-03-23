import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider, InputAdornment } from "@mui/material";
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
})

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Transgender" },
 
];


export default function Profile() {
  const classes=useStyles();
  const message = useSelector((state) => state.auth.message?.info);
  const [user,setUser]=useState();
  const [disabled, setDisabled] = useState(false);
  const dispatch=useDispatch();

  const formik = useFormik({
    initialValues:{
      firstName: "",
      middleName: "",
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
    },
    validationSchema:Yup.object({
      firstName:Yup.string().max(255).required('First Name is required'),
      lastName:Yup.string().max(255).required('Last Name is required'),
      phone:Yup.number().integer().required("Phone Number is required"),
      occupation:Yup.string().max(255).required('occupation is required'),
      dob:Yup.date().required('Date of birth is required'),
    }),
    onSubmit:(data)=>{
      console.log(data);
     dispatch(addUser(data));
    }
  });
  // useEffect(()=>{
  //   dispatch(addUser);
  // },[])

  useEffect(() => {
    if (message) setDisabled(false);
  }, [message]);

  return (
    <Box
      bgcolor="white"
      p= {4}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage="url('assets/img/bg2.jpg')"
      // boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
      mx="auto"
      marginLeft="5%"
      marginRight="5%"
      marginTop= "5%"
      borderRadius="5px"  
    >
      <Typography variant="h3">Profile</Typography>
      <React.Fragment>
        <Grid container spacing= {4}>
          <Grid item xs={12} sm= {4}>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              required
              helperText={formik.touched.firstName && formik.errors.firstName}
              id="firstName"
              value={formik.values.firstName}
              name="firstName"
              type="text"
              label="Enter First Name"
              autoComplete="given-name"
              onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              required
              helperText={formik.touched.lastName && formik.errors.lastName}
              id="lastName"
              value={formik.values.lastName}
              name="lastName"
              label="Enter last Name"
              
              onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="email"
              type="email"
              value={formik.values.email}
              name="email"
              label="Enter email"
              fullWidth
                onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
               error={Boolean(formik.touched.phone && formik.errors.phone)}
               fullWidth
               required
               helperText={formik.touched.phone && formik.errors.phone}
              id="phone"
              type="number"
              name="phone"
              value={formik.values.phone}
              label="Enter Phone Number"
              
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              error={Boolean(formik.touched.occupation && formik.errors.occupation)}
              fullWidth
              required
              helperText={formik.touched.occupation && formik.errors.occupation}
              id="occupation"
              name="occupation"
              label="Enter Occupation"
              
              value={formik.values.occupation}
              variant="standard"
                onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
             
              id="spouseName"
              value={formik.values.spouseName}
              name="spouseName"
              label="Enter spouse Name"
              fullWidth
                onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
         
          <Grid item xs={12} sm= {4}>
            <TextField
              error={Boolean(formik.touched.dob && formik.errors.dob)}
              fullWidth
              required
              helperText={formik.touched.dob && formik.errors.dob}
              id="dob"
              value={formik.values.dob}
              name="dob"
              label="Enter Date Of Birth"
             
              variant="standard"
              type="date"
                onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              required
              id="address1"
              value={formik.values.address1}
              name="address1"
              label="Enter Address line 1"
              fullWidth
                onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              
              id="address2"
              value={formik.values.address2}
              name="address2"
              label="Enter address line 2"
              fullWidth
                onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
          
          <Grid item xs={12} sm= {4}>
            <TextField
              
              id="city"
              name="city"
              value={formik.values.city}
              label="Enter City"
              fullWidth
              required
              variant="standard"
                onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              
              id="state"
              name="state"
              value={formik.values.state}
              label="Enter state"
              fullWidth
              variant="standard"
                onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm= {4}>
            <TextField
              
              id="postalCode"
              name="postalCode"
              type="number"
              value={formik.values.postalCode}
              label="Enter postalCode"
              fullWidth
                onChange={formik.handleChange}
              variant="standard"
            />
          </Grid>
  
          <Grid item xs={12} sm= {4}>
            <TextField
              id="gender"
              select
              label="Select Gender"
              value={formik.values.gender}
              fullWidth
              name="gender"
                onChange={formik.handleChange}
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
              <Button type="button" disabled={disabled}  variant="outlined">
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    </Box>
  );
}
