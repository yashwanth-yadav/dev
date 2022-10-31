import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import theme from '../../../theme';

const Box = styled(MuiBox)`
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  min-height: 4rem;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.gammaWhite.main};
  box-sizing: border-box;
  padding: 0rem 1.25rem;
  width: 100%;

  .question {
    color: ${theme.palette.gammaMedium.main};
  }

  .icon {
    margin-left: auto;
  }
`;

export const Faq = ({ question }: { question: string }) => {
  return (
    <Box data-testid={`${question}-faq`}>
      <Typography
        noWrap={true}
        sx={{
          ...theme.typography.body,
          minWidth: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
        className="question"
      >
        {question}
      </Typography>
      <MuiBox className="icon">
        <Icon name="chevronDown" />
      </MuiBox>
    </Box>
  );
};
