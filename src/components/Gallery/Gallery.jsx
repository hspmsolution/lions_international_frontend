import Lightbox from "react-image-lightbox";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-image-lightbox/style.css";
import "./Gallery.css";
import React, { useState } from "react";
import { API_URL } from "../../api";
import { Paper, Typography } from "@mui/material";

export default function Gallery(props) {
  const images = useSelector((state) => state.client.galleryImages);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box>
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
                    <img
                      src={`${API_URL + item.image}`}
                      loading="lazy"
                      style={{
                        width: "400px",
                        height: "300px",
                      }}
                    />
                    <Typography variant={2}>Heading</Typography>
                    <br></br>
                    <Typography variant={5}>Description</Typography>
                  </Paper>
                </button>
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
