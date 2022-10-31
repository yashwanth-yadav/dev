/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ReportCard from '.';

test('checks whether component renders when giving pending as false', () => {
  render(
    <ReportCard
      labName={'Los Altos Center Lab'}
      testName={'COVID RT-PCR Test'}
      isPending={true}
    />
  );

  const element = screen.getByTestId('report-card');
  expect(element).toBeInTheDocument();
});

test('checks whether component renders when giving pending as false', () => {
  render(
    <ReportCard
      labName={'Los Altos Center Lab'}
      testName={'COVID RT-PCR Test'}
      date={'02 Feb 2022'}
      time={'08.30 AM'}
      isPending={false}
    />
  );

  const element = screen.getByTestId('report-card');
  expect(element).toBeInTheDocument();
});
