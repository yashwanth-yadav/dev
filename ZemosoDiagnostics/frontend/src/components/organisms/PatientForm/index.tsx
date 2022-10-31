import React from 'react';
import { Box as MuiBox, Checkbox, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import Chip from '../../molecules/Chip';
import { BOOKING_FOR, GENDERS } from '../../../utils/Constants';
import RadioButton from '../../atoms/RadioButton/Index';
import DateField from '../../molecules/DateField';
import {
  ADD_PATIENT_DETAILS,
  BOOKING_FOR_WHOM,
  GENDER_LABEL,
  SAVE_DETAILS_CHECKBOX_LABEL
} from '../../../utils/Messages';
import InputField from '../../molecules/InputField';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  width: 583px;
  padding: 1.5rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);

  .heading {
    color: ${theme.palette.gammaMedium.main};
    margin-bottom: 1.25rem;
  }

  .label {
    color: ${theme.palette.gammaMedium.main};
    margin-bottom: 0.5rem;
  }

  .chips {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .inpuField {
    margin-bottom: 1.125rem;
  }

  .dateField {
    margin-bottom: 1.125rem;
  }

  .genderField {
    margin-bottom: 2rem;
  }

  .radioButtons {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .radioButton {
    display: flex;
    align-items: center;
    cursor: pointer;
    .Mui-checked {
      color: ${theme.palette.structuralPurple800.main}
    },
  }

  .gender,
  .checkBoxLabel {
    font-size: 0.875rem;
  }

  .checkBoxField {
    display: flex;
    align-items: center;
  }
`;

export const PatientForm = ({patientDetails,setPatientDetails}:any) => {
  const [bookingForId, setBookingForId] = React.useState<number>(0);
  const [genderId, setGenderId] = React.useState<number>(0);

  const handleBookingFor = (id: number) => {
    setBookingForId(id);
    setPatientDetails({
      ...patientDetails,
      bookingFor: BOOKING_FOR[id] === 'Myself' ? 'Self' : BOOKING_FOR[id]
    });
  };
  const handleGender = (id: number) => {
    setGenderId(id);
    setPatientDetails({ ...patientDetails, gender: GENDERS[id] });
  };

  const handleAge = (age: number) => {
    setPatientDetails({
      ...patientDetails,
      age: age
    });
  };

  const handleName = (name: string) => {
    setPatientDetails({ ...patientDetails, name: name });
  };

  return (
    <Box data-testid="patient-form">
      <Typography variant="subtitle1" className="heading">
        {ADD_PATIENT_DETAILS}
      </Typography>

      <Typography variant="overline2" component="div" className="label">
        {BOOKING_FOR_WHOM}
      </Typography>

      <MuiBox className="chips">
        {BOOKING_FOR.map((bookingForItem, index) => {
          return (
            <Chip
              id={''}
              key={index}
              label={
                <Typography variant="caption2">{bookingForItem}</Typography>
              }
              size="small"
              selected={index === bookingForId}
              onClick={() => handleBookingFor(index)}
              data-testid={`chip-${index}`}
            />
          );
        })}
      </MuiBox>

      <MuiBox className="inputField">
        <InputField 
          label={'Name'}
          placeholder={'Enter your name'}
          handleChange={handleName}
        />
      </MuiBox>

      <MuiBox className="dateField">
        <DateField label={'Date of Birth'} handleChange={handleAge} />
      </MuiBox>

      <MuiBox className="genderField">
        <Typography variant="caption2" component="div" className="label">
          {GENDER_LABEL}
        </Typography>
        <MuiBox className="radioButtons">
          {GENDERS.map((gender, index) => {
            return (
              <MuiBox
                className="radioButton"
                key={index}
                onClick={() => handleGender(index)}
                data-testid={`radio-button-${index}`}
              >
                <RadioButton sx={{pl: '0px'}} checked={index === genderId} />
                <Typography variant="gammaRegular" className="gender">
                  {gender}
                </Typography>
              </MuiBox>
            );
          })}
        </MuiBox>
      </MuiBox>

      <MuiBox className="checkBoxField">
        <Checkbox
          defaultChecked
          sx={{
            pl: '0px',
            color: theme.palette.structuralPurple800.main,
            '&.Mui-checked': {
              color: theme.palette.structuralPurple800.main
            }
          }}
        />
        <Typography
          className="checkBoxLabel"
          variant="gammaRegular"
          color={`${theme.palette.gammaMedium.main}`}
        >
          {SAVE_DETAILS_CHECKBOX_LABEL}
        </Typography>
      </MuiBox>
    </Box>
  );
};
