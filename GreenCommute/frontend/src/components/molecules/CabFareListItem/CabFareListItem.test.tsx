import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CabFareListItem from './CabFareListItem';

afterEach(cleanup);
test('checks whether component renders', () => {
  render(<CabFareListItem cabIcon="ola" />);
  const text1 = screen.getByText('Approximately');
  const text2 = screen.getByText('Book Now');
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
