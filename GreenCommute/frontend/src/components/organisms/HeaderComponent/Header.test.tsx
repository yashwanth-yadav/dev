import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import HeaderComponent from './Header';
test('checks whether header component renders or not', () => {
  render(<HeaderComponent />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
});
