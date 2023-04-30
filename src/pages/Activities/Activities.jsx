import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useStyles from "./Styles";
import Register from "./Register";
import { events } from "../../actions/client";
import { API_URL } from "../../api";
import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";

function ResponsiveDialog({ type, title, date, bgImage, description, activityId }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [showRegister, setShowRegister] = React.useState(false);

  const handleClick = () => {
    setShowRegister(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowRegister(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Activity Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      // sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <DialogTitle id="responsive-dialog-title">
          {type === "past"
            ? "Past Activities by Club"
            : "Upcoming Activities by Club"}
        </DialogTitle>
        <Paper
          variant="outlined"
          sx={{ width: "30vw", padding: "0rem", margin: "auto" }}
        >
          <img
            src={API_URL + bgImage}
            alt="helping"
            style={{ width: "100%" }}
          />
        </Paper>
        <DialogContent>
          <table>
            <tbody>
              <tr>
                <th style={{ display: "flex" }}>
                  <Typography variant="subtitle1" sx={{ mr: "1rem" }}>
                    Event Name :{" "}
                  </Typography>
                  <Typography variant="subtitle1">{title}</Typography>
                </th>
              </tr>
              <tr>
                <th style={{ display: "flex" }}>
                  <Typography variant="subtitle1" sx={{ mr: "1rem" }}>
                    Event Date :{" "}
                  </Typography>
                  <Typography variant="subtitle1">{date?.slice(0,10)}</Typography>
                </th>
              </tr>
              <tr>
                <th style={{ display: "flex" }}>
                  <Typography variant="subtitle1" sx={{ mr: "1rem" }}>
                    Event Details :{" "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ width: "24rem", textAlign: "justify" }}
                  >
                    {description}
                  </Typography>
                </th>
              </tr>
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          {type === "upcoming" && (
            <Button onClick={handleClick} autoFocus>
              Register
            </Button>
          )}
          {showRegister && <Register activityId={activityId} />}
        </DialogActions>
      </Dialog>
    </div>
  );
}

function BasicCard({ title, bgImage, type, date, description, activityId }) {
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 275, maxWidth: 520, margin: "auto" }}>
      <CardContent className={classes.eventCard}>
        <Box sx={{ width: "100%", height: "16rem", mb: "1rem" }}>
          <img
            src={API_URL + bgImage}
            style={{ height: "100%", width: "100%", objectFit: 'contain' }}
          />
        </Box>
        <ResponsiveDialog
          type={type}
          title={title}
          date={date}
          bgImage={bgImage}
          description={description}
          activityId={activityId}
        />
      </CardContent>
    </Card>
  );
}

export default function Events() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.client.events);
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(events());
  }, []);

  return (
    <>
      <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '2rem' }}>
        <CustomizedBreadcrumbs label={'Activities'} />
        <Container className={classes.activityContainer} sx={{ margin: "3rem auto" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Upcoming Activities
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: 2,
                }}
              >
                {activities?.upcoming?.map((filter, index) => (
                  <Box key={index}>
                    <BasicCard
                      title={filter.activityTitle}
                      bgImage={filter.image_path}
                      date={filter.date}
                      type="upcoming"
                      description={filter.description}
                      activityId={filter.activityId}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ margin: "3rem auto" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Past Activities
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: 2,
                }}
              >
                {activities?.past?.map((filter, index) => (
                  <Box key={index}>
                    <BasicCard
                      title={filter.activityTitle}
                      bgImage={filter.image_path}
                      date={filter.date}
                      type="past"
                      description={filter.description}
                      activityId={filter.activityId}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
