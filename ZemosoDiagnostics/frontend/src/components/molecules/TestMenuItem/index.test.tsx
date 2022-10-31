import React from 'react';
import { TestMenuItem } from '.';
import { render, screen } from '@testing-library/react';


describe('Icon', () => {
  test('renders service card', () => {
    render(<TestMenuItem logo="home_sq" name="Home visit" />);
    expect(screen.getByTestId('test_menu_item')).toBeInTheDocument();
  });
});