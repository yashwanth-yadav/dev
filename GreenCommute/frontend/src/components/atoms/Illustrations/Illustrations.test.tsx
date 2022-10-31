import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Illustrations from './Illustrations';

test('renders an image', () => {
  render(<Illustrations name="jobs" height="300px" width="250px" />);
  const element = screen.getByRole('img');
  expect(element).toBeInTheDocument();
});
