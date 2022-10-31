import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Icon from '.';

test('checks whether component renders', () => {
  render(<Icon name="calendar" />);

  const element = screen.getByTestId('calendar-icon');
  expect(element).toBeInTheDocument();
});
