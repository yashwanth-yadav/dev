import React from 'react';
import { AddressCard } from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('AddressCard', () => {
  test('renders verified AddressCard', () => {
    render(
      <AddressCard
        addressType="HOME"
        address="2235 California Street Mountain View California APT#021 - 11023"
        isSelected={true}
        isVerified={true}
      />
    );
    expect(screen.getByTestId('address-card')).toBeInTheDocument();
  });
  test('renders pending AddressCard', () => {
    render(
      <AddressCard
        addressType="HOME"
        address="2235 California Street Mountain View California APT#021 - 11023"
        isSelected={true}
        isVerified={false}
      />
    );
    expect(screen.getByTestId('address-card')).toBeInTheDocument();
  });
});
