import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import LandingRightPart from './LandingRightPart';
import theme from '../../../theme';

test('checks whether component renders', () => {
  render(
    <LandingRightPart
      text="=Enter your Skills to know how many jobs are in this Location"
      image="jobsIllustration"
      height={theme.spacing(62)}
      width={theme.spacing(104.25)}
      city2={[
        { name: 'Hyderabad', AQIIndex: 333 },
        { name: 'Banglore', AQIIndex: 345 }
      ]}
      step= {2}
    />
  );

  const element = screen.getByTestId('landingRightPart');
  expect(element).toBeInTheDocument();
});
