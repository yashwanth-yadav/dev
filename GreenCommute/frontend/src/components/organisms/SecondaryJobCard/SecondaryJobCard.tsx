import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import * as React from 'react';
import theme from '../../../theme';
import { bike, bus, car, train } from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export interface SecondaryJobCardProps {
  logo: any;
  company: string;
  jobRole: string;
  onClick: () => void;
  time: string;
  location: string;
  city: string;
  state: string;
  pincode: string;
  isActive?: boolean;
}

const SecondaryJobCard = (props: SecondaryJobCardProps) => {
  return (
    <Card
      data-testid="jobcard"
      onClick={props.onClick}
      sx={{
        backgroundColor: theme.palette.gammaWhite.main,
        width: 'inherit',
        height: '159px',
        borderRadius: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(4.37),
        paddingRight: theme.spacing(4.37),
        gap: theme.spacing(2.5),
        cursor: 'pointer',
        alignItems: 'stretch',
        border: props.isActive
          ? `1px solid ${theme.palette.alpha200.main}`
          : `1px solid ${theme.palette.gammaWhite.main}`
      }}
    >
      <CardHeader
        sx={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          paddingRight: theme.spacing(4.37),
          paddingLeft: theme.spacing(4.37),
          alignItems: 'flex-start'
        }}
        avatar={
          <Icons
            icon={props.logo}
            height={theme.spacing(11.25)}
            width={theme.spacing(11.25)}
          />
        }
        title={
          <React.Fragment>
            <Typography
              sx={{
                color: theme.palette.betaHigh.main,
                ...theme.typography.h2
              }}
            >
              {props.jobRole}
            </Typography>

            <Typography
              sx={{
                color: theme.palette.gammaAccent2.main,
                ...theme.typography.caption2
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
              {props.location}, {props.city}, {props.state}, {props.pincode}
            </Typography>
          </React.Fragment>
        }
        action={<MoreHorizIcon />}
      />
      <CardContent
        sx={{
          marginTop: '5px',
          marginBottom: '5px',
          marginLeft: '45px',
          paddingRight: '5px',
          paddingLeft: theme.spacing(3),
          display: 'flex',
          flexFlow: 'row wrap',
          gap: '14px'
        }}
      >
        <Icons icon={bike} />
        <Icons icon={bus} />
        <Icons icon={car} />
        <Icons icon={train} />

        <Typography
          sx={{
            ...theme.typography.caption2,
            color: theme.palette.betaMedium.main,
            display: 'flex',
            marginLeft: 'auto',
            marginBottom: '10px',
            baseline: 'bottom',
            verticalAlign: 'bottom'
          }}
        >
          {props.time}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default SecondaryJobCard;
