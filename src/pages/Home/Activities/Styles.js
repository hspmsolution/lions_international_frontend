import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  activitiesCont: {
    background: "#112E57",
  },
  activeH: {
    color: "white",
    textAlign: "center",
  },
  activityImage: {
    "@media screen and (max-width: 600px)": {
      height: "250px",
      width: "100%",
    },
    width: "100%",
    height: "300px",
  },
  activityHeading: {
    color: "white",
  },
  activityDate: {
    position: "absolute",
    top: "0",
    right: "4%",
    backgroundColor: "white",
    padding: "0.2rem 0.6rem",
    borderRadius: "1rem",
    color: "red",
  },
  description: {
    height: "55px",
    lineHeight: "1.3",
    padding: "0 0.2rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "normal",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
}));
