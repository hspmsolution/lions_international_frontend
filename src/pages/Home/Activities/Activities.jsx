import * as React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Card from "@mui/material/Card";
import { Box, Container, Paper } from "@mui/material";
import ImageSlider, { Slide } from "react-auto-image-slider";
import useStyles from "./Styles";
import "./Activities.css";
import { events } from "../../../actions/client";
import { API_URL } from "../../../api";


export default function Activities() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.client.events);
  React.useEffect(() => {
    dispatch(events());
  }, []);

  return (
    <>
      <Paper
        className={classes.activitiesCont}
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        <Box
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            minwidth: "50%",
            borderRadius: "sm",
            padding: "2rem 2rem 4rem",
          }}
        >
          <Typography variant="h4" className={classes.activeH}>
            Past Activities
          </Typography>
          <List sx={{ py: "var(--ListDivider-gap)" }}>
            <div className="imageSlider imageSliderX">
              <ImageSlider>
                {activities?.past?.map((item, index) => (
                  <Slide>
                    <Card
                      variant="outlined"
                      sx={{ width: "60%", height: "300px" }}
                    >
                      <Box sx={{ flexBasis: 120, borderRadius: "sm" }}>
                        <img
                          src={API_URL + item.image_path}
                          alt={item.activityTitle}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Typography variant="h6">{item.activityTitle}</Typography>
                      <Typography>{item.description}</Typography>
                    </Card>
                  </Slide>
                ))}
              </ImageSlider>
            </div>
          </List>
        </Box>
        <Box
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            minWidth: "50%",
            borderRadius: "sm",
            padding: "2rem 2rem 4rem",
          }}
        >
          <Typography variant="h4" className={classes.activeH}>
           Upcoming Activities
          </Typography>
          <List sx={{ py: "var(--ListDivider-gap)" }}>
            <div className="imageSlider imageSliderX">
              <ImageSlider>
                {activities?.upcoming?.map((item, index) => (
                  <Slide>
                    <Card
                      variant="outlined"
                      sx={{ width: "60%", height: "300px" }}
                    >
                      <Box sx={{ flexBasis: 120, borderRadius: "sm" }}>
                        <img
                          src={API_URL + item.image_path}
                          alt={item.activityTitle}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Typography variant="h6">{item.activityTitle}</Typography>
                      <Typography>{item.description}</Typography>
                    </Card>
                  </Slide>
                ))}
              </ImageSlider>
            </div>
          </List>
        </Box>
      </Paper>
    </>
  );
}
