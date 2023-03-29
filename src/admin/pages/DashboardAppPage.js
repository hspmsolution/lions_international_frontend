import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import {  Container, Typography, Icon } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@mui/styles';
import {LocalActivity,AdminPanelSettings,Newspaper} from '@mui/icons-material';
import RegionalView from "./RegionalView.js";
import ZonalView from './ZonalView.js';
// ----------------------------------------------------------------------

const useStyles=makeStyles({
  root:{
    display:"flex",
    justifyContent:"space-around",
  },
  card:{
   
   minWidth:"10%",
    minHeight:"10%",
    display :"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  box:{
    fontSize:"1em",
    display:"flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  paper:{
    marginTop:"20px",
    backgroundColor:"#6F42C1",
    color:"#fff",
  },
  title:{
    color:"#fff",

  }
})


export default function DashboardAppPage() {
  const classes=useStyles();
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard  </title>
      </Helmet>
        <Typography variant="h4" sx={{ mb: 5 }} >
          Dashboard
        </Typography>
       
      <Grid container spacing={4} className={classes.root}>
        
          <Paper elevation={3} className={classes.paper}>
          <Grid xs={6}   className={classes.card}>
          <Icon> <LocalActivity/></Icon>
             <Grid item xs={6}  className={classes.box}>
               <Typography variant="h6" className={classes.title}>Activities Reporting</Typography>
                <Typography variant="h6"  className={classes.title}>10</Typography>
             </Grid>
          </Grid>
          </Paper>

          <Paper elevation={3} className={classes.paper}>
          <Grid xs={6}   className={classes.card}>
          <Icon> <AdminPanelSettings/></Icon>
             <Grid item xs={6}  className={classes.box}>
               <Typography variant="h6" className={classes.title}>Admin Reporting    </Typography>
                <Typography variant="h6"  className={classes.title}>20</Typography>
             </Grid>
          </Grid>
          </Paper>
          <Paper elevation={3} className={classes.paper}>
          <Grid xs={6}   className={classes.card}>
          <Icon> <Newspaper/></Icon>
             <Grid item xs={6}  className={classes.box}>
               <Typography variant="h6" className={classes.title}>News Reporting   </Typography>
                <Typography variant="h6"  className={classes.title}>8</Typography>
             </Grid>
          </Grid>
          </Paper>
          
        </Grid>
    </>
  );
}
