import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RouteMetro from './RouteMetro';


afterEach(cleanup);
test('Checking text Rendering', () => {
  render(<RouteMetro/>);
  const text1 = screen.getByText('View in Google Maps');
  const text2 = screen.getByText('25 Kms');
  const text3 = screen.getByText(100);
  const text4 = screen.getByText('Catch a blue line metro towards Raidurg');

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
  expect(text4).toBeInTheDocument();


});

