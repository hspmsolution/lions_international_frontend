import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, Divider } from "@mui/material";
import AddNews from "./AddNews";
import { useDispatch } from "react-redux";
import { CLIENT_MSG } from "../../constants/actionTypes";

const initialData = {
  newsTitle: "",
  newsPaperLink: "",
  date: "",
  description: "",
  image: "",
};
export default function NewActivity() {
  const dispatch = useDispatch();
  const fileUploadRef = useRef();
  const [newsData, setNewsData] = useState(initialData);


  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };

  // Function to convert file into base64 string
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
    if (file.type !== "application/pdf" && file.type !== "image/jpeg") {
      dispatch({
        type: CLIENT_MSG,
        message: { info: "file type not supported", status: 400 },
      });
      event.target.value = "";
      return;
    }
    const base64 = await convertBase64(file);
    setNewsData({ ...newsData, image: base64 });
   
  };

  const submitDetails=(e)=>{
   console.log(newsData);
   setNewsData(initialData);
  
  }
  return (
    <>
      <form autoComplete="off" noValidate >
        <Box
          bgcolor="white"
          p={3}
          borderRadius={4}
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
                value={newsData.newsTitle}
                label="Enter News Title"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="date"
                name="date"
                value={newsData.date}
                label="Select Date"
                fullWidth
                variant="standard"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="newsPaperLink"
                name="newsPaperLink"
                value={newsData.newsPaperLink}
                label="Enter URL"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="description"
                name="description"
                label="Enter Description"
                value={newsData.description}
                variant="standard"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                ref={fileUploadRef}
                type="file"
                id="image-upload"
                name="image"
                label="Upload Photo"
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
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={3}>
              <Button onClick={submitDetails} variant="contained" color="primary">
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
        <Divider />
        <AddNews></AddNews>
      </form>
    </>
  );
}
