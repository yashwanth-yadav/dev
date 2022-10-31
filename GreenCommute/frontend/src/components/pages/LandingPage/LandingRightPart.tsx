import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import theme, { imageTypes } from '../../../theme';
import Illustration from '../../atoms/Illustrations/Illustrations';

interface Props {
  text: string;
  image: imageTypes;
  height: string;
  width: string;
  city2: {
    name: string;
    AQIIndex: number;
  }[];
  step: number;
}

const LandingRightPart = ({ text, image, height, width }: Props) => {
  return (
    <Grid
      data-testid="landingRightPart"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        position: 'absolute',
        width: '43%',
        height: '100%',
        right: theme.spacing(0),
        top: theme.spacing(0),
        backgroundColor: theme.palette.background.default
      }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      rowSpacing={1}
    >
      <Illustration name={image} height={height} width={width}></Illustration>
      <Typography
        sx={{
          color: theme.palette.betaHigh.main,
          ...theme.typography.h2,
          textAlign: 'center',
          paddingTop: theme.spacing(10),
          paddingLeft: theme.spacing(5)
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default LandingRightPart;
