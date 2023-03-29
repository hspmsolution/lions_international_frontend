import * as React from "react";

import Typography from "@mui/material/Typography";
import { Avatar, Icon ,Box,Paper,Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Groups,Email,Phone ,Event,LocationCity} from "@mui/icons-material";

const useStyles = makeStyles({
  cardHeaders: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5em",
    backgroundImage: 'url("/assets/img/PROFILE.avif")',
    backgroundPosition: "center",
    position:'relative',
    justifyContent:'flex-start',
    height:'40vh',
    flexDirection:'column',
    flexWrap:'nowrap',
    width:'100%',
    backgroundSize:'cover',

  },

  subheading: {
    display: "flex",
    justifyItems: "flex-end",
    width: "150px",
    alignItems: "center",
    padding:'10px',
  },
  icon:{
    width:'1.5em',
    height:'1.2em',
  },
});





export default function UserData() {
  const classes = useStyles();


  return (
    <>
      <Paper elevation={3} sx={{width:'100%',height:'10%',borderRadius:'5px'}}>
        <div className={classes.cardHeaders}>
          <Avatar
            
            alt={""}
            src={""}
            sx={{ width: "200px", height: "200px",position:'absolute',bottom:'-96px',margin:'0 5em' }}
          >
          </Avatar>
        </div>
        <Box dividers sx={{display: "flex",
    flexWrap:'wrap',
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "flex-end",
    padding:'10px',}}>
          <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <Groups />
            </Icon>
            <Typography> Name </Typography>
          </div>
          <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <Email />
            </Icon>
            <Typography>Email </Typography>
          </div>
          <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <Phone />
            </Icon>
            <Typography>Contact </Typography>
          </div>
        </Box>
        <Box sx={{display:'flex'}}>
        <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <Event />
            </Icon>
            <Typography>Club Name </Typography>
          </div>
          <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <Event />
            </Icon>
            <Typography>Designation </Typography>
          </div>
        <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <Event />
            </Icon>
            <Typography>Date Of Birth </Typography>
          </div>
          <div className={classes.subheading}>
            <Icon className={classes.icon}>
              <LocationCity />
            </Icon>
            <Typography>City</Typography>
          </div>
        </Box>

      </Paper>
      <Box></Box>
    </>
  );
}
