import * as React from 'react';
import {  render, screen } from '@testing-library/react';
import Stepper from '.';

test('checks whether component renders', () => {
    render(<Stepper labStepper={false} steps={['a','b','c']} step={0} />);

  const element = screen.getByText('a');
  expect(element).toBeInTheDocument();
  const firstStep = screen.queryByText('b');
  expect(firstStep).not.toBeInTheDocument();

 
});

test('checks whether components render when labStepper is true', () => {
  render(<Stepper labStepper={true} steps={['a', 'b', 'c']} step={0} />);

  const element = screen.getByText('a');
  expect(element).toBeInTheDocument();
  
});

