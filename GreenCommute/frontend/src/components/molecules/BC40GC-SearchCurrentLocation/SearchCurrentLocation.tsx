import { InputAdornment, TextField } from '@mui/material';

import React from 'react';
import theme from '../../../theme';
import { MapIcon } from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';

interface SearchCurrentLocationProps {
  currentLocation?: string | null;
  bgColor?: string;
}

export default function SearchCurrentLocation(
  props: SearchCurrentLocationProps
) {
  return (
    <TextField
      data-testid="search_current_location"
      value={props.currentLocation}
      focused={false}
      fullWidth={true}
      placeholder="Current location"
      inputProps={{
        sx: {
          fontSize: 16,
          color: theme.palette.gammaWhite.main,
          textTransform: 'none',
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 22,
          '&::placeholder': {
            color: theme.palette.gammaWhite.main
          }
        }
      }}
      sx={{
        backgroundColor: props.bgColor && props.bgColor,
        color: theme.palette.gammaWhite.main,
        width: theme.spacing(90)
      }}
      InputProps={{
        sx: {
          color: theme.palette.gammaWhite.main,
          backgroundColor: props.bgColor && props.bgColor,
          borderBottom: `1px solid ${theme.palette.gammaWhite.main}`
        },
        startAdornment: (
          <InputAdornment
            sx={{ marginBottom: theme.spacing(0.75) }}
            position="start"
          >
            <Icons
              height={theme.spacing(10)}
              width={theme.spacing(6)}
              icon={MapIcon}
            />
          </InputAdornment>
        )
      }}
      variant="standard"
    />
  );
}
