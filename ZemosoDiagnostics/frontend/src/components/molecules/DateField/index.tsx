import * as React from 'react';
import { Box, TextField as MuiTextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import theme from '../../../theme';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import { DateFieldProps } from '../../../utils/Types';

const TextField = styled(MuiTextField)`
  & .MuiInput-input {
    color: ${theme.palette.gammaHigh.main};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border: none;
  }
  

  & .MuiInput-underline::before {
    border-color: ${theme.palette.grey100.main} !important;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 1px solid ${theme.palette.grey100.main};
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid ${theme.palette.grey100.main};
  }
  .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root {
    &:hover {
      background: none;
    }
  }
  & .MuiIconButton-root {
    margin-top: -20px;
  }
`;

const CalenderIcon = () => (
  <Box data-testid="calendar-icon_">
    <Icon name="calendar"></Icon>
  </Box>
);

export const DateField = ({ label, handleChange }: DateFieldProps) => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const calculateAge = (dob: Date) => {
    const currentYear = new Date().getFullYear();
    if (dob instanceof Date && !isNaN(dob.valueOf()))
      return currentYear - dob.getFullYear();
    else return 0;
  };

  return (
    <Box
      sx={{
        height: theme.spacing(14),
        width: '100%'
      }}
      data-testid="date-field"
    >
      <Typography
        sx={{
          ...theme.typography.body3,
          fontSize: '14px',
          wordBreak: 'break-word',
          color: theme.palette.gammaLow.main,
          paddingBottom: theme.spacing(2.5)
        }}
      >
        {label}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          components={{
            OpenPickerIcon: CalenderIcon
          }}
          disableFuture={true}
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={(newValue: Date | null) => {
            setValue(newValue);
            if (newValue !== null && handleChange !== undefined) {
              handleChange(calculateAge(newValue));
            }
          }}
          renderInput={(params) => (
            <TextField
              data-testid="text-field"
              {...params}
              sx={{
                width: '100%',
                ...theme.typography.caption2,
                lineHeight: theme.spacing(4.5),
                fontWeight: theme.spacing(100),
                fontSize: theme.spacing(3.5)
              }}
              variant="standard"
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DateField;
