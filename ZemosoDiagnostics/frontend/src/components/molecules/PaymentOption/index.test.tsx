import React from 'react';
import PaymentOption from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

describe('Icon', () => {
  test('renders service card', () => {
    render(<PaymentOption logo="googlePay" name="Google Pay" />);
    expect(screen.getByTestId('payment-option')).toBeInTheDocument();
  });
});
