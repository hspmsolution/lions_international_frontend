import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Divider,
  Typography,
  Icon,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import StepOneForm from "../Forms/StepOneForm";
import StepTwoForm from "../Forms/StepTwoForm";
import StepThreeForm from "../Forms/StepThreeForm";
import StepFourForm from "../Forms/StepFourForm";
import SelectMonth from "../Forms/SelectMonth";
import { Star } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addReport, getPoints } from "../../actions/adminReports";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ADMIN_REPORTS,
  CLIENT_MSG,
  ADMIN_PDF,
  ADMIN_REPORTS_LOADING,
} from "../../constants/actionTypes";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  stepBtn: {
    background: "#F2F2F2",
    border: "none",
    borderRadius: "5px",
    padding: "20px",
    justifyContent: "space-between",
    boxShadow: "0px 0px 5px #BFBFBF",
    "& .MuiStepConnector-root": {
      display: "none",
    },
    "& .MuiStepIcon-root": {
      fontSize: "2rem",
    },
    "& .MuiStepLabel-label": {
      fontSize: "2rem",
      fontWeight: "500",
      color: "white",
    },
  },
  activeStep: {
    color: "white",
    background: "#0077C0",
    "& .MuiStepIcon-root": {
      color: "#0077C0",
    },
    padding: "10px 30px 10px 30px",
    borderRadius: "4px",
  },
  inactiveStep: {
    color: "#F2F2F2",
    background: "#49A5FF",
    "& .MuiStepIcon-root": {
      color: "#49A5FF",
    },
    padding: "10px 30px 10px 30px",
    borderRadius: "4px",
  },
  totalPoints: {
    marginRight: "8px",
    display: "flex",
    alignItems: "baseline",
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const steps = ["01", "02", "03", "04"];

export default function FormWizard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminPoints = useSelector((state) => state.adminReporting.adminPoints);
  const reports = useSelector((state) => state.adminReporting.adminReports);
  const reportPdf = useSelector((state) => state.adminReporting.reportsPdf);
  const isLoading = useSelector(
    (state) => state.adminReporting.adminReportLoading
  );
  const selectedMonth = useSelector(
    (state) => state.adminReporting.selectedMonth
  );
  const [activeStep, setActiveStep] = useState(0);

  // Go to next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Go to previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Get form component for current step
  const getStepForm = () => {
    switch (activeStep) {
      case 0:
        return <StepOneForm />;
      case 1:
        return <StepTwoForm />;
      case 2:
        return <StepThreeForm />;
      case 3:
        return <StepFourForm />;
      default:
        return null;
    }
  };

  // Submit form
  const handleSubmit = () => {
    const selectedReports = reports.filter((report) => report.selected);
    if (selectedReports.length === 0) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Select atleast one field",
          status: 400,
        },
      });
      return;
    }

    if (reportPdf === "") {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Please Add reports PDF",
          status: 400,
        },
      });
      return;
    }

    const formData = new FormData();
    formData.append("pdf", reportPdf);
    formData.append("data", JSON.stringify(selectedReports));
    formData.append("month", JSON.stringify(selectedMonth));
    dispatch(addReport(formData, navigate));
    dispatch({ type: ADMIN_REPORTS_LOADING, payload: true });

    // // reset the value of form
    // dispatch({ type: ADMIN_REPORTS, payload: reports });
    // dispatch({ type: ADMIN_PDF, payload: "" });

    // setActiveStep(0);
  };

  useEffect(() => {
    dispatch(getPoints());
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", fontSize: "24px" }}
        >
          {" "}
          Admin Reporting{" "}
        </Typography>

        <div className={classes.header}>
          <Typography variant="h6" className={classes.totalPoints}>
            Total Admin Points {adminPoints.adminstars}
            <Icon className={classes.starIcon}>
              <Star color="primary" />
            </Icon>
          </Typography>
          <Typography variant="h6" style={{ margin: "0 8px" }}>
            |
          </Typography>
          <Typography variant="h6" className={classes.totalPoints}>
            Total Activity Points {adminPoints.activityStar}
            <Icon className={classes.starIcon}>
              <Star color="primary" />
            </Icon>
          </Typography>
        </div>
        <Box sx={{ maxWidth: "500px", margin: "1rem  auto 0" }}>
          {/* Select Month */}
          <SelectMonth />
        </Box>
      </Box>

      <div className={classes.root}>
        <Stepper className={classes.stepBtn} activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={index}
              // className={
              //   activeStep === index ? classes.activeStep : classes.inactiveStep
              // }
            >
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step content */}
        <Paper elevation={3} style={{ padding: "20px", marginTop: "1rem" }}>
          {getStepForm()}

          {/* Buttons */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
              padding:"5px"
            }}
          >
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              style={{ marginRight: "10px" }}
            >
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={20}/> : "Submit"}
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            )}
          </div>
        </Paper>
      </div>
    </>
  );
}
