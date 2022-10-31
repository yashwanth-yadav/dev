import React from 'react';
import Box from '@mui/material/Box';
import { Stepper as MuiStepper, Step, Typography } from '@mui/material';
import theme from '../../../theme';
import { SteppersProps } from '../../../utils/Types';

const Stepper = ({ step, steps, labStepper }: SteppersProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <MuiStepper
        activeStep={step}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
        connector={
          <div
            style={{
              width: '68px',
              border: `1px solid ${theme.palette.gammaLow.main}`
            }}
          ></div>
        }
      >
        {labStepper
          ? steps.map((label, index) => {
              return (
                <Step
                  active={step === index}
                  sx={{
                    color: step !== index ? 'gammaLow.main' : 'gammaHigh.main'
                  }}
                  key={label}
                >
                  <Typography
                    variant="caption2"
                    sx={{ fontWeight: step == index ? '700' : '400' }}
                  >
                    {label}
                  </Typography>
                </Step>
              );
            })
          : steps
              .filter((_step, index) => step >= index)
              .map((label, index) => {
                return (
                  <Step
                    active={step === index}
                    sx={{
                      color: step !== index ? 'gammaLow.main' : 'gammaHigh.main'
                    }}
                    key={label}
                  >
                    <Typography
                      variant="caption2"
                      sx={{ fontWeight: step == index ? '700' : '400' }}
                    >
                      {label}
                    </Typography>
                  </Step>
                );
              })}
      </MuiStepper>
    </Box>
  );
};

export default Stepper;
