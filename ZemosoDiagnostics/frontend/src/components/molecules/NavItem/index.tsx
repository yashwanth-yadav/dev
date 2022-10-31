import React from 'react';
import { NavItemProps } from '../../../utils/Types';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const NavItemComponent = styled(({ children, testid, ...props }) => (
  <Typography {...props} data-testid={testid}>
    {children}
  </Typography>
))`

  color: ${(props) =>
    props.selected
      ? theme.palette.interactiveBlue500.main
      : theme.palette.gammaMedium.main};
  border-bottom: ${(props) =>
    props.selected
      ? `3px solid ${theme.palette.interactiveBlue500.main}`
      : '3px solid transparent'};
  width: fit-content;
  text-underline-position: left;
  padding-bottom: 3px;
  &:hover {
    border-bottom: 3px solid ${theme.palette.interactiveBlue500.main};
    color: ${theme.palette.interactiveBlue500.main};
    cursor: pointer;
  }
`;

const NavItem = ({ label, selected }: NavItemProps) => {
  return (
    <NavItemComponent variant="caption2" selected={selected} testid="nav-item">
      {label}
    </NavItemComponent>
  );
};

export default NavItem;
