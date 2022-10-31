import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LandingPageTemplate from './LandingPageTemplate';
import Left from './Left';
import Right from './Right';

afterEach(cleanup);
test('checks whether component renders', () => {
  render(<LandingPageTemplate left={<Left />} right={<Right />} />);
  const element = screen.getByTestId('screen1');
  const logo = screen.getByRole('img');

  expect(element).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
