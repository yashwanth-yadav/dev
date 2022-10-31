/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileInfo from '.';

test('checks whether component renders', () => {
  render(
    <ProfileInfo
      username={'Patrick Smith'}
      email={'patricksmith@gmail.com'}
      phoneNumber={'+1 330-617-3324'}
      name={'avatar'}
    />
  );
  const element = screen.getByTestId('profile-info');
  expect(element).toBeInTheDocument();
});
