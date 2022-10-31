import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ReviewDetails from '.';

test('checks whether component renders', () => {
  render(<ReviewDetails date="Tue, Feb 23, 2022" time="07.00 - 8.00 AM" />);

  const element = screen.getByText('Tue, Feb 23, 2022');
  expect(element).toBeInTheDocument();
});
 
