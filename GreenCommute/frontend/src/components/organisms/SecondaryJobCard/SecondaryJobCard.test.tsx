import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import SecondaryJobCard from './SecondaryJobCard';
import { hp } from '../../../utils/constants';
import { Card } from '@mui/material';
test('checks whether header component renders or not', () => {
  render(
    <SecondaryJobCard
      logo={hp}
      company="HP"
      jobRole="User Experience Designer"
      onClick={() => {
        console.log('check click');
      }}
      time="30 mins ago"
      city="Hyderabad"
      location="Hitec City"
      state="Telangana"
      pincode="500034"
      isActive={true}
    />
  );

  expect(screen.getByTestId('jobcard')).toBeInTheDocument();
});
