import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Typography, Icon, CardHeader, Card } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Members from "./Members.js";
import { makeStyles } from "@mui/styles";
import {
  LocalActivity,
  AdminPanelSettings,
  Newspaper,
} from "@mui/icons-material";
import { useEffect } from "react";
import { getPoints } from "../../actions/adminReports.js";
// ----------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  paper: {
    margin: "1rem auto",
    // width: "200px",
    // width: { xs: "100%", sm: "200px", md: "200px", lg: "200px" },
    borderRadius: "50px 0",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default function DashboardAppPage() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const adminPoints = useSelector((state) => state.adminReporting?.adminPoints);

  useEffect(() => {
    dispatch(getPoints());
  }, []);

  return (
    <>
      <Helmet>
        <title> Lions||Dashboard </title>
      </Helmet>
      <Box>
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            color: "#05B0E9",
            textAlign: "center",
            backgroundColor: "white",
            width: "fit-content",
            padding: "1rem 1.3rem",
            margin: "auto",
            borderRadius: "0.5rem",
          }}>
          Dashboard
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "row", md: "row" },
        }}>
        <Paper
          elevation={3}
          className={classes.paper}
          sx={{ width: { xs: "80%", sm: "200px", md: "200px", lg: "200px" } }}>
          <Icon sx={{ width: "100%", height: "3em", paddingTop: "10px" }}>
            <AdminPanelSettings
              sx={{ width: "2em", height: "2em", color: "#05B0E9" }}
            />
          </Icon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              color: "#05B0E9",
            }}>
            Admin Points{" "}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "#05B0E9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "0 0 50px",
            }}>
            {adminPoints?.adminstars}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          className={classes.paper}
          sx={{ width: { xs: "80%", sm: "200px", md: "200px", lg: "200px" } }}>
          <Icon sx={{ width: "100%", height: "3em", paddingTop: "10px" }}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#05B0E9" }}
            />
          </Icon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              color: "#05B0E9",
            }}>
            Activity Points{" "}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "#05B0E9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "0 0 50px",
            }}>
            {adminPoints?.activityStar}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          className={classes.paper}
          sx={{ width: { xs: "80%", sm: "200px", md: "200px", lg: "200px" } }}>
          <Icon sx={{ width: "100%", height: "3em", paddingTop: "10px" }}>
            <Newspaper sx={{ width: "2em", height: "2em", color: "#05B0E9" }} />
          </Icon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              color: "#05B0E9",
            }}>
            News Reporting{" "}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "#05B0E9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "0 0 50px",
            }}>
            {adminPoints?.newsCount}
          </Typography>
        </Paper>
      </Box>
      <Members />
    </>
  );
}
