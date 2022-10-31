import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import styled from 'styled-components';
import { FAQ, FAQS } from '../../../utils/Messages';
import { Faq } from '../Faq';

const Box = styled(MuiBox)`
  width: 100%;
  min-width: 20rem;
  display: flex;
  flex-direction: column;

  .heading {
    padding-bottom: 2rem;
  }
`;

export const FaqList = () => {
  return (
    <Box data-testid="faq-list">
      <Typography variant="h1" className="heading">
        {FAQ}
      </Typography>
      {FAQS.map((faq, index) => (
        <Faq question={faq} key={index} />
      ))}
    </Box>
  );
};
