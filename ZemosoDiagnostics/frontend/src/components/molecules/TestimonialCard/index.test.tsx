import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCard from '.';

test('checks whether component renders', () => {
  render(<TestimonialCard name="body" />);

  const element = screen.getByTestId('testimonial-card');
  expect(element).toBeInTheDocument();
});
