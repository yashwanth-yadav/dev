/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccountOption from '.';

test('checks whether component renders when adding secondary text', () => {
  render(
    <AccountOption
      startIcon="mapPin"
      primaryText="Track My Orders"
      endIcon="chevronRight"
      secondaryText="Your orders"
    />
  );

  const element = screen.getByTestId('Track My Orders-account-option');
  expect(element).toBeInTheDocument();

  fireEvent.click(element);
});
