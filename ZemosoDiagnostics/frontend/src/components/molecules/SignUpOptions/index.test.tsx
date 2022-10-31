import React from 'react';
import { SignUpOptions } from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('SignUpOptions', () => {
  test('renders SignUpOptions', () => {
    render(<SignUpOptions />);
    expect(screen.getByTestId('signup-options')).toBeInTheDocument();
  });
});
