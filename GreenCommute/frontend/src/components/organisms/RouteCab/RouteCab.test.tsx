import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RouteCab from './RouteCab';

afterEach(cleanup);
test('Checking route cab  Rendering and functioning', () => {
  const utils = render(<RouteCab />);

  const input = utils.getByTestId('routeCab');
  const handleCarButton = utils.getByTestId('handleCarButton');
  const handleMetroButton = utils.getByTestId('handleMetroButton');

  expect(input).toBeInTheDocument();
  expect(handleCarButton).toBeInTheDocument();
  expect(handleMetroButton).toBeInTheDocument();
  fireEvent.click(handleCarButton, {
    button: 0
  });
  fireEvent.click(handleMetroButton, {
    button: 0
  });
});
