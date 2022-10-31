import React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCard from '.';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */


describe('Icon', () => {
  test('renders CreditCard ', () => {
    render(<CreditCard cardNumber='1244 1234 1345 3255' cardHolderName='Yessie' expiryDate='02/25' />);
    expect(screen.getByTestId('credit-card')).toBeInTheDocument();
  });
});