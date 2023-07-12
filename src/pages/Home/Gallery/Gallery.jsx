
import React from "react";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import "./Gallery.css";
import { useSelector } from "react-redux";
import { API_URL } from "../../../api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Gallery = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const images = useSelector((state) => state.client.galleryImages);
  return (
    <>
      <div className="carouselContainer">
        <h1 className="carouselHeading">GALLERY</h1>
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="carousel"
                >
                  <div className="carouselBody">
                    <img
                      src={`${API_URL}${item?.image}`}
                      alt=""
                    />
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
