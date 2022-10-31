import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import Logo from '../../atoms/Logo';
import { ENTER_OTP, VERIFY, GREET_USER } from '../../../utils/Messages';
import { StyledButton } from '../SignUp';
import { Box } from '../MobileForm';
import { OtpField } from '../OtpField';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { UserService } from '../../../ApiService/UserService';
import { UserPropsType } from '../../../utils/Types';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export const OtpForm = () => {
  const [buttonStatus, setButtonStatus] = React.useState<boolean>(false);

  const handleButtonStatus = (status: boolean) => {
    setButtonStatus(status);
  };

  const { user } = useAuth0();

  const navigate = useNavigate();

  const handleClick = () => {
    if (
      user !== undefined &&
      user.sub !== undefined &&
      user.name !== undefined &&
      user.email !== undefined
    ) {
      const userObject: UserPropsType = {
        userId: user.sub,
        userName: user.name,
        email: user.email
      };
      UserService.postUser(userObject);
    }

    navigate('/');
  };

  return (
    <Box data-testid="otp-form">
      <MuiBox className="logo">
        <Logo name="zemosoLogo" />
      </MuiBox>
      <MuiBox className="heading">
        <Typography variant="body3" component="div">
          {GREET_USER}{' '}
          {user !== undefined && user.name !== undefined ? user.name : null}
        </Typography>
        <Typography variant="overline" className="subHeading">
          {ENTER_OTP}
        </Typography>
      </MuiBox>
      <MuiBox className="inputField">
        <OtpField handleChange={handleButtonStatus} />
      </MuiBox>
      <StyledButton
        variant="contained"
        size="large"
        disabled={buttonStatus}
        onClick={handleClick}
        data-testid="verify"
      >
        <Typography variant="body3" color="white">
          {VERIFY}
        </Typography>
      </StyledButton>
    </Box>
  );
};
