import Lightbox from "react-image-lightbox";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-image-lightbox/style.css";
import "./Gallery.css";
import React, { useState } from "react";
import { API_URL } from "../../api";
import CommonCard from "../CommonCard/CommonCard";
import useStyles from "./GalleryStyles";
import { Paper } from "@mui/material";

export default function Gallery(props) {
  const classes = useStyles();
  const images = useSelector((state) => state.client.galleryImages);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Box>
        <Grid
          container
          spacing={1}
        >
          {images.map((item, index) => (
            <>
              <Grid
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }}
                  className="itemButton"
                  key={index}
                >
                  <Paper elevation={3}>
                    <Box sx={{ height: "300px" }}>
                      <img
                        src={`${API_URL + item.image}`}
                        loading="lazy"
                      />
                    </Box>
                    <Box sx={{ padding: "1rem" }}>
                      <Typography variant={2}>Heading</Typography>
                      <br></br>
                      <Typography variant={5}>Description</Typography>
                    </Box>
                  </Paper>
                </button>
              </Grid>
            </>
          ))}
        </Grid>
      </Box> */}
      <Box
        sx={{
          flexGrow: 1,
          // background: "#112E57",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {images.map((item, index) => (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
                key={index}
              >
                <Paper
                  elevation={3}
                  sx={{ cursor: "pointer" }}
                >
                  <CommonCard
                    image={`${API_URL + item.image}`}
                    heading={item.title}
                    description={item.description}
                    date={item.date}
                  />
                </Paper>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>

      {isOpen && (
        <Lightbox
          mainSrc={`${API_URL + images[photoIndex].image}`}
          nextSrc={`${
            API_URL + images[(photoIndex + 1) % images.length]?.image
          }`}
          prevSrc={`${
            API_URL + images[(photoIndex - 1) % images.length]?.image
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={images[photoIndex].title}
          imageCaption={images[photoIndex].description}
        />
      )}
    </>
  );
}
