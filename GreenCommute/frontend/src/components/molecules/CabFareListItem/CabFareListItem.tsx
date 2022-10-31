import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from '../../../theme';
import Icons from '../../atoms/Icons/Icons';
import { APPROXIMATELY, CAB_FAIR } from '../../../messages';
import { rupee } from '../../../utils/constants';
interface Props {
  cabIcon?: any;
}

const CabFareListItem = ({ cabIcon }: Props) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: theme.spacing(15),
        width: theme.spacing(90),
        boxShadow: `${theme.spacing(0)} ${theme.spacing(0.5)} ${theme.spacing(
          2
        )} rgba(125, 125, 125, 0.12);`
      }}
    >
      <CardMedia sx={{ marginRight: theme.spacing(2) }}>
        <Icons
          icon={cabIcon}
          height={theme.spacing(10)}
          width={theme.spacing(10)}
        />
      </CardMedia>

      <CardContent sx={{ padding: theme.spacing(0) }}>
        <Typography gutterBottom variant="caption1" component="div">
          Ola
        </Typography>
        <Typography
          variant="caption2"
          color="betaMedium.main"
          sx={{ marginRight: theme.spacing(4) }}
        >
          {APPROXIMATELY}
        </Typography>
        <Icons
          icon={rupee}
          height={theme.spacing(2.5)}
          width={theme.spacing(2.5)}
        />
        <Typography
          variant="caption2"
          color="betaHigh.main"
          sx={{
            marginLeft: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5)
          }}
        >
          {CAB_FAIR}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 'auto', padding: theme.spacing(0) }}>
        <Button>
          <Typography variant="caption1" color="alpha400.main">
            Book Now
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CabFareListItem;
