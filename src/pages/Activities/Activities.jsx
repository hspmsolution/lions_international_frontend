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
import CommonCard from "../.././components/CommonCard/CommonCard";
import ImageSlider, { Slide } from "react-auto-image-slider";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ResponsiveDialog({
  type,
  title,
  date,
  bgImage,
  description,
  activityId,
}) {
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
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
      >
        Open Activity Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"none"}
        sx={{ margin: "auto" }}
        className={classes.dialog}
      >
        <DialogTitle id="responsive-dialog-title">
          {type === "past"
            ? "Past Activities by Club"
            : "Upcoming Activities by Club"}
        </DialogTitle>

        <DialogContent>
          <Paper
            variant="outlined"
            sx={{
              padding: "0.5rem",
              margin: "auto",
              width: "100%",
            }}
            className={classes.dialogPaper}
          >
            <img
              src={API_URL + bgImage}
              alt="helping"
              style={{ width: "900px", height: "100%" }}
            />
          </Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Title:</strong>
                  </TableCell>
                  <TableCell>{title}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Date:</strong>
                  </TableCell>
                  <TableCell>{date?.slice(0, 10)}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Type:</strong>
                  </TableCell>
                  <TableCell>{type}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Category:</strong>
                  </TableCell>
                  <TableCell>Catergory</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Place:</strong>
                  </TableCell>
                  <TableCell>Place</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong> Activity Description:</strong>
                  </TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
          >
            Close
          </Button>
          {type === "upcoming" && (
            <Button
              onClick={handleClick}
              autoFocus
            >
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
        <Box
          sx={{
            width: "100%",
            height: "16rem",
            mb: { xs: "1.5rem", lg: "4rem" },
          }}
        >
          {/* <img
            src={API_URL + bgImage}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          /> */}

          <CommonCard
            image={API_URL + bgImage}
            date={date?.slice(0, 10)}
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
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
          pb: "2rem",
        }}
      >
        <CustomizedBreadcrumbs label={"Activities"} />
        <Container
          className={classes.activityContainer}
          sx={{ margin: "3rem auto" }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Upcoming Activities
          </Typography>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Box
                sx={{
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: 2,
                }}
              >
                {activities?.upcoming?.length === 0 ? (
                  <Typography
                    variant="h6"
                    color="black"
                  >
                    No Upcoming Activity Found
                  </Typography>
                ) : (
                  activities?.upcoming?.map((filter, index) => (
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
                  ))
                )}
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

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Box
                sx={{
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: 2,
                }}
              >
                {activities?.past?.length === 0 ? (
                  <Typography
                    variant="h6"
                    color="black"
                  >
                    No Past Activity Found
                  </Typography>
                ) : (
                  activities?.past?.map((filter, index) => (
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
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
