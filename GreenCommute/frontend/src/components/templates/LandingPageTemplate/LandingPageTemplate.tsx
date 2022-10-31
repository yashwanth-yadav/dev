import { Box, Grid } from '@mui/material';
import React, { ReactNode } from 'react';
import theme from '../../../theme';
import { logo_color } from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const LandingPageTemplate = ({ left, right }: Props) => {
  return (
    <Grid data-testid="screen1" container sx={{ height: '100%' }}>
      <Grid
        item
        sx={{
          backgroundColor: 'gammaWhite.main',
          height: '100vh',
          width: '57vw',
          paddingLeft: theme.spacing(25),
          paddingTop: theme.spacing(8)
        }}
      >
        <Icons icon={logo_color} />
        <Box sx={{ width: '100%', height: theme.spacing(22.25) }}></Box>
        {left}
      </Grid>
      <Grid
        item
        sx={{
          height: '100vh',
          width: '40vw',
          display: 'flex',
          flexGrow: '1',
          background: theme.palette.background.paper
        }}
      >
        {right}
      </Grid>
    </Grid>
  );
};

export default LandingPageTemplate;
