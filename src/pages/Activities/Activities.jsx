import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box, Pagination } from "@mui/material";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ResponsiveDialog({
  activityType,
  title,
  date,
  bgImage,
  bgImage2,
  description,
  activityId,
  category,
  place,
  clubId,
  clubName,
  type,
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
      <Button variant="outlined" onClick={handleClickOpen}>
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
            {/* <img
              src={API_URL + bgImage}
              alt="helping"
              style={{ width: "900px", height: "100%" }}
            /> */}
            <div className="slider02">
              <Slider
                autoplay={true}
                infinite={true}
                dots={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
              >
                <div>
                  <img
                    src={API_URL + bgImage}
                    alt="slider"
                    style={{ width: "900px", height: "100%" }}
                  />
                </div>
                {bgImage2 && (
                  <div>
                    <img
                      src={API_URL + bgImage2}
                      alt="slider"
                      style={{ width: "900px", height: "100%" }}
                    />
                  </div>
                )}
              </Slider>
            </div>
          </Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
              <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Club Name:</strong>
                  </TableCell>
                  <TableCell>{clubName}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity ID:</strong>
                  </TableCell>
                  <TableCell>{activityId}</TableCell>
                </TableRow>
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
                  <TableCell>{activityType}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Category:</strong>
                  </TableCell>
                  <TableCell>{category}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Place:</strong>
                  </TableCell>
                  <TableCell>{place}</TableCell>
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

function BasicCard({
  title,
  bgImage,
  bgImage2,
  date,
  activityType,
  description,
  activityId,
  category,
  place,
  clubId,
  clubName,
  type,
}) {
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 275, maxWidth: 350, margin: "auto" }}>
      <CardContent className={classes.eventCard}>
        <Box
          sx={{
            width: "100%",
            height: "16rem",
            mb: { xs: "1.5rem", lg: "4rem" },
          }}
        >

          <CommonCard
            image={bgImage}
            image2={bgImage2}
            date={date?.slice(0, 10)}
          />
        </Box>

        <ResponsiveDialog
          activityType={activityType}
          title={title}
          date={date}
          bgImage={bgImage}
          bgImage2={bgImage2}
          description={description}
          activityId={activityId}
          category={category}
          place={place}
          clubId={clubId}
          clubName={clubName}
          type={type}
        />
      </CardContent>
    </Card>
  );
}

export default function Events() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const activities = useSelector((state) => state.client.events);
  const classes = useStyles();

  const totalPages = useSelector(
    (state) => state.client.events?.pagination?.totalPages || 1
  );
  const currentPage = useSelector(
    (state) => state.client.events?.pagination?.page || 1
  );

  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || currentPage;

  const handleChangePage = (event, newPage) => {
    queryParams.set("page", newPage);
    navigate(`${location.pathname}?${queryParams.toString()}`);
    dispatch(events(newPage));
  };

  React.useEffect(() => {
    dispatch(events(page));
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
                {activities?.upcoming?.length === 0 ? (
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      backgroundColor: "	#50C878",
                      textAlign: "center",
                      borderRadius: "0.5rem",
                      padding: "0.5rem 0",
                    }}
                  >
                    No Upcoming Activity Found
                  </Typography>
                ) : (
                  activities?.upcoming?.map((filter, index) => (
                    <Box key={index}>
                      <BasicCard
                        title={filter.activityTitle}
                        bgImage={filter.image_path}
                        bgImage2={filter.image_path2}
                        date={filter.date}
                        activityType={filter.activityType}
                        description={filter.description}
                        activityId={filter.activityId}
                        category={filter.activityCategory}
                        place={filter.place}
                        clubId={filter.clubId}
                        clubName={filter.clubName}
                        type="upcoming"
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

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  // p: 2,
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: "2rem",
                }}
              >
                {activities?.past?.length === 0 ? (
                  <Typography variant="h6" color="black">
                    No Past Activity Found
                  </Typography>
                ) : (
                  activities?.past?.map((filter, index) => (
                    <Box key={index}>
                      <BasicCard
                        title={filter.activityTitle}
                        bgImage={filter.image_path}
                        bgImage2={filter.image_path2}
                        date={filter.date}
                        activityType={filter.activityType}
                        description={filter.description}
                        activityId={filter.activityId}
                        category={filter.activityCategory}
                        place={filter.place}
                        clubId={filter.clubId}
                        clubName={filter.clubName}
                        type="past"
                      />
                    </Box>
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: "2rem 1rem",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            variant="outlined"
            color="primary"
            className={classes.newsPagination}
          />
        </Box>
      </Box>
    </>
  );
}
