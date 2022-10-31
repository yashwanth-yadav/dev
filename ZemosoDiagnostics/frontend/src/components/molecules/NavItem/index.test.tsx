import React from 'react';
import NavItem from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

describe('NavItem', () => {
  test('renders NavItem', () => {
    render(<NavItem label="Home" />);
    expect(screen.getByTestId('nav-item')).toBeInTheDocument();
  });

  test('renders NavItem with underline', () => {
    render(<NavItem label="Home" selected={true} />)
    expect(screen.getByTestId('nav-item')).toBeInTheDocument();
  })
});
