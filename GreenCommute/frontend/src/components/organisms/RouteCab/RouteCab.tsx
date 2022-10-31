import { Box, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import CabFareListItem from '../../molecules/CabFareListItem/CabFareListItem';
import Icons from '../../atoms/Icons/Icons';

import {
  rupee,
  ola,
  uber,
  rapido,
  bikeIcon,
  metroOutlinedIcon,
  metroSelectedIcon,
  carOutlinedIcon,
  carSelectedIcon,
  trainOutlinedIcon,
  dot
} from '../../../utils/constants';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import RouteMetro from '../RouteMetro/RouteMetro';
import {
  METRO_DISTANCE,
  METRO_FARE,
  METRO_TEXT,
  METRO_TIME
} from '../../../messages';

export default function RouteCab() {
  const [isMetroSelected, setIsMetroSelected] = useState(true);
  const [isCarSelected, setIsCarSelected] = useState(false);

  const handleMetroButton = () => {
    if (!isMetroSelected) {
      setIsMetroSelected(!isMetroSelected);
      setIsCarSelected(!isCarSelected);
    }
  };

  const handleCarButton = () => {
    if (!isCarSelected) {
      setIsCarSelected(!isCarSelected);
      setIsMetroSelected(!isMetroSelected);
    }
  };

  return (
    <>
      <Box data-testid="routeCab">
        <Box
          sx={{
            borderRadius: theme.spacing(3)
            // width: theme.spacing(101)
          }}
        >
          <Grid container sx={{ paddingX: theme.spacing(2.5) }}>
            <Grid item sx={{ marginX: theme.spacing(1.25) }}>
              <IconButtonAtom
                sx={{
                  height: theme.spacing(11),
                  width: theme.spacing(11),
                  minWidth: theme.spacing(11),
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
                startIcon={<Icons icon={bikeIcon} />}
              />
            </Grid>
            <Grid
              data-testid="handleMetroButton"
              onClick={handleMetroButton}
              item
              sx={{ marginX: theme.spacing(1.25) }}
            >
              <IconButtonAtom
                sx={{
                  height: theme.spacing(11),
                  width: theme.spacing(11),
                  minWidth: theme.spacing(11),
                  cursor: 'pointer',
                  borderRadius: '50%',
                  backgroundColor: isMetroSelected
                    ? 'alpha500.main'
                    : 'gammaWhite.main',

                  '&:hover': {
                    backgroundColor: isMetroSelected ? 'alpha600.main' : 'none'
                  }
                }}
                startIcon={
                  isMetroSelected ? (
                    <Icons icon={metroSelectedIcon} />
                  ) : (
                    <Icons icon={metroOutlinedIcon} />
                  )
                }
              />
            </Grid>
            <Grid
              data-testid="handleCarButton"
              onClick={handleCarButton}
              sx={{ marginX: theme.spacing(1.25) }}
              item
            >
              <IconButtonAtom
                sx={{
                  height: theme.spacing(11),
                  width: theme.spacing(11),
                  minWidth: theme.spacing(11),
                  cursor: 'pointer',
                  borderRadius: '50%',
                  backgroundColor: isCarSelected
                    ? 'alpha500.main'
                    : 'gammaWhite.main',

                  '&:hover': {
                    backgroundColor: isCarSelected ? 'alpha600.main' : 'none'
                  }
                }}
                startIcon={
                  isCarSelected ? (
                    <Icons icon={carSelectedIcon} />
                  ) : (
                    <Icons icon={carOutlinedIcon} />
                  )
                }
              />
            </Grid>
            <Grid item sx={{ marginX: theme.spacing(1.25) }}>
              <IconButtonAtom
                sx={{
                  height: theme.spacing(11),
                  width: theme.spacing(11),
                  minWidth: theme.spacing(11),
                  cursor: 'pointer',
                  borderRadius: '50%'
                }}
                startIcon={<Icons icon={trainOutlinedIcon} />}
              />
            </Grid>
          </Grid>
        </Box>
        {isMetroSelected ? (
          <RouteMetro />
        ) : (
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
                  <Icons icon={rupee} />
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
              </Grid>
              <Box
                sx={{
                  top: theme.spacing(20),
                  // left: theme.spacing(7.25),
                  position: 'relative'
                }}
              >
                <Grid item>
                  <CabFareListItem cabIcon={ola} />
                </Grid>
                <Grid item>
                  <CabFareListItem cabIcon={uber} />
                </Grid>
                <Grid item>
                  <CabFareListItem cabIcon={rapido} />
                </Grid>
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}
