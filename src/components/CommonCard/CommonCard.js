import React from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import useStyles from "./CardStyle";
import LinkIcon from "@mui/icons-material/Link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CommonCard(props) {
  const classes = useStyles();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log(props.newsPaperLink);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Item sx={{ position: "relative" }}>
          {/* <img
            src={props.image}
            srcSet={props.srcSet}
            alt={props.alt}
            className={classes.activityImage}
          /> */}{" "}
          <div className="slider02">
            <Slider
              autoplay={true}
              infinite={true}
              dots={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}>
              <div>
                <img
                  src={props.image}
                  className={classes.activityImage}
                  alt="slider"
                />
              </div>
              <div>
                <img
                  src={props.image2}
                  className={classes.activityImage}
                  alt="slider"
                />
              </div>
            </Slider>
          </div>
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
          <p className={classes.activityDate}>{props.date}</p>
          {props.type === "news" ? (
            <a
              href={`${props.newsPaperLink}`}
              rel="noreferrer"
              target="_blank"
              style={{ color: "#000" }}>
              <LinkIcon />
            </a>
          ) : (
            ""
          )}
        </Item>
      </Box>
    </>
  );
}
