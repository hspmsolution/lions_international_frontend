import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Divider,
  Typography,Icon ,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StepOneForm from '../Forms/StepOneForm';
import StepTwoForm from '../Forms/StepTwoForm';
import StepThreeForm from '../Forms/StepThreeForm';
import StepFourForm from '../Forms/StepFourForm';
import SelectMonth from '../Forms/SelectMonth';
import { Star } from '@mui/icons-material';



const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  stepBtn: {
    background: '#F2F2F2',
    border: 'none',
    borderRadius: '5px',
    padding: '20px',
    justifyContent:'space-between',
    boxShadow: '0px 0px 5px #BFBFBF',
    '& .MuiStepConnector-root': {
      display: 'none',
    },
    '& .MuiStepIcon-root': {
      fontSize: '1.5rem',
    },
    '& .MuiStepLabel-label': {
      fontSize: '1.2rem',
      fontWeight:'500',
      color:'white',
    },

  },
  activeStep: {
    color: 'white',
    background: '#0077C0',
    '& .MuiStepIcon-root': {
      color: '#0077C0',
    },
    padding: '16px',
    borderRadius: '4px',
  },
  inactiveStep: {
    color: '#F2F2F2',
    background: '#49A5FF',
    '& .MuiStepIcon-root': {
      color: '#49A5FF',
    },
    padding: '16px',
    borderRadius: '4px',
  },
  totalPoints: {
    marginRight: '8px',
    display: 'flex',
    alignItems: 'baseline',
    alignContent:'center',
    justifyContent: 'center'
  },
  header:{
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  }
  
});

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

export default function FormWizard() {

  const classes = useStyles();

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
    console.log('Form submitted!');
  };

  return (
    <>
    <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '24px' }}> Admin Reporting </Typography>

    
    <div className={classes.header}>
      <Typography variant="h6" className={classes.totalPoints}>
        Total Admin Points 208 
        <Icon className={classes.starIcon}>
          <Star color="primary" />
        </Icon>
      </Typography>
      <Typography variant="h6" style={{ margin: '0 8px' }}>
        |
      </Typography>
      <Typography variant="h6" className={classes.totalPoints}>
        Total Activity Points
        <Icon className={classes.starIcon}>
          <Star color="primary" />
        </Icon>
      </Typography> 
    </div>
    <SelectMonth/>
 
    <div className={classes.root}>
      <Stepper className={classes.stepBtn} activeStep={activeStep}>
        {steps.map((step,index) => (
          <Step key={step} className={activeStep === index ? classes.activeStep : classes.inactiveStep}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step content */}
      <Paper elevation={3} style={{ padding: "20px" }}>
        {getStepForm()}

        {/* Buttons */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ marginRight: "10px" }}
          >
            Back
          </Button>

          {activeStep === steps.length -1?
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
            :
            <Button onClick={handleNext} variant="contained" color="primary">
              Next
            </Button>
          }
        </div>
      </Paper>
    </div>
    </>
  );
}

