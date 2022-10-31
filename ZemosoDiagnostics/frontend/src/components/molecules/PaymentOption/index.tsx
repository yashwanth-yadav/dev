import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import Logo from '../../atoms/Logo';
import RadioButton from '../../atoms/RadioButton/Index';
import { LogoPropsType } from '../../../utils/Types';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export interface PaymentOptionPropsType {
  logo: LogoPropsType['name'];
  name: string;
  isChecked?: boolean;
  handleChecked?: () => void;
}

const PaymentOption = ({
  logo,
  name,
  isChecked,
  handleChecked
}: PaymentOptionPropsType) => {
  return (
    <Box
      data-testid="payment-option"
      sx={{
        width: 'inherit',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        height: theme.spacing(8)
      }}
    >
      <Logo name={logo} />
      <Typography
        sx={{
          pl: theme.spacing(3.5),
          ...theme.typography.overline,
          fontSize: theme.spacing(3.5),
          color: theme.palette.gammaHigh.main
        }}
      >
        {name}
      </Typography>
      <RadioButton
        data-testid={`${logo}-radio`}
        isChecked={isChecked}
        handleChecked={handleChecked}
        sx={{ pr: theme.spacing(3.5),position: 'absolute', right: theme.spacing(0) ,'&.Mui-checked' :{
          color: theme.palette.structuralPurple800.main
        },}}
      ></RadioButton>
    </Box>
  );
};

export default PaymentOption;
