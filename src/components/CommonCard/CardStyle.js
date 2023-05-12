import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  activityImage: {
    "@media screen and (max-width: 600px)": {
      height: "250px",
    },
    width: "100%",
    height: "300px",
  },

  activityDate: {
    position: "absolute",
    top: "6%",
    right: "4%",
    backgroundColor: "white",
    padding: "0.2rem 0.6rem",
    borderRadius: "1rem",
    color: "red",
    margin: "0",
  },
}));
