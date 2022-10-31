import React from 'react';
import { AppointmentsInfo } from '.';
import { render, screen } from '@testing-library/react';
import { UPCOMING_TESTS, RECENT_TESTS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('AppointmentsInfo', () => {
  test('renders AppointmentsInfo', () => {
    render(
      <AppointmentsInfo
        upcomingTests={UPCOMING_TESTS}
        recentTests={RECENT_TESTS}
      />
    );
    expect(screen.getByTestId('appointments-info')).toBeInTheDocument();
  });
});
