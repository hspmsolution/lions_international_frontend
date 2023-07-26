import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  newsTitle: {
    textAlign: "center",
  },

  newsPagination: {
    "& ul": {
      gap: "10px",
    },
  },

  activityImage: {
    "@media screen and (max-width: 600px)": {
      height: "250px",
    },
    width: "100%",
    height: "300px",
  },

  activityDate: {
    position: "absolute",
    top: "4%",
    right: "4%",
    backgroundColor: "white",
    padding: "0.2rem 0.6rem",
    borderRadius: "1rem",
    color: "red",
    margin: "0",
  },

  description: {
    lineHeight: "1.3",
    padding: "0 1rem",
    height: "55px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "normal",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    transition: "height 2s ",
  },
  descriptionExpand: {
    height: "fit-content",
    padding: "0 1rem",
    textAlign: "justify",
  },

  link: {
    padding: "0",
    margin: "0",
    height: "15px",
    
  },
}));
