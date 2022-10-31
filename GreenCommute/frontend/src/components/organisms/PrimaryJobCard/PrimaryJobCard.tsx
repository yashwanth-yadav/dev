import { Box, Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import theme from '../../../theme';
import { bike, bus, car, train } from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { COMMUTE_ROUTES, LAST_SEARCHED } from '../../../messages';

interface PrimaryJobCardProps {
  id: number;
  logo?: any;
  company?: string;
  jobRole?: string;
  location?: string;
  handleClick: (id: number) => void;
}

const PrimaryJobCard = (props: PrimaryJobCardProps) => {
  return (
    <Card
      data-testid="jobcard"
      onClick={() => props.handleClick(props.id)}
      sx={{
        backgroundColor: theme.palette.gammaWhite.main,

       
        height: 271,
        borderRadius: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(4.37),
        paddingRight: theme.spacing(4.37),
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
         
          paddingRight: theme.spacing(4.37),
          paddingLeft: theme.spacing(4.37)
        }}
      >
        <Icons icon={props.logo} />
        <MoreHorizIcon />
      </Box>

      <CardContent
        sx={{
          flexDirection: 'column',
          display: 'flex',
          width: '100%',
         
          paddingRight: theme.spacing(4.37),
          paddingLeft: theme.spacing(4.37)
        }}
      >
        <Typography
          sx={{
            color: theme.palette.betaHigh.main,
            ...theme.typography.subtitle1
          }}
        >
          {props.jobRole}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.gammaAccent2.main,
            ...theme.typography.subtitle2
          }}
        >
          {props.company}
        </Typography>
        <Typography
          sx={{
            ...theme.typography.caption2,
            color: theme.palette.betaMedium.main
          }}
        >
          {props.location}
        </Typography>
      </CardContent>

      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          width: '100%',
          
          paddingRight: theme.spacing(4.37),
          paddingLeft: theme.spacing(4.37),
          paddingBottom: theme.spacing(3)
        }}
      >
        <Typography
          sx={{
            ...theme.typography.caption2,
            color: theme.palette.betaHigh.main,
            paddingBottom: theme.spacing(1)
          }}
        >
          {COMMUTE_ROUTES}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              width: theme.spacing(35)
            }}
          >
            <Icons icon={bike} />
            <Icons icon={bus} />
            <Icons icon={car} />
            <Icons icon={train} />
          </Box>
          <Typography
            sx={{
              ...theme.typography.caption2,
              color: theme.palette.betaHigh.main
            }}
          >
            {LAST_SEARCHED}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
export default PrimaryJobCard;
