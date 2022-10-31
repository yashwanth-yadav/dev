/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialList from '.';
import { TESTIMONIAL_LIST } from '../../../utils/Messages';

test('checks whether component renders', () => {
  render(<TestimonialList testimonialList={TESTIMONIAL_LIST} />);

  const element = screen.getByTestId('testimonial-list');
  expect(element).toBeInTheDocument();
});
