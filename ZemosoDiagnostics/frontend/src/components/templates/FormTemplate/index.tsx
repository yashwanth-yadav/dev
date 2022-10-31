/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from '@auth0/auth0-react';
import { Box as MuiBox } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme';
import Logo from '../../atoms/Logo';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  .header {
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    background-color: ${theme.palette.gammaWhite.main};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .logo {
    margin-left: 5rem;
  }

  .children {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
`;

interface FormTemplateProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}
export const FormTemplate = ({ children, footer }: FormTemplateProps) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) navigate('/signup');
  }, [isAuthenticated, navigate]);
  return (
    <Box data-testid="form-template">
      <MuiBox className="header">
        <MuiBox className="logo">
          <Logo name="zemosoLogo" />
        </MuiBox>
      </MuiBox>
      <MuiBox className="children">{children}</MuiBox>
      <MuiBox className="footer">{footer}</MuiBox>
    </Box>
  );
};
