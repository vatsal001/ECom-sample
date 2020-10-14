import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Boxes from "../Components/BoxComponent/Boxes";
import Items from "../Components/ItemsComponents/Items";
import Cards from "../Components/CardComponent/Cards";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "SELECT YOUR PACKAGING",
    "SELECT YOUR GIFTS",
    "PERSONALIZE IT",
    "REVIEW",
  ];
}
export default function StepperComp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <React.Fragment>
            <Boxes handleNext={handleNext} />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Items handleNext={handleNext} handleBack={handleBack} />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <Cards handleNext={handleNext} handleBack={handleBack} />
          </React.Fragment>
        );
      default:
        return "REVIEW";
    }
  }
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>{getStepContent(activeStep)}</div>
        )}
      </div>
    </div>
  );
}
