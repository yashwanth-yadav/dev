import React from 'react';
import { ReportsInfo } from '.';
import { render, screen } from '@testing-library/react';
import { UPCOMING_REPORTS, RECENT_REPORTS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('ReportsInfo', () => {
  test('renders ReportsInfo', () => {
    render(
      <ReportsInfo
        upcomingReports={UPCOMING_REPORTS}
        recentReports={RECENT_REPORTS}
      />
    );
    expect(screen.getByTestId('reports-info')).toBeInTheDocument();
  });
});
