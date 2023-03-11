import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider } from "@mui/material";

const activities = [
  {
    value: "a",
    label: "INTERNATONAL ACTIVITIES",
  },
  {
    value: "b",
    label: "DISTRICT ACTIVITIES",
  },
  {
    value: "c",
    label: "MEDICAL ACTIVITIES",
  },
  {
    value: "d",
    label: "OTHER IMPORTANT",
  },
  {
    value: "e",
    label: "PERMANENT PROJECTS",
  },
];
const subActivities = [
  {
    value: "a",
    label: "INTERNATONAL ACTIVITIES",
  },
  {
    value: "b",
    label: "DISTRICT ACTIVITIES",
  },
  {
    value: "c",
    label: "MEDICAL ACTIVITIES",
  },
  {
    value: "d",
    label: "OTHER IMPORTANT",
  },
  {
    value: "e",
    label: "PERMANENT PROJECTS",
  },
];
const activitytye = [
  {
    value: "a",
    label: "INTERNATONAL ACTIVITIES",
  },
  {
    value: "b",
    label: "DISTRICT ACTIVITIES",
  },
  {
    value: "c",
    label: "MEDICAL ACTIVITIES",
  },
  {
    value: "d",
    label: "OTHER IMPORTANT",
  },
  {
    value: "e",
    label: "PERMANENT PROJECTS",
  },
];
const media = [
  {
    value: "a",
    label: "True/Yes",
  },
  {
    value: "b",
    label: "False/No",
  },
];
export default function NewActivity() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
    <form autoComplete="off" noValidate>
    <Box bgcolor="white" p={3} borderRadius={4} 
    component="form"
    noValidate
    autoComplete="off"
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
              name="activityTitle"
              label="Enter Activity Title"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cabinetOfficers"
              name="cabinetOfficers"
              label="Enter Cabinet Officer Name"
              fullWidth
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              name="date"
              label="Select Activity Date"
              fullWidth
              variant="standard"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="activityType"
              select
              fullWidth
              label=" Select Activity Type "
              value={category}
              onChange={handleChange}
            >
              {activitytye.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="activitySubType"
              select
              fullWidth
              label=" Activity Subype "
              value={category}
              onChange={handleChange}
            >
              {subActivities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField
              id="activityCategory"
              select
              fullWidth
              label="Activity Category Type "
              value={category}
              onChange={handleChange}
            >
              {activities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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
              label="Enter Activity Place"
              fullWidth
              variant="standard"
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Enter Activity Placed City"
              fullWidth
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="amount"
              name="amount"
              label="Enter Amount Spent"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="lionHours"
              name="lionHours"
              label="Enter Lion Hours"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="mediaCoverage"
              select
              label=" Media Coverage"
              value={media}
              fullWidth
              onChange={handleChange}
            >
              {media.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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
    </form>
    </>
  );
}
