import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button, Divider } from "@mui/material";
import News from "./News";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { newsReporting } from "../../actions/news";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  heading: {
    width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
  },
  grid: {
    marginTop: "0px",
    width: "80%",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#003895",
    fontSize: "0.6em",
  },
  label: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "1em",
    },
  },
  btn: {
    marginTop: "15px",
    "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
    "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
  },
});

const initialData = {
  newsTitle: "",
  newsPaperLink: "",
  date: "",
  description: "",
  image: { preview: "", data: "" },
};
export default function NewsReporting() {
  const classes = useStyles();
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
    if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg") {
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
          <Typography variant="h6" gutterBottom className={classes.heading}>
            News Information
          </Typography>
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={6} className={classes.title}>
              <Typography>Title Of News</Typography>
            </Grid>
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
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={6} className={classes.title}>
              <Typography>Date Of News</Typography>
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
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={6} className={classes.title}>
              <Typography>News Paper Link</Typography>
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
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={6} className={classes.title}>
              <Typography>Description of News</Typography>
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
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={6} className={classes.title}>
              <Typography>Phographs of News</Typography>
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
          <Grid container justifyContent="center">
          <Grid item xs={2}>
            <Button type="submit" variant="contained" className={classes.btn}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Box marginLeft={1}>
              <Button type="button" variant="outlined" className={classes.btn}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </form>
   
      <News></News>
    </>
  );
}
