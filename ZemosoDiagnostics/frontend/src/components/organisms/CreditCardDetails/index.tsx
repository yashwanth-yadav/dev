import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import {
  ADD_CARD,
  CARD_DETAILS,
  OTHER_PAYMENT_OPTIONS
} from '../../../utils/Messages';
import { LogoPropsType } from '../../../utils/Types';
import Icon from '../../atoms/Icon';
import CreditCard from '../../molecules/CreditCard';
import PaymentOption from '../../molecules/PaymentOption';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

const MainBox = styled(Box)`
  min-width: 600px;
  width: 650px;
  /* max-height: 562px; */
  align-items: center;
  background-color:${theme.palette.gammaWhite.main};
  justify-content: center;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  border-radius: 8px;
  padding: 33px 24px;
  .cardDetails {
    color: ${theme.palette.gammaMedium.main};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    flex: 1;
    
  }
`;

interface CreditCardDetailsProps {
  cardDetailsInfo: {
    cardNumber: string;
    cardHolderName: string;
    expiryDate: string;
  };
  paymentOptionsList: {
    logo: LogoPropsType['name'];
    name: string;
  }[];
}
const CreditCardDetails = ({
  cardDetailsInfo,
  paymentOptionsList
}: CreditCardDetailsProps) => {
  const initialChecked = [true, false, false];
  const [checked, setchecked] = useState<boolean[]>(initialChecked);
  const [paymentOption, setpaymentOption] = useState(0);
  const handlePaymentOption = () => {
    const updatedChecked = checked;
    for (let i = 0; i < 3; i++) {
      if (i != paymentOption) {
        updatedChecked[i] = false;
      } else if (i == paymentOption) {
        updatedChecked[i] = true;
      }
    }
    setchecked([...updatedChecked]);
  };
  useEffect(() => {
    handlePaymentOption();
  }, [paymentOption]);

  return (
    <MainBox data-testid="credit_card_details">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingBottom: theme.spacing(4.75),
        }}
      >
        <Typography variant="subtitle1" className="cardDetails">
          {CARD_DETAILS}
        </Typography>
        <Box display="flex" sx={{ justifyContent: 'center' }}>
          <Icon name="add"></Icon>
          <Typography
            variant="body"
            sx={{ color: theme.palette.interactiveBlue500.main }}
          >
            {ADD_CARD}
          </Typography>
        </Box>
      </Box>
      <Box >
        <CreditCard
          cardNumber={cardDetailsInfo.cardNumber}
          cardHolderName={cardDetailsInfo.cardHolderName}
          expiryDate={cardDetailsInfo.expiryDate}
        ></CreditCard>
      </Box>

      <Box sx={{ paddingTop: theme.spacing(4) }}>
        <Box>
          <Typography
            variant="body"
            sx={{ color: theme.palette.gammaHigh.main }}
          >
            {OTHER_PAYMENT_OPTIONS}
          </Typography>
        </Box>

        <Box sx={{ paddingTop: theme.spacing(3.75) }}>
          {paymentOptionsList.map((value, index) => {
            return (
              <>
                {' '}
                <Box sx={{ paddingBottom: theme.spacing(7.5) }}>
                  <PaymentOption
                    logo={value.logo}
                    name={value.name}
                    isChecked={checked[index]}
                    handleChecked={() => {
                      setpaymentOption(index);
                    }}
                  ></PaymentOption>
                </Box>
              </>
            );
          })}

          <Box sx={{ paddingBottom: theme.spacing(27.5) }}></Box>
        </Box>
      </Box>
    </MainBox>
  );
};

export default CreditCardDetails;
