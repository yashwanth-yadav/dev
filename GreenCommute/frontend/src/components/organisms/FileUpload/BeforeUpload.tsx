import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { FILE_UPLOAD, CLICK_HERE_TO_UPLOAD_FILES } from '../../../messages';

interface BeforeProps {
  handleUploadSuccess: () => void;
}

const BeforeUpload = ({ handleUploadSuccess }: BeforeProps) => {
  return (
    <Box sx={{}}>
      <Typography
        variant="h2"
        color="betaMedium.main"
        sx={{
          fontWeight: '600',
          marginBottom: theme.spacing(1),
          paddingBottom: theme.spacing(4)
        }}
      >
        {FILE_UPLOAD}
      </Typography>
      <Box
        sx={{
          height: theme.spacing(67),
          width: theme.spacing(148),
          bgcolor: 'gammaAccent3.main',
          borderRadius: theme.spacing(3),
          border: `${theme.spacing(0.5)} dashed ${theme.palette.alpha400.main}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          onClick={handleUploadSuccess}
          sx={{
            height: theme.spacing(10),
            width: theme.spacing(70),
            borderRadius: theme.spacing(2),
            bgcolor: 'alpha400.main',
            '&:hover': {
              bgcolor: 'alpha400.main'
            }
          }}
        >
          <Typography variant="caption1" color="gammaWhite.main">
            {CLICK_HERE_TO_UPLOAD_FILES}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default BeforeUpload;
