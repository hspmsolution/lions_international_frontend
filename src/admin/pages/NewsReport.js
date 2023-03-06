import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Box,MenuItem, Button, Divider } from "@mui/material";
import AddNews from "./AddNews";

export default function NewActivity() {

  return (
<>
    <form autoComplete="off" noValidate>
    <Box bgcolor="white" p={3} borderRadius={4} 
    component="form"
    noValidate
    autoComplete="off"
    >
 
    <Typography variant="h6" gutterBottom>
      News Information
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="newsTitle"
          name="newsTitle"
          label="Enter News Title"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="date"
          name="date"
          label="Select  Date"
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
          required
          id="newsPaperLink"
          name="url"
          label="Enter URL"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="description"
          name="description"
          label="Enter Description"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          type="file"
          id="image-upload"
          name="image-upload"
          label="Upload Photo"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
    <Grid container justifyContent='center' spacing={2}>
      <Grid item xs={3}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Box marginLeft={1}>
          <Button type="button" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Grid>
    </Grid>
</Box>
<Divider/>
<AddNews></AddNews>
</form>
</>
  );
}
