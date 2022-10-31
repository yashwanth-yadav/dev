import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { success } from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';
import { OKAY, SUCCESSFUL_UPLOAD_MESSAGE, ABC } from '../../../messages';

interface AfterProps {
  handleClose: () => void;
}

const AfterUpload = ({ handleClose }: AfterProps) => {
  return (
    <Box
      sx={{
        height: theme.spacing(67),
        width: theme.spacing(148),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <Icons
        icon={success}
        height={theme.spacing(25)}
        width={theme.spacing(25)}
      />
      <Typography variant="h2" color="betaLow.main">
        <Typography component="span" variant="h2" color="betaHigh.main">
          {ABC}
        </Typography>{' '}
        {SUCCESSFUL_UPLOAD_MESSAGE}
      </Typography>
      <Button
        onClick={handleClose}
        sx={{
          height: theme.spacing(10),
          width: theme.spacing(39),
          borderRadius: theme.spacing(2),
          bgcolor: 'alpha400.main',
          '&:hover': {
            bgcolor: 'alpha400.main'
          }
        }}
      >
        <Typography variant="caption1" color="gammaWhite.main">
          {OKAY}
        </Typography>
      </Button>
    </Box>
  );
};

export default AfterUpload;
