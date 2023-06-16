import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Paper } from "@mui/material";
import { events } from "../../../actions/client";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { API_URL } from "../../../api";
import useStyles from "./Styles";

export default function Activities() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.client.events);
  React.useEffect(() => {
    dispatch(events());
  }, [dispatch]);

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
          background: "#112E57",
          padding: "2rem 1rem",
          textAlign: "center",
        }}>
        <h1 className={classes.activityHeading}>Activities</h1>

        <Paper
          className={classes.activitiesCont}
          sx={{
            display: { xs: "block", md: "flex", margin: "auto" },
            width: { xs: "100%", md: "80%" },
          }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {activities.recent?.slice(0, 4).map((item, index) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}>
                    <Item sx={{ position: "relative" }}>
                      <img
                        src={`${API_URL + item?.image_path}`}
                        className={classes.activityImage}
                        alt=""
                      />
                      <h3>{item.heading}</h3>
                      <p>{item.description}</p>
                      <p className={classes.activityDate}>
                        {item?.date?.slice(0, 10)}
                      </p>
                    </Item>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Paper>

        <Button
          onClick={() => {
            navigate("/activities");
          }}
          variant="outlined"
          size="medium"
          sx={{ color: "white", borderColor: "white", marginTop: "2rem" }}>
          Register for upcoming activity
        </Button>
      </Box>
    </>
  );
}
