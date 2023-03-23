import React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import {TextField,Button, Box,Container, Paper, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ClassNames } from '@emotion/react';

const useStyles=makeStyles({
    root:{
   
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        padding:"5%",
        backgroundImage:"url('assets/img/bg.avif')",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundBlur:"1",
      
      },
      insideBox:{
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        padding:"5%",
      }

    
 })
export default function Password() {
  const classes=useStyles();
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      memberId: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().max(255).required('Password is required'),
      confirmpassword: Yup.string().max(255).required('Confirm Password is required'),
    }),
    onSubmit: (data) => {
      setDisabled(true);
    },
  });

  return (
    <>
    <Helmet>
      <title> Reset Password </title>
    </Helmet>
    <Paper
      className={classes.root}
      elevation={3}
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%',
      }}
    >
      <Paper maxWidth="sm" elevation={3} className={classes.insideBox}>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              pb: 1,
              pt: 3,
            }}
          >
 <Typography align="center" color="textSecondary" variant="body1">
                Reset Password
              </Typography>
          </Box>

          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
            label="Enter Password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.confirmpassword && formik.errors.confirmpassword)}
            fullWidth
            helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
            label="Confirm Password"
            margin="normal"
            name="confirmpassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.confirmpassword}
            variant="outlined"
          />
          <Box sx={{ py: 2 }}>
            <Button color="primary" fullWidth size="large" type="submit" variant="contained">
              Update Password
            </Button>
          </Box>
        </form>
      </Paper>
    </Paper>
  </>
  
  )
}
