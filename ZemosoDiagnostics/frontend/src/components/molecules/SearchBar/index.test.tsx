import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import SearchBar from "./index";

test('checks whether component renders', () => {
  render(<SearchBar/>);

  const element = screen.getByTestId('search-bar');
  expect(element).toBeInTheDocument();
});
