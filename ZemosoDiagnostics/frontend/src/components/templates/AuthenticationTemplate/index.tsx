import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import theme from '../../../theme';

interface Props {
  mainComponent?: ReactNode;
}

const AuthenticationTemplate = ({ mainComponent }: Props) => {
  return (
    <Box data-testid='authenticationTemplate'
      justifyContent="center" display="flex" 
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems:'center',
        padding:theme.spacing(0),
        backgroundColor: theme.palette.structuralPurple50.main,
      }}
    >
      {mainComponent}
    </Box>
  );
};

export default AuthenticationTemplate;

