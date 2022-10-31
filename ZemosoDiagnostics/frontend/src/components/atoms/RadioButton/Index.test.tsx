import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import RadioButton from './Index';

test('renders a radio button', () => {
  render(<RadioButton isChecked={true}></RadioButton>);
  const element = screen.getByTestId('RadioButton');
  expect(element).toBeInTheDocument();
});
