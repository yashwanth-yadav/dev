import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import PrimaryJobCard from './PrimaryJobCard';

const handleClick = (id: number) => {
  console.log(`${id} card clicked`);
};

test('checks whether header component renders or not', () => {
  render(<PrimaryJobCard id={1} handleClick={() => handleClick(2)} />);

  expect(screen.getByTestId('jobcard')).toBeInTheDocument();
});
