import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button, Divider } from "@mui/material";
import News from "./News";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { newsReporting } from "../../actions/news";

const initialData = {
  newsTitle: "",
  newsPaperLink: "",
  date: "",
  description: "",
  image: { preview: "", data: "" },
};
export default function NewsReporting() {
  const dispatch = useDispatch();
  const fileUploadRef = useRef();
  const [newsData, setNewsData] = useState(initialData);

  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
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
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setNewsData({ ...newsData, image: img });
  };

  const submitDetails = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("newsTitle", newsData.newsTitle);
    formData.append("newsPaperLink", newsData.newsPaperLink);
    formData.append("date", newsData.date);
    formData.append("description", newsData.description);
    formData.append("image", newsData.image.data);

    dispatch(newsReporting(formData));
    setNewsData(initialData);
  };
  return (
    <>
      <form onSubmit={submitDetails}>
        <Box bgcolor="white" p={3} borderRadius={4}>
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
                type="text"
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
                type="datetime-local"
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
                type="url"
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
                type="text"
                variant="standard"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                ref={fileUploadRef}
                type="file"
                id="image-upload"
                name="image"
                label="Upload Photo less than 500kb"
                fullWidth
                required
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
              {newsData.image.preview && (
                <img src={newsData.image.preview} width="100" height="100" />
              )}
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
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
      </form>
      <Divider />
      <News></News>
    </>
  );
}
