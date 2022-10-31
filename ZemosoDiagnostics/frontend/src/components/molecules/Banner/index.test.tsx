/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '.';

test('checks whether component renders', () => {
  render(<Banner />);

  const element = screen.getByTestId('banner');
  expect(element).toBeInTheDocument();
});
