import React from 'react';
import { render, screen } from '@testing-library/react';
import AQIComponent from './AQIComponent';
import '@testing-library/jest-dom';

test('check whether  AQIComponent gets rendered or not', () => {
  render(<AQIComponent value={300} />);
  expect(screen.getByTestId('aql-image')).toBeInTheDocument();
});
