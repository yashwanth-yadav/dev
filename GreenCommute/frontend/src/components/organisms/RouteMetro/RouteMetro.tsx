import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import theme from '../../../theme';
import Icons from '../../atoms/Icons/Icons';
import { rupee, MapImg, dot } from '../../../utils/constants';
import {
  METRO_DISTANCE,
  METRO_FARE,
  METRO_MAP_TEXT,
  METRO_TEXT,
  METRO_TIME
} from '../../../messages';

const RouteMetro = () => {
  return (
    <Box
      style={{
        background: theme.palette.gammaWhite.main,
        borderRadius: theme.spacing(3),
        width: theme.spacing(101),
        height: theme.spacing(70.75),
        position: 'relative'
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: theme.palette.betaHigh.main,

              ...theme.typography.body2,
              position: 'absolute',
              top: theme.spacing(6),
              left: theme.spacing(3.8333)
            }}
          >
            {METRO_TEXT}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              color: theme.palette.betaMedium.main,
              ...theme.typography.body1,
              position: 'absolute',
              top: theme.spacing(14.5),
              left: theme.spacing(3.8333)
            }}
          >
            <img src={rupee}></img>
          </Box>

          <Typography
            sx={{
              color: theme.palette.betaMedium.main,
              ...theme.typography.body1,
              position: 'absolute',
              top: theme.spacing(14.5),
              left: theme.spacing(8.083)
            }}
          >
            {METRO_FARE}
          </Typography>

          <Typography
            sx={{
              color: theme.palette.beta400.main,
              ...theme.typography.body1,
              position: 'absolute',
              top: theme.spacing(13.5),
              left: theme.spacing(19.25)
            }}
          >
            <Icons
              icon={dot}
              height={theme.spacing(1)}
              width={theme.spacing(1)}
            ></Icons>
          </Typography>

          <Typography
            sx={{
              color: theme.palette.betaMedium.main,
              ...theme.typography.body1,
              position: 'absolute',
              top: theme.spacing(14.25),
              left: theme.spacing(22.75)
            }}
          >
            {METRO_DISTANCE}
          </Typography>
          <Typography
            sx={{
              color: theme.palette.beta400.main,
              ...theme.typography.body1,
              position: 'absolute',
              top: theme.spacing(13.5),
              left: theme.spacing(37.5)
            }}
          >
            <Icons
              icon={dot}
              height={theme.spacing(1)}
              width={theme.spacing(1)}
            ></Icons>
          </Typography>

          <Typography
            sx={{
              color: theme.palette.betaMedium.main,
              ...theme.typography.body1,
              position: 'absolute',
              top: theme.spacing(14.5),
              left: theme.spacing(41)
            }}
          >
            {METRO_TIME}
          </Typography>
          <Box
            sx={{
              height: theme.spacing(35.75),
              // width: theme.spacing(90.25),
              borderRadius: theme.spacing(2),
              position: 'absolute',
              top: theme.spacing(21),
              left: theme.spacing(1.25)
            }}
          >
            <img src={MapImg}></img>
          </Box>
          <Typography
            sx={{
              color: theme.palette.alpha400.main,
              ...theme.typography.caption2,
              position: 'absolute',
              top: theme.spacing(60.75),
              left: theme.spacing(5.25)
            }}
          >
            {METRO_MAP_TEXT}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RouteMetro;
