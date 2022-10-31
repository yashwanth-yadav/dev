import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import AuthenticationTemplate from '.';

test('renders a template', () => {
  render(<AuthenticationTemplate />);
  const element = screen.getByTestId('authenticationTemplate');
  expect(element).toBeInTheDocument();
});