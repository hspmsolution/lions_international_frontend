import { Avatar,Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    Img:{
      maxWidth: '100%',
    width:" 400px",
    height: "400px",
    margin: "90px auto auto auto",
    justifyContent: "flex-start",
    display: "flex",
   
    },
    Btn: {
      "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
        borderRadius: "0px 8px 0px 8px",
        padding: "10px 16px 10px 16px",
      },
      "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
        borderRadius: "0px 8px 0px 8px",
        padding: "10px 16px 10px 16px",
      },
    }
})
export default function LoginReq() {
  const navigate=useNavigate();
  const handleClick=()=>navigate('/login');
  const classes=useStyles();
  return (
    <Box>
       <img src={"/assets/img/loginRequired.png"} className={classes.Img}/>
          <Typography variant='h6' sx={{alignItem:'center', display: "flex",justifyContent:'center'}}>Login Required for accessing this page</Typography>
      <Box sx={{ display: "flex",justifyContent:'center'}}>
      <Button type='button' onClick={handleClick} variant="contained" color="primary" sx={{alignItem:'center', display: "flex",justifyContent:'center'}} className={classes.Btn} >Login</Button>
      </Box>
    </Box>
  )
}
