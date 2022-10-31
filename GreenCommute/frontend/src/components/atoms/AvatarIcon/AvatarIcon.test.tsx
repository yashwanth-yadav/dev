import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import AvatarIcon from './AvatarIcon';

test('checks whether component renders', () => {
  render(<AvatarIcon />);

  const element = screen.getByText('S');
  expect(element).toBeInTheDocument();
});
