import React from 'react';
import { TestPackageCard } from '.';
import { render, screen } from '@testing-library/react';


describe('Icon', () => {
  test('renders TestPackageCard card', () => {
    render(<TestPackageCard image='bodyTest' title='Full body checkup' />);
    expect(screen.getByTestId('package_card')).toBeInTheDocument();
  });
});