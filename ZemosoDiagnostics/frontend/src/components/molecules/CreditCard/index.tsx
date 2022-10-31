import { Card as MuiCard, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { CARD_HOLDER, EXPIRES, SAMPLE } from '../../../utils/Messages';
import Logo from '../../atoms/Logo';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

const Card = styled(MuiCard)`
  width: inherit;
  height: ${theme.spacing(50)};
  /* max-width: ${theme.spacing(108.25)}; */
  background: ${theme.palette.gammaWhite.main};
  box-shadow: 0px 0px 12px rgba(233, 232, 237, 0.7);
  border-radius: 16px;
  position:relative;
`;

export interface CreditCardPropsType {
  cardNumber:string;
  expiryDate:string;
  cardHolderName: string;
}

const CreditCard = ({cardNumber,expiryDate,cardHolderName}:CreditCardPropsType) => {
  return (
    <Card data-testid="credit-card" >
      <Grid container sx={{px: '30px'}}>
        <Stack
          // item
          direction="row"
          sx={{
            width: 'inherit',
            marginTop: theme.spacing(7.5),
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Logo name="cardLogo" />
          <Typography
            sx={{
              color: theme.palette.black30.main,
              opacity: 0.3
            }}
          >
            {SAMPLE}
          </Typography>
        </Stack>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: theme.spacing(8.5),
            display: 'flex',
            ...theme.typography.body1,
            fontSize: theme.spacing(4),
            color: theme.palette.gammaHigh.main,
            letterSpacing: '0.005em'
          }}
        >
          {cardNumber}
        </Grid>
        <Grid
          item xs={12}  
          sx={{
            marginTop: theme.spacing(2.75),
            display: 'flex',
          }}
        >
          <Typography
            sx={{
              ...theme.typography.body2,
              fontSize: theme.spacing(3),
              lineHeight: theme.spacing(4.5),
              color: theme.palette.gammaLow.main,
              opacity: 0.5
            }}
          >
            {CARD_HOLDER}
          </Typography>
          <Typography
            sx={{
              paddingLeft: theme.spacing(14.75),
              ...theme.typography.body2,
              fontSize: theme.spacing(3),
              lineHeight: theme.spacing(4.5),
              color: theme.palette.gammaLow.main,
              opacity: 0.5
            }}
          >
            {EXPIRES}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: theme.spacing(2.75),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              ...theme.typography.overline,
              fontSize: theme.spacing(3),
              lineHeight: theme.spacing(4.5),
              color: theme.palette.gammaMedium.main,
            }}
          >
            {cardHolderName}
          </Typography>
          <Typography
            sx={{
              paddingLeft: theme.spacing(14.75),
              ...theme.typography.overline,
              fontSize: theme.spacing(3),
              lineHeight: theme.spacing(4.5),
              color: theme.palette.gammaMedium.main,
              position:'absolute',
              left:theme.spacing(25.25),
            }}
          >
            {expiryDate}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CreditCard;
