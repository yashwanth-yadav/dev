import React from 'react';
import { InputAdornment, TextField as MuiTextField } from '@mui/material';
import theme from '../../../theme';
import Icon from '../../atoms/Icon';
import { CURRENT_LOCATION_VALUE } from '../../../utils/Messages';
import styled from 'styled-components';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

 const TextField = styled(MuiTextField)`
 & .MuiInput-underline::before {
   border-color: white !important;
   border:none;
 }
 & .MuiInput-underline::after {
   border:none;
 }
`;

const LocationPicker = () => {
  return (
    <TextField
      data-testid="current_location"
      value={CURRENT_LOCATION_VALUE}
      focused={false}
      fullWidth={true}
      
      inputProps={{
        sx: {
          fontSize: theme.spacing(3.5),
          color: theme.palette.gammaHigh.main,
          fontWeight: theme.spacing(125)
        }
      }}
      sx={{
        width: theme.spacing(70.5),
      }}
      InputProps={{
        sx: {
          color: theme.palette.gammaWhite.main,
          borderBottom: `1px solid ${theme.palette.grey200.main}`
        },
        startAdornment: (
          <InputAdornment
            sx={{
              paddingTop: theme.spacing(0.75),
              paddingLeft: theme.spacing(2)
            }}
            position="start"
          >
            <Icon name="map"></Icon>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            sx={{ paddingTop: theme.spacing(0.75) }}
            position="end"
          >
            <Icon name="chevronDown"></Icon>
          </InputAdornment>
        )
      }}
      variant="standard"
    />
  );
};

export default LocationPicker;
