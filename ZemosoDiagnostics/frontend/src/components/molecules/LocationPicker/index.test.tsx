import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import LocationPicker from "./index";

test('checks whether component renders', () => {
  render(<LocationPicker/>);

  const element = screen.getByTestId('current_location');
  expect(element).toBeInTheDocument();
});
