import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Template_Screen_3 from './Template_Screen_3';

afterEach(cleanup);
test('checks whether component renders', () => {
  render(
    <Template_Screen_3
      setselectedSavedJobs={() => {
        console.log('State is changed');
      }}
    />
  );
  const element = screen.getByTestId('screen3');

  expect(element).toBeInTheDocument();
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
