import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import '@testing-library/jest-dom';
import LandingPage from './LandingPage';

test('checks whether component renders', async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <LandingPage
        setcurrentLoc={() => console.log('Hyderabad')}
        currentLoc="Hyd"
      />
    </Router>
  );

  const element = await screen.getByTestId('landingPage');
  await expect(element).toBeInTheDocument();
});
