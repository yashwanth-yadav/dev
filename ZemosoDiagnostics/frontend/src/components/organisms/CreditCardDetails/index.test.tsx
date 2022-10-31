import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreditCardDetails from '.';
import { CARD_DETAILS_INFO, PAYMENT_OPTIONS_LIST } from '../../../utils/Messages';


describe('CreditCardDetails', () => {
  test('renders CreditCardDetails', () => {
    render(<CreditCardDetails cardDetailsInfo={CARD_DETAILS_INFO} paymentOptionsList={PAYMENT_OPTIONS_LIST}/>);
    expect(screen.getByTestId('credit_card_details')).toBeInTheDocument();
    const option1=screen.getByTestId('paypal-radio')
    const option2=screen.getByTestId('googlePay-radio')
    const option3=screen.getByTestId('netBanking-radio')
    fireEvent.click(option1);
    fireEvent.click(option2);
    fireEvent.click(option3);
    fireEvent.click(option2);
  });
});