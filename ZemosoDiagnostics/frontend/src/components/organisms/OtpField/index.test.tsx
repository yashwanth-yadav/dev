import React from 'react';
import { OtpField } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('OtpField', () => {
  test('renders otpField', () => {
    render(<OtpField />);
    expect(screen.getByTestId('otp-field')).toBeInTheDocument();

    const field0 = screen
      .getByTestId('field-0')
      .querySelector('input') as HTMLInputElement;
    const field1 = screen
      .getByTestId('field-1')
      .querySelector('input') as HTMLInputElement;
    const field2 = screen
      .getByTestId('field-2')
      .querySelector('input') as HTMLInputElement;
    const field3 = screen
      .getByTestId('field-3')
      .querySelector('input') as HTMLInputElement;
    expect(field0).toBeInTheDocument();
    expect(field1).toBeInTheDocument();
    expect(field2).toBeInTheDocument();
    expect(field3).toBeInTheDocument();

    fireEvent.change(field0, { target: { value: '0' } });
    expect(field0?.value).toBe('0');

    fireEvent.change(field1, { target: { value: '1' } });
    expect(field1?.value).toBe('1');

    fireEvent.change(field2, { target: { value: '2' } });
    expect(field2?.value).toBe('2');

    fireEvent.change(field3, { target: { value: '3' } });
    expect(field3?.value).toBe('3');

    fireEvent.change(field3, { target: { value: '' } });
    expect(field3?.value).toBe('');
  });
});
