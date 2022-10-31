import { Card, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { TestCardProps } from '../../../utils/Types';
import Logo from '../../atoms/Logo';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */


const TestCardComponent = styled(Card)`
  width: 100%;
  min-width: 17.75rem;
  height: ${theme.spacing(29)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 10px;
  &.MuiPaper-elevation0 {
    box-shadow: 0px 0px 8px ${theme.palette.grey100.main};
  }
`;

const TestCard = ({ id, logo, label }: TestCardProps) => {
  return (
    <TestCardComponent
      data-testid={`testcard-${id}`}
      elevation={0}
    >
      <Logo name={logo} />
      <Typography variant="caption2">{label}</Typography>
    </TestCardComponent>
  );
};

export default TestCard;
