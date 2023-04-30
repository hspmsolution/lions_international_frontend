import Lightbox from "react-image-lightbox";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import "react-image-lightbox/style.css";
import "./Gallery.css";
import React, { useState } from "react";
import { API_URL } from "../../api";

export default function Gallery(props) {
  const images = useSelector((state) => state.client.galleryImages);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", pb: "2rem" }}>
        {images.map((item, index) => (
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index);
            }}
            className="itemButton"
            key={index}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={`${API_URL+item.image}`}
                loading="lazy"
                style={{ height: "100%", margin: "auto" }}
              />
            </Box>
          </button>
        ))}
      </Box>

      {isOpen && (
        <Lightbox
          mainSrc={`${API_URL+images[photoIndex].image}`}
          nextSrc={`${API_URL+images[(photoIndex + 1) % images.length]?.image}`}
          prevSrc={`${API_URL+images[(photoIndex - 1) % images.length]?.image}`}
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
