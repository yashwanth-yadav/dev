import React from 'react';
import ServicesList  from '.';
import { render, screen } from '@testing-library/react';


describe('ServicesList', () => {
  test('renders services List', () => {
    render(<ServicesList />);
    expect(screen.getByText("At Home Services")).toBeInTheDocument();
  });
});
