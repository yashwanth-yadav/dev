import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from '../../../theme';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import AutoCompleteSearch from '../../molecules/AutoCompleteSearch/AutoCompleteSearch';
import { grnCommute2000 } from '../../../messages';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLProps<HTMLInputElement> {
  steps: string[];
  currentLocationOptions: string[];
  jobLocationOptions: string[];
  skillOptions: string[];
  city: {
    name: string;
    AQIIndex: number;
  }[];
  setCity: (value: any) => void;
  setCity2: (value: any) => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  aqi_data: {
    name: string;
    AQIIndex: number;
  }[];
  setcurrentLoc: React.Dispatch<React.SetStateAction<string>>;
  setstepperData: React.Dispatch<
    React.SetStateAction<{
      firstStep: string;
      secondStep: string[];
      thirdStep: string[];
    }>
  >;
  stepperData: {
    firstStep: string;
    secondStep: string[];
    thirdStep: string[];
  };
  tempCity1: {
    name: string;
    AQIIndex: number;
  }[];
  settempCity1: (value: any) => void;
  tempCity2: {
    name: string;
    AQIIndex: number;
  }[];
  settempCity2: (value: any) => void;
  currentLoc: string;
}

const HorizontalStepper = ({
  steps,
  currentLocationOptions,
  jobLocationOptions,
  skillOptions,
  city,
  tempCity1,
  settempCity1,
  tempCity2,
  settempCity2,
  setCity,
  setCity2,
  setStep,
  aqi_data,
  setstepperData,
  stepperData,
  setcurrentLoc,
  currentLoc
}: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 0 || step === 1 ;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  setStep(activeStep);

  const aqival = (name: any) => {
    console.log(name);
    for (let i = 0; i < aqi_data.length; i++) {
      if (name === aqi_data[i].name) {
        return aqi_data[i].AQIIndex;
      }
    }
  };

  const handleNext = () => {
    setCity2(city);

    if (activeStep == 0) {
      settempCity1(city);
    } else if (activeStep == 1) {
      settempCity2(city);
      console.log(city);
    }
    setCity([]);
    console.log(stepperData.secondStep);

    if (
      stepperData.secondStep.length != 0 &&
      activeStep == 0 &&
      tempCity2 != null
    ) {
      console.log(tempCity2);
      console.log(activeStep);
      const data: { city: string; AQI: number | undefined }[] = [];
      stepperData.secondStep.map((d) => {
        data.push({
          city: d,
          AQI: aqival(d)
        });
      });
      setCity(data);
    }
    if (
      stepperData.thirdStep.length != 0 &&
      activeStep == 1 &&
      tempCity2 != null
    ) {
      setCity(tempCity2);
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep == 1) {
      console.log(activeStep);
      setCity2(city);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    if (activeStep == 1) {
      setCity(tempCity1);
    } else if (activeStep == 2) {
      setCity(tempCity2);
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (activeStep == 0) {
      setcurrentLoc('');
      setstepperData({
        ...stepperData,
        firstStep: ''
      });
    } else if (activeStep == 1) {
      setstepperData({
        ...stepperData,
        secondStep: []
      });
    }
    setCity([]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <Box sx={{ width: '672px', position: 'relative' }}>
      <Stepper
        activeStep={activeStep}
        connector={<Box></Box>}
        sx={{
          color: theme.palette.betaHigh.main,
          ...theme.typography.subtitle2
        }}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step
              key={label}
              {...stepProps}
              sx={{
                '& .MuiStepIcon-text ': {
                  color: theme.palette.betaHigh.main,
                  ...theme.typography.subtitle2,
                  fontSize: theme.spacing(4)
                },
                '& .MuiStepLabel-root .Mui-completed': {
                  color: theme.palette.alpha300.main
                },

                '& .MuiStepLabel-root .Mui-active': {
                  color: theme.palette.alpha300.main
                },

                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: theme.palette.beta100.main
                  },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: theme.palette.gammaWhite.main,
                  ...theme.typography.subtitle2
                }
              }}
            >
              <StepLabel
                sx={{
                  '& .MuiStepIcon-root': {
                    height: '40px',
                    width: '40px',
                    ...theme.typography.subtitle1,
                    color: theme.palette.beta100.main
                  },
                  '& .MuiSvgIcon-root-MuiStepIcon-root': {
                    color: 'red'
                  },
                  '& .MuiStepIcon-text': {
                    fill: theme.palette.betaHigh.main
                  }
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Box sx={{ width: '100%', height: '72px' }}></Box>
        <Box
          sx={{ color: theme.palette.betaHigh.main, ...theme.typography.h1 }}
        >
          <Grid container>
            <Grid item lg={10} md={7} sm={7}>
              <Typography
                role="text"
                sx={{
                  color: theme.palette.betaHigh.main,
                  ...theme.typography.h1
                }}
              >
                {grnCommute2000}
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ width: '100%', height: '64px' }}></Box>
          {activeStep === 0 && (
            <AutoCompleteSearch
              currentLoc={currentLoc}
              tempCity1={tempCity1}
              currentStep={0}
              tempCity2={tempCity2}
              step={activeStep}
              setstepperData={setstepperData}
              stepperData={stepperData}
              setcurrentLoc={setcurrentLoc}
              aqi_data={aqi_data}
              placeholder="Enter your Location"
              label="Where do  you stay ?"
              chips={false}
              options={currentLocationOptions}
              // city={city}
              setCity={setCity}
            ></AutoCompleteSearch>
          )}
          {activeStep === 1 && (
            <AutoCompleteSearch
              currentLoc={currentLoc}
              tempCity1={tempCity1}
              tempCity2={tempCity2}
              step={activeStep}
              currentStep={1}
              setstepperData={setstepperData}
              stepperData={stepperData}
              setcurrentLoc={setcurrentLoc}
              aqi_data={aqi_data}
              placeholder="Enter your job location"
              label="Where do you want to work?"
              chips={true}
              options={jobLocationOptions}
              setCity={setCity}
            ></AutoCompleteSearch>
          )}
          {activeStep === 2 && (
            <AutoCompleteSearch
              currentLoc={currentLoc}
              tempCity1={tempCity1}
              tempCity2={tempCity2}
              step={activeStep}
              setstepperData={setstepperData}
              stepperData={stepperData}
              currentStep={2}
              setcurrentLoc={setcurrentLoc}
              aqi_data={aqi_data}
              placeholder="Enter your skills"
              label="What do you want to do?"
              chips={true}
              options={skillOptions}
              setCity={setCity}
            ></AutoCompleteSearch>
          )}
          <Box sx={{ width: '100%', height: theme.spacing(9) }}></Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box
            role="back"
            onClick={handleBack}
            sx={
              activeStep == 0
                ? { display: 'none' }
                : { color: theme.palette.alpha400.main }
            }
          >
            <IconButtonAtom
              variant="outlined"
              sx={{
                height: theme.spacing(11.5),
                width: theme.spacing(35),
                minWidth: theme.spacing(11),
                borderRadius: theme.spacing(2),
                backgroundColor: 'gammaWhite.main',
                cursor: 'pointer',
                color: 'alpha400.main',
                borderColor: 'alpha400.main',
                '&:hover': {
                  borderColor: 'alpha400.main'
                }
              }}
            >
              Back
            </IconButtonAtom>
          </Box>

          <Box
            sx={
              activeStep == 0
                ? { display: 'none' }
                : { width: theme.spacing(3) }
            }
          />

          <Box onClick={handleNext} role="next">
            <Link
              to={activeStep == 2 ? '/home' : ''}
              style={{ textDecoration: 'none' }}
            >
              <IconButtonAtom
                sx={{
                  height: theme.spacing(11.5),
                  width: theme.spacing(35),
                  minWidth: theme.spacing(11),
                  borderRadius: theme.spacing(2),
                  backgroundColor: 'alpha400.main',
                  cursor: 'pointer',
                  color: 'gammaWhite.main',
                  '&:hover': {
                    backgroundColor: 'alpha600.main'
                  }
                }}
              >
                Next
              </IconButtonAtom>
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: '100%', top: '102px' }}></Box>
        {isStepOptional(activeStep) && (
          <Button
            role="skip"
            color="inherit"
            onClick={handleSkip}
            sx={{ position: 'absolute', top: theme.spacing(128.5) }}
          >
            <Typography
              sx={{
                color: theme.palette.alpha400.main,
                underline: { textDecorationLine: 'underline' }
              }}
            >
              Skip
            </Typography>
          </Button>
        )}
      </React.Fragment>
    </Box>
  );
};

export default HorizontalStepper;
