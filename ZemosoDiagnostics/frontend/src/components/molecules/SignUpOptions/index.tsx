import { Box as MuiBox, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { SIGNUPMESSAGE } from '../../../utils/Messages';
import Logo from '../../atoms/Logo';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  width: 100%;
  min-height: 4.5rem;
  display: flex;
  flex-flow: column;
  gap: 0.75rem;

  .signUpDivider {
    display: flex;
    flex-flow: row;
    gap: 0.625rem;
    align-items: center;
  }

  .divider {
    width: 34%;
    background-color: ${theme.palette.grey100.main};
  }

  .signUp {
    font-size: 0.75rem;
    width: 32%;
    text-align: center;
    color: ${theme.palette.grey300.main};
  }

  .signUpLogos {
    display: flex;
    justify-content: center;
    gap: 2.75rem;
  }
`;

export const SignUpOptions = () => {
  return (
    <Box data-testid="signup-options">
      <MuiBox className="signUpDivider">
        <Divider className="divider" />
        <Typography variant="overline" className="signUp">
          {SIGNUPMESSAGE}
        </Typography>
        <Divider className="divider" />
      </MuiBox>
      <MuiBox className="signUpLogos">
        <Logo name="google" />
        <Logo name="facebook" />
        <Logo name="apple" />
      </MuiBox>
    </Box>
  );
};
