import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Footer', () => {
  test('renders footer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
