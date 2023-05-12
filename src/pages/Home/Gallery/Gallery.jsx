
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

  // const itemData = [
  //   {
  //     src: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
  //     title: "Bed",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  //     title: "Sink",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
  //     title: "Books",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
  //     title: "Kitchen",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
  //     title: "Blinds",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
  //     title: "Chairs",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
  //     title: "Laptop",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
  //     title: "Doors",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
  //     title: "Coffee",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
  //     title: "Storage",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
  //     title: "Candle",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  //     title: "Coffee table",
  //   },
  // ];
   
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
