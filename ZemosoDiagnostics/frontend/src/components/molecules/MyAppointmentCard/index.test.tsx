/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import MyAppointmentCard from '.';

test('checks whether component renders', () => {
  render(
    <MyAppointmentCard
      startLogo={'covid'}
      testName={'Full Body Checkup'}
      labName={'Los Altos Center Lab'}
      day={'Wed'}
      patientName={'Patrick Smith'}
      date={'23'}
      fromTime={'7.00 am'}
      toTime={'8.00 am'}
    />
  );

  const element = screen.getByTestId('appointment');
  expect(element).toBeInTheDocument();
});
