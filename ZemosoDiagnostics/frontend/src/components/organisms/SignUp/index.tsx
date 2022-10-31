import React from 'react';
import styled from 'styled-components';
import { Box as MuiBox, Typography } from '@mui/material';
import InputField from '../../molecules/InputField';
import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';
import { SignUpOptions } from '../../molecules/SignUpOptions';
import theme from '../../../theme';
import {
  CONTINUE,
  EMAIL_ID_LABEL,
  EMAIL_PLACEHOLDER,
  FIRST_NAME_LABEL,
  FIRST_NAME_PLACEHOLDER,
  HAVE_ACCOUNT,
  LAST_NAME_LABEL,
  LAST_NAME_PLACEHOLDER,
  LOGIN
} from '../../../utils/Messages';
import { SignUpDetails } from '../../../utils/Types';
import { initialSignUpDetails } from '../../../utils/Constants';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  padding: 1.5rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  border-radius: 8px;
  background-color: ${theme.palette.gammaWhite.main};
  min-width: ${theme.spacing(95.5)};
  min-height: 34rem;

  .logo {
    text-align: center;
    margin-bottom: 3rem;
  }

  .inputFields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .redirect {
    display: flex;
    gap: 0.313rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }

  .signupOptions {
    display: flex;
    justify-content: center;
  }

  .login {
    cursor: pointer;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${theme.palette.interactiveBlue500.main};

  &:hover {
    background-color: ${theme.palette.interactiveBlue500.main};
  }

  &:disabled {
    background-color: ${theme.palette.interactiveBlue100.main};
  }
`;

export const SignUp = () => {
  const [signUpDetails, setSignUpDetails] =
    React.useState<SignUpDetails>(initialSignUpDetails);

  const [buttonStatus, setButtonStatus] = React.useState<boolean>(false);
  const { loginWithRedirect } = useAuth0();

  const handleFirstName = (firstName: string) => {
    setSignUpDetails({
      ...signUpDetails,
      firstName: firstName
    });
  };
  const handleLastName = (lastName: string) => {
    setSignUpDetails({
      ...signUpDetails,
      lastName: lastName
    });
  };
  const handleEmail = (emailId: string) => {
    setSignUpDetails({
      ...signUpDetails,
      emailId: emailId
    });
  };

  React.useEffect(() => {
    setButtonStatus(
      signUpDetails.firstName.length === 0 ||
        signUpDetails.lastName.length === 0 ||
        signUpDetails.emailId.length === 0
    );
  }, [signUpDetails]);

  return (
    <Box data-testid="signup-form">
      <MuiBox className="logo">
        <Logo name="zemosoLogo" />
      </MuiBox>
      <MuiBox className="inputFields">
        <InputField
          label={FIRST_NAME_LABEL}
          placeholder={FIRST_NAME_PLACEHOLDER}
          handleChange={handleFirstName}
          value={signUpDetails.firstName}
        />
        <InputField
          label={LAST_NAME_LABEL}
          placeholder={LAST_NAME_PLACEHOLDER}
          handleChange={handleLastName}
          value={signUpDetails.lastName}
        />
        <InputField
          label={EMAIL_ID_LABEL}
          placeholder={EMAIL_PLACEHOLDER}
          handleChange={handleEmail}
          value={signUpDetails.emailId}
        />
      </MuiBox>

      <StyledButton
        variant="contained"
        size="large"
        disabled={buttonStatus}
        onClick={() => loginWithRedirect()}
        data-testid="continue"
      >
        <Typography variant="body3" color="white">
          {CONTINUE}
        </Typography>
      </StyledButton>

      <MuiBox className="redirect">
        <Typography
          variant="body2"
          fontWeight={400}
          color={`${theme.palette.gammaLow.main}`}
        >
          {HAVE_ACCOUNT}
        </Typography>
        <Typography
          variant="caption2"
          className="login"
          fontWeight={700}
          data-testid="login"
          onClick={() => loginWithRedirect()}
        >
          {LOGIN}
        </Typography>
      </MuiBox>
      <MuiBox className="signupOptions">
        <SignUpOptions />
      </MuiBox>
    </Box>
  );
};
