import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommonRoutes from './CommonRoutes';

afterEach(cleanup);
test('Checking Read title Rendering', () => {
  render(<CommonRoutes source="E Marredpally, Secunderabad" destination="Hitech City, Telanagana, Hyderabad" />);
  const text1 = screen.getByText('E Marredpally, Secunderabad');
  const text2 = screen.getByText('Hitech City, Telanagana, Hyderabad');
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();

});