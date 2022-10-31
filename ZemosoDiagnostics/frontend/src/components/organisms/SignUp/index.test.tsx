import React from 'react';
import { SignUp } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const user = {
  email: 'dummy@gmail.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746'
};

jest.mock('@auth0/auth0-react');

describe('SignUp', () => {
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });

    render(<SignUp />);
  });
  test('renders SignUp', () => {
    expect(screen.getByTestId('signup-form')).toBeInTheDocument();

    const inputs = screen.getAllByTestId('input-field');
    const firstName = inputs[0].querySelector('input') as HTMLInputElement;
    fireEvent.change(firstName, { target: { value: 'Patrick' } });
    expect(firstName?.value).toBe('Patrick');

    const lastName = inputs[1].querySelector('input') as HTMLInputElement;
    fireEvent.change(lastName, { target: { value: 'Smith' } });
    expect(lastName?.value).toBe('Smith');

    const emailId = inputs[2].querySelector('input') as HTMLInputElement;
    fireEvent.change(emailId, { target: { value: 'Patrick@gmail.com' } });
    expect(emailId?.value).toBe('Patrick@gmail.com');

    const continueButton = screen.getByTestId('continue');
    fireEvent.click(continueButton);

    const loginButton = screen.getByTestId('login');
    fireEvent.click(loginButton);
  });
});
