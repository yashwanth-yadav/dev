/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../../atoms/Button';
import theme from '../../../theme';
import { FormControlProps } from '../../../utils/Types';
import { CANCEL_TYPO } from '../../../utils/Messages';
import { MONTHS } from '../../../utils/Constants';

const Box = styled(MuiBox)`
  min-height: 70px;
  background-color: ${theme.palette.gammaWhite.main};
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const FormControl = ({
  activeStep,
  buttonText,
  labName,
  testPrice,
  numberOfPatients,
  isSelectPatient,
  islabs,
  handleButton,
  appointment
}: FormControlProps) => {
  const handleTextState = (step: number) => {
    switch (step) {
      case 0:
        return (
          <MuiBox
            sx={{
              marginRight: theme.spacing(6),
              marginY: theme.spacing(3.5),
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              marginLeft: theme.spacing(5)
            }}
          >
            <Typography
              sx={{
                ...theme.typography.overline2,
                color: theme.palette.gammaLow.main
              }}
            >
              {labName}{' '}
            </Typography>
            <MuiBox
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginTop: '3px'
              }}
            >
             { testPrice&&<Typography
                sx={{
                  ...theme.typography.body,
                  color: theme.palette.gammaHigh.main
                }}
              >
                ${`${testPrice}  for 1 Test`}
              </Typography>}
            </MuiBox>
          </MuiBox>
        );
      case 1:
        return (
          <MuiBox
            sx={{
              marginRight: theme.spacing(6),
              marginY: theme.spacing(6.25),
              flexWrap: 'wrap',
              marginLeft: theme.spacing(5)
            }}
          >
            <Typography>
              {appointment?.time.startTime &&
                `${MONTHS[Number(appointment.month) - 1]} ${
                  appointment.date
                }, ${
                  appointment.day
                }, ${appointment.time.startTime.substring(0, 5).toLowerCase()} - ${appointment.time.endTime.toLowerCase()}`}
            </Typography>
          </MuiBox>
        );

      case 2:
        if (!islabs) {
          return (
            <MuiBox
              sx={{
                marginRight: theme.spacing(6),
                marginY: theme.spacing(6.25),
                flexWrap: 'wrap',
                marginLeft: theme.spacing(5),
                letterSpacing: '-0.005em'
              }}
            >
              <Typography>
                {numberOfPatients != 0 && isSelectPatient && numberOfPatients}{' '}
                {isSelectPatient && numberOfPatients != 0 && 'Patient Selected'}
              </Typography>
            </MuiBox>
          );
        } else {
          return <></>;
        }
    }
  };

  return (
    <Box data-testid="form-control">
      <MuiBox
        sx={{
          flex: 1,
          [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(5)
          },
          marginLeft: theme.spacing(25.5),
          marginY: theme.spacing(6.25)
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              ...theme.typography.body,
              color: theme.palette.red200.main,
              letterSpacing: '-0.005em'
            }}
          >
            {CANCEL_TYPO}
          </Typography>
        </Link>
      </MuiBox>

      {handleTextState(activeStep)}

      {activeStep === 4 ? (
        <Link to="/orderPlaced">
          {' '}
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            data-testid="form-control-button"
            onClick={() => {
              handleButton(activeStep);
            }}
            variant="contained"
            sx={{
              width:'222px',
              backgroundColor: theme.palette.interactiveBlue500.main,
              borderRadius: theme.spacing(2),
              display: 'flex',
              marginRight: theme.spacing(22.5),
              [theme.breakpoints.down('sm')]: {
                marginRight: theme.spacing(3),
                paddingY: theme.spacing(2.75),
                paddingX: theme.spacing(10)
              },
              paddingY: theme.spacing(2.75),
              '&:hover': {
                backgroundColor: theme.palette.interactiveBlue500.main
              }
            }}
          >
            <Typography>{buttonText}</Typography>
          </Button>{' '}
        </Link>
      ) : (
        <Button
          disableElevation
          disableFocusRipple
          disableRipple
          data-testid="form-control-button"
          onClick={() => {
            handleButton(activeStep);
          }}
          variant="contained"
          sx={{
            width:'222px',
            backgroundColor: theme.palette.interactiveBlue500.main,
            borderRadius: theme.spacing(2),
            display: 'flex',
            marginRight: theme.spacing(22.5),
            [theme.breakpoints.down('sm')]: {
              marginRight: theme.spacing(3),
              paddingY: theme.spacing(2.75),
              paddingX: theme.spacing(10)
            },
            paddingY: theme.spacing(2.75),
            '&:hover': {
              backgroundColor: theme.palette.interactiveBlue500.main
            }
          }}
        >
          <Typography>{buttonText}</Typography>
        </Button>
      )}
    </Box>
  );
};

export default FormControl;
