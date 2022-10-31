import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AQIList from './AQIList';

const items = [
  {
    city: 'Mumbai',
    AQI: 894
  },
  {
    city: 'Hyderabad',
    AQI: 953
  }
];

const city2 = [
  {
    city: 'Mumbai',
    AQIIndex: 894
  },
  {
    city: 'Hyderabad',
    AQIIndex: 953
  }
];

afterEach(cleanup);
test('Checking text Rendering', () => {
  render(<AQIList step={1} items={items} city2={city2} />);
  const text1 = screen.getByText('Mumbai');
  const text2 = screen.getByText('Hyderabad');
  const text3 = screen.getByText(894);
  const text4 = screen.getByText(953);

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
  expect(text4).toBeInTheDocument();
});
