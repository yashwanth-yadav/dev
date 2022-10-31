import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import Logo from '../../atoms/Logo/index';
import { LogoPropsType } from '../../../utils/Types';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  height: 4.75rem;
  width: 100%;
  background-color: ${theme.palette.gammaWhite.main};
  border-radius: 0.5rem;
  padding: 0.625rem 0rem;
  padding-left: 1.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .description {
    padding-left: 1.5rem;
    color: ${theme.palette.gammaMedium.main};
  }
`;

export interface ServiceCardPropsType {
  logo: LogoPropsType['name'];
  description: string;
}

export const ServiceCard = ({ logo, description }: ServiceCardPropsType) => {
  return (
    <Box data-testid={`${logo}-service-card`}>
      <Logo name={logo} />
      <Typography className="description" variant="caption2">
        {description}
      </Typography>
    </Box>
  );
};
