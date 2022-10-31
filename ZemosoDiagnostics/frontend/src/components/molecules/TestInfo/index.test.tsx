/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TestInfo from '.';

test('checks whether component renders', () => {
  render(<TestInfo testName={'Covid RTPCR'} />);

  const element = screen.getByTestId('test-info');
  expect(element).toBeInTheDocument();
});
