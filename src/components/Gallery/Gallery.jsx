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
import { styled } from "@mui/material/styles";

export default function Gallery(props) {
  const classes = useStyles();
  const images = useSelector((state) => state.client.galleryImages);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          padding: "1rem",
          textAlign: "center",
        }}>
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
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
                key={index}>
                <Paper
                  elevation={3}
                  sx={{ cursor: "pointer" }}>
                  {/* <CommonCard
                    image={`${API_URL + item.image}`}
                    heading={item.title}
                    description={item.description}
                    date={item.date}
                  /> */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Item sx={{ position: "relative" }}>
                      <img
                        src={`${API_URL + item.image}`}
                        srcSet={`${API_URL + item.image}`}
                        alt="gallery"
                        className={classes.activityImage}
                      />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p className={classes.activityDate}>{item.date}</p>
                    </Item>
                  </Box>
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
