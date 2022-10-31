import { Grid, Typography, Box } from '@mui/material';
import * as React from 'react';
import AQIComponent from '../../atoms/BC40GC_atom_for_AQI/AQIComponent';
import { AQI_LIST_TEXT } from '../../../messages';

import theme from '../../../theme';

interface AQIProps {
  items: {
    city: string;
    AQI: number;
  }[];
  step: number;
  city2: {
    city: string;
    AQIIndex: number;
  }[];
}

const AQIList = (props: AQIProps) => {
  console.log(props.items);
  const AQICards = props.items.map(
    (AQICard) =>
      AQICard && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingBottom: theme.spacing(20.5)
          }}
        >
          <Grid item xs={4}>
            <AQIComponent value={AQICard.AQI != null ? AQICard.AQI : 1500} />
          </Grid>
          <Grid
            item
            xs={AQICard.city != null ? 4 : 0}
            sx={{
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <Typography
              style={{
                color: theme.palette.gammaAccent2.main,
                ...theme.typography.h2,
                fontWeight: theme.spacing(150)
              }}
            >
              {props.step == 1 && AQICard.city}
            </Typography>
          </Grid>
        </Grid>
      )
  );

  return (
    <Grid
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
      <Box
        sx={{
          width: '100%'
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {props.step == 1 ? (
            AQICards
          ) : props.step == 0 ? (
            <AQIComponent value={props.items[0].AQI} />
          ) : (
            <AQIComponent value={1500} />
          )}
        </Grid>
        <Typography
          sx={{
            color: theme.palette.betaHigh.main,
            ...theme.typography.h2,
            textAlign: 'center',
            paddingLeft: theme.spacing(5),
            paddingTop: theme.spacing(10)
          }}
        >
          {props.step == 2
            ? props.city2.length == 2
              ? `Jobs found in ${props.city2[0].city} & ${props.city2[1].city}`
              : props.city2.length == 1
              ? `Jobs found in ${props.city2[0].city}`
              : 'Total Jobs Found'
            : AQI_LIST_TEXT}
        </Typography>
      </Box>
      <Grid
        item
        xs={12}
        sx={{
          position: 'absolute',
          top: '75%'
        }}
      ></Grid>
    </Grid>
  );
};

export default AQIList;
