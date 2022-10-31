import React from 'react';
import { OtpForm } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const user = {
  name: 'dummy',
  email: 'dummy@gmail.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746'
};

jest.mock('@auth0/auth0-react');

describe('OtpForm', () => {
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });

    render(
      <MemoryRouter>
        <OtpForm />
      </MemoryRouter>
    );
  });
  test('renders otpForm', () => {
    expect(screen.getByTestId('otp-form')).toBeInTheDocument();

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

    fireEvent.change(field0, { target: { value: '0' } });
    fireEvent.change(field1, { target: { value: '1' } });
    fireEvent.change(field2, { target: { value: '2' } });
    fireEvent.change(field3, { target: { value: '3' } });

    const verify = screen.getByTestId('verify');
    fireEvent.click(verify);
  });
});
