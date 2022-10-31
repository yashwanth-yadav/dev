import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import '@testing-library/jest-dom';

test('Test - RadioButton', () => {
  render(
    <RadioButton
      title={'Green Commute'}
      label1={'Yes'}
      label2={'No'}
    ></RadioButton>
  );

  const title = screen.getByText(/Green Commute/);
  const value1 = screen.getByText(/Yes/);
  const value2 = screen.getByText(/No/);
  expect(title).toBeInTheDocument();
  expect(value1).toBeInTheDocument();
  expect(value2).toBeInTheDocument();
});
