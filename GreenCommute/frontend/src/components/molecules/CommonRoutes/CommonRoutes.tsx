import { Card, CardContent, Grid, Typography } from '@mui/material';
import * as React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import theme from '../../../theme';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

interface Title {
  source?: string;
  destination?: string;
}

const CommonRoutes = (props: Title) => {
  return (
    <Card
      variant="outlined"
      style={{
        background: theme.palette.gammaWhite.main,
        color: theme.palette.betaHigh.main,
        ...theme.typography.caption2,
        borderRadius: '8px',
        boxShadow: theme.shadows[2],
        width: theme.spacing(89.75),
        height: theme.spacing(25.5),
        position: 'relative',
        border: 'none'
      }}
    >
      <CardContent style={{ paddingBottom: '0px' }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <CircleIcon
              sx={{
                fontSize: theme.spacing(3.5),
                stroke: theme.palette.beta400.main,
                strokeWidth: 6,
                color: theme.palette.gammaWhite.main,
                paddingLeft: theme.spacing(1)
              }}
            ></CircleIcon>
          </Grid>
          <Grid item xs={11}>
            <Typography>{props.source}</Typography>
          </Grid>

          <Grid item xs={6} sx={{ marginLeft: theme.spacing(0) }}>
            <MoreVertIcon
              sx={{
                color: theme.palette.beta400.main,
                position: 'absolute',

                left: '4.1%',
                top: '36.14%'
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginLeft: theme.spacing(0) }}>
            <SwapVertOutlinedIcon
              sx={{
                color: theme.palette.betaMedium.main,
                position: 'absolute',

                right: '4%',
                top: '36.14%'
              }}
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}>
            <FmdGoodOutlinedIcon
              fontSize="small"
              sx={{ color: theme.palette.gammaAccent1.main }}
            ></FmdGoodOutlinedIcon>
          </Grid>
          <Grid item xs={11}>
            <Typography>{props.destination}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CommonRoutes;
