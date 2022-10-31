/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AccountInfo from '.';
import { ACCOUNT_OPTIONS_LIST } from '../../../utils/Messages';
import { useAuth0 } from '@auth0/auth0-react';

const user = {
  email: 'dummy@gmail.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746'
};

jest.mock('@auth0/auth0-react');

describe('AccountInfo', () => {
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });

    render(
      <AccountInfo
        handleClose={() => {
          console.log('Close the profile.');
        }}
        isClosed={false}
        accountOptionsList={ACCOUNT_OPTIONS_LIST}
        username={'Patrick Smith'}
        email={'patricksmith@gmail.com'}
        phoneNumber={'+1 330-617-3324'}
        name={'avatar'}
      />
    );
  });
  test('checks whether component renders', () => {
    const element = screen.getByTestId('account-info-list');
    expect(element).toBeInTheDocument();

    const logout = screen.getByTestId('Logout-account-option');
    fireEvent.click(logout);
  });
});
