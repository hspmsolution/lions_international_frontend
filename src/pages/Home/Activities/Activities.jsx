import * as React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import { Box, Button, Container, Paper } from "@mui/material";
import ImageSlider, { Slide } from "react-auto-image-slider";
import useStyles from "./Styles";
import "./Activities.css";
import { events } from "../../../actions/client";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";

export default function Activities() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.client.events);
  React.useEffect(() => {
    dispatch(events());
  }, []);

  return (
    <>
      <Box
        sx={{
          background: "#112E57",
          paddingBottom: "2rem",
          textAlign: "center",
        }}
      >
        <Paper
          className={classes.activitiesCont}
          sx={{ display: { xs: "block", md: "flex", width: "100%" } }}
        >
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
              Past Activities
            </Typography>
            <List sx={{ py: "var(--ListDivider-gap)" }}>
              <div className="imageSlider imageSliderX">
                <ImageSlider>
                  {activities?.past?.map((item, index) => (
                    <Slide>
                      <ActivityCard key={index} item={item} />
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
                      <ActivityCard key={index} item={item} />
                    </Slide>
                  ))}
                </ImageSlider>
              </div>
            </List>
          </Box>
        </Paper>
        <Button
         onClick={()=>{navigate("/activities")}}
          variant="outlined"
          size="medium"
          sx={{ color: "white", borderColor: "white" }}
        >
          View More
        </Button>
      </Box>
    </>
  );
}
