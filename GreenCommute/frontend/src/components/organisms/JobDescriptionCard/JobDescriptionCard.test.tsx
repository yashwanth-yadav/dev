import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { myntra } from '../../../utils/constants';

import '@testing-library/jest-dom';
import JobDescriptionCard from './JobDescriptionCard';

test('checks whether component renders', () => {
  render(
    <JobDescriptionCard
      logo={myntra}
      jobRole="User Experience Designer"
      company="Myntra"
      location="Hitec city"
      state="Telangana"
      city="Hyderabad"
      pincode="500034"
      time="36 min ago"
      routeSource="E Marredpally, Secunderabad"
      routeDestination="Hitech City, Telanagana, Hyderabad."
      handleSave={() => console.log('save')}
    />
  );

  const text1 = screen.getByText('User Experience Designer');
  const text2 = screen.getByText('36 min ago');
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();

  expect(screen.getByTestId('jobDescription')).toBeInTheDocument();
});

test('checks click event for buuton', () => {
  render(
    <JobDescriptionCard
      logo={myntra}
      jobRole="User Experience Designer"
      company="Myntra"
      location="Hitec city"
      state="Telangana"
      city="Hyderabad"
      pincode="500034"
      time="36 min ago"
      routeSource="E Marredpally, Secunderabad"
      routeDestination="Hitech City, Telanagana, Hyderabad."
      handleSave={() => console.log('save')}
    />
  );

  const greenCommuteButton = screen.getByRole('button', {
    name: /green commute/i
  });
  fireEvent.click(greenCommuteButton);
});
