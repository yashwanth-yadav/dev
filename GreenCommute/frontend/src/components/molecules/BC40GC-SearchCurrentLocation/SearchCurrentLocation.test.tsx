import * as React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import SearchCurrentLocation from './SearchCurrentLocation';

test('checks whether Search current location component renders or not', () => {
  const utils = render(<SearchCurrentLocation currentLocation={'Hyderabad'} />);

  const input = utils.getByTestId('search_current_location');

  expect(input).toBeInTheDocument();
});
