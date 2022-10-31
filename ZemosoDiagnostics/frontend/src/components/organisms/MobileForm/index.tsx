import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import Logo from '../../atoms/Logo';
import {
  ENTER_MOBILE,
  GET_OTP,
  GREET_USER,
  MOBILE_FIELD_LABEL,
  MOBILE_FIELD_PLACEHOLDER
} from '../../../utils/Messages';
import InputField from '../../molecules/InputField';
import { StyledButton } from '../SignUp';
import { FormProps } from '../../../utils/Types';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export const Box = styled(MuiBox)`
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: ${theme.palette.gammaWhite.main};
  min-width: ${theme.spacing(95.5)};
  min-height: 34rem;

  .logo {
    text-align: center;
    margin-bottom: 3rem;
  }

  .subHeading {
    font-size: 14px;
    color: ${theme.palette.gammaLow.main};
  }

  .heading {
    margin-bottom: 6.125rem;
  }

  .inputField {
    margin-bottom: 2.125rem;
  }
`;

export const MobileForm = ({ handleForm }: FormProps) => {
  const [mobileNumber, setMobileNumber] = React.useState<number>(NaN);

  const { user } = useAuth0();

  const handleMobileNumber = (Number: number) => {
    if (+Number < 10000000000) setMobileNumber(+Number);
  };

  return (
    <Box data-testid="mobile-form">
      <MuiBox className="logo">
        <Logo name="zemosoLogo" />
      </MuiBox>
      <MuiBox className="heading">
        <Typography variant="body3" component="div">
          {GREET_USER}{' '}
          {user !== undefined && user.name !== undefined ? user.name : null}
        </Typography>
        <Typography variant="overline" className="subHeading">
          {ENTER_MOBILE}
        </Typography>
      </MuiBox>
      <MuiBox className="inputField">
        <InputField
          label={MOBILE_FIELD_LABEL}
          placeholder={MOBILE_FIELD_PLACEHOLDER}
          handleChange={handleMobileNumber}
          value={isNaN(mobileNumber) || mobileNumber === 0 ? '' : mobileNumber}
        />
      </MuiBox>
      <StyledButton
        variant="contained"
        size="large"
        disabled={isNaN(mobileNumber) || mobileNumber === 0}
        onClick={() => {
          if (handleForm !== undefined) handleForm('otpForm');
        }}
        data-testid="get-otp"
      >
        <Typography variant="body3" color="white">
          {GET_OTP}
        </Typography>
      </StyledButton>
    </Box>
  );
};
