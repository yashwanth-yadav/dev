import React from 'react';
import { Faq } from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('Faq', () => {
  test('renders Faq', () => {
    render(<Faq question="How soon can i get the report?" />);
    expect(
      screen.getByTestId('How soon can i get the report?-faq')
    ).toBeInTheDocument();
  });
});
