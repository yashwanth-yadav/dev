import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SideBar from './SideBar';

afterEach(cleanup);
test('checks whether component renders', () => {
  render(
    <SideBar
      setselectedSavedJobs={() => {
        console.log('Side bar');
      }}
    />
  );
  const element = screen.getByTestId('sidebar');
  const handleFindJobs = screen.getByRole('handleFindJobs');
  const handleSavedJobs = screen.getByRole('handleSavedJobs');

  expect(element).toBeInTheDocument();

  fireEvent.click(handleFindJobs, {
    button: 0
  });
  fireEvent.click(handleSavedJobs, {
    button: 0
  });
});
