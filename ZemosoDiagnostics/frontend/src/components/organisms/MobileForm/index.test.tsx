import React from 'react';
import { MobileForm } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('MobileForm', () => {
  const handleForm = jest.fn();

  test('renders MobileForm', () => {
    render(<MobileForm handleForm={handleForm} />);
    expect(screen.getByTestId('mobile-form')).toBeInTheDocument();

    const input = screen.getByTestId('input-field');
    const mobileNumber = input.querySelector('input') as HTMLInputElement;
    fireEvent.change(mobileNumber, { target: { value: '9876543210' } });
    expect(mobileNumber?.value).toBe('9876543210');

    const getOtp = screen.getByTestId('get-otp');
    fireEvent.click(getOtp);
  });
});
