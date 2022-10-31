import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Logo from '.';

test('renders an image', () => {
  render(<Logo name='bloodCount'/>);
  const element = screen.getByTestId('bloodCount-logo');
  expect(element).toBeInTheDocument();
});