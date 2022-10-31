import React from 'react';
import Image from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('Icon', () => {
  test('renders image', () => {
    render(<Image name="family" />);
    expect(screen.getByTestId('family-image')).toBeInTheDocument();
  });
});
