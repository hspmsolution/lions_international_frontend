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
import { Carousel } from "react-carousel-minimal";

export default function Activities() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.client.events);
  React.useEffect(() => {
    dispatch(events());
  }, []);

  // New Activity
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                San Francisco
                <br/>
       <small class="activity-des-past">Past Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
       
              </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: `<div>
                 Scotland
                <br/>
       <small class="activity-des-past">Past Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
              </div>`,
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: `<div>
               Darjeeling
                <br/>
       <small class="activity-des-past">Past Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
       
              </div>`,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: `<div>
      Darjeeling
       <br/>
       <small class="activity-des-past">Past Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
       
     </div>`,
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: `<div>
      Description
       <br/>
       <small class="activity-des-upcoming">Upcoming Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
     </div>`,
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: `<div>
      Description
       <br/>
       <small class="activity-des-upcoming">Upcoming Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
     </div>`,
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: `<div>
      Description
       <br/>
       <small class="activity-des-upcoming">Upcoming Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
     </div>`,
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: `<div>
                 Description
                  <br/>
       <small class="activity-des-upcoming">Upcoming Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
                  </div>`,
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: `<div>
      Description
       <br/>
       <small class="activity-des-upcoming">Upcoming Activity</small>
       <br/>
       <small class="activity-des-date">02/03/2023</small>
     </div>`,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <Box
        sx={{
          background: "#112E57",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h1 className="activity-heading">Activities</h1>

        <Paper
          className={classes.activitiesCont}
          sx={{ display: { xs: "block", md: "flex", width: "100%" } }}
        >
          {/* New Activity */}

          <Carousel
            data={data}
            time={3000}
            width="1000px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1000px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />

          {/* <Box
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
                {activities?.past?.length === 0 ? (
                  <Typography variant="h6" color="white">
                    No Past Activity Found
                  </Typography>
                ) : (
                  <ImageSlider>
                    {activities?.past?.map((item, index) => (
                      <Slide>
                        <ActivityCard key={index} item={item} />
                      </Slide>
                    ))}
                  </ImageSlider>
                )}
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
                {activities?.upcoming?.length === 0 ? (
                  <Typography variant="h6" color="white">
                    No Upcoming Activity Found
                  </Typography>
                ) : (
                  <ImageSlider>
                    {activities?.upcoming?.map((item, index) => (
                      <Slide>
                        <ActivityCard key={index} item={item} />
                      </Slide>
                    ))}
                  </ImageSlider>
                )}
              </div>
            </List>
          </Box> */}
        </Paper>

        <Button
          onClick={() => {
            navigate("/activities");
          }}
          variant="outlined"
          size="medium"
          sx={{ color: "white", borderColor: "white", marginTop: "4rem" }}
        >
          Register for upcoming activity
        </Button>
      </Box>
    </>
  );
}
