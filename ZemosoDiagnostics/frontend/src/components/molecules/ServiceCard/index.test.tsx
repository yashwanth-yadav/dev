import React from 'react';
import { ServiceCard } from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('Icon', () => {
  test('renders service card', () => {
    render(<ServiceCard logo="test" description="1600+ Tests" />);
    expect(screen.getByTestId('test-service-card')).toBeInTheDocument();
  });
});
