import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider } from "@mui/material";
import { addActivity } from "../../actions/activity";
import { CLIENT_MSG } from '../../constants/actionTypes';


const media={
  id:1,name:'True',
  id:2,name:'False',
}
const activityDetail={amount:'',
  activityTitle:'',
  city:'',
  date:'',
  cabinetOfficers:'',
  description:'',
  lionHours:'',
  mediaCoverage:'',
  peopleServed:'',
  activityType:'',
  activitySubType:'',
  activityCategory:'',
  place:''}
export default function NewActivity() {
  const [type,setType]=useState([]);
  const[subType,setSubType]=useState([]);
  const[category,setCategory]=useState([]);
  const [activity, setActivity] = useState(activityDetail);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const dispatch = useDispatch();


  useEffect(()=>{
    const getType=async()=>{
      const resType=await fetch("http://localhost:5000/api/activity/type");
      const res=await resType.json();
      setType(await res)
    }
  })
  useEffect(()=>{
    const getSubtype=async()=>{
      const resSubType=await fetch(`http://localhost:5000/api/activity/subtype?type=${type}`);
      const res=await resSubType.json();
      setType(await res)
    }
  })
  useEffect(()=>{
    const getCategory=async()=>{
      const resCategory=await fetch(`http://localhost:5000/api/activity/subtype?type=${subType}`);
      const res=await resCategory.json();
      setType(await res)
    }
  })
  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    if (!activity.activityTitle || !activity.city || !activity.date || !activity.cabinetOfficers||!activity.lionHours ||
      !activity.mediaCoverage || !activity.peopleServed || !activity.activityType || !activity.activitySubType||!activity.activityCategory ||activity.place) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: "All Fields are required"},
      });
      return;
    }
    dispatch(addActivity(activity));
    setActivity(activityDetail);
    setFile(null);
  };
  return (
    
    <Box bgcolor="white" p={3} borderRadius={4} 
    component="form"
    noValidate
    autoComplete="off"
    onSubmit={submitDetails}
   
    >
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Basic Activity Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
          
              id="activityTitle"
              value={activity.activityTitle}
              name="activityTitle"
              label="Enter Activity Title"
              fullWidth
              autoComplete="given-name"
              onChange={handleChange}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cabinetOfficers"
              value={activity.cabinetOfficers}
              name="cabinetOfficers"
              label="Enter Cabinet Officer Name"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />
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
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="activityType"
              value={activity.cabinetOfficers}
              select
              fullWidth
              name="activityType"
              label=" Select Activity Type "
           
              onChange={handleChange}
            >
              {type.map((getType,index) => (
                <MenuItem key={index} value={getType.id}>
                  {getType.type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="activitySubType"
              select
              fullWidth
              name='activitySubType'
              label=" Activity Subtype "
              value={activity.activitySubType}
              onChange={handleChange}
            >
              {subType.map((getSubtype,index) => (
                <MenuItem key={index} value={getSubtype.subType}>
                  {getSubtype.subType}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              id="activityCategory"
              select
              fullWidth
              name='activityCategory'
              label="Activity Category Type "
              value={activity.activityCategory}
              onChange={handleChange}
            >
              {category.map((getCategory,index) => (
                <MenuItem key={index} value={getCategory.category}>
                  {getCategory.category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "16px" }} />
        <Typography variant="h6" gutterBottom style={{ marginTop: "16px" }}>
          Detailed Activity Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="place"
              name="place"
              value={activity.place}
              label="Enter Activity Place"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="placeholder"
              name="placeholder"
              label="Enter Placeholder "
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              value={activity.city}
              label="Enter Activity Placed City"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="amount"
              name="amount"
              value={activity.amount}
              label="Enter Amount Spent"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="lionHours"
              name="lionHours"
              value={activity.lionHours}
              label="Enter Lion Hours"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="mediaCoverage"
              select
              label=" Media Coverage"
              value={activity.mediaCoverage}
              fullWidth
              onChange={handleChange}
            >
              {media.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
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
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              type="file"
              id="image-upload"
              name="image-upload"
              label="Upload an image"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Box marginLeft={1}>
              <Button type="button" variant="outlined">
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    </Box>
  
  );
}