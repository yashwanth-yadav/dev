/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '.';
import { MemoryRouter } from 'react-router-dom';

test('checks whether component renders', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const element = screen.getByTestId('header');
  expect(element).toBeInTheDocument();

  const openModal = screen.getByTestId('open-modal-button');
  expect(openModal).toBeInTheDocument();
  fireEvent.click(openModal, {
    button: 0
  });

  const closeModal = screen.getByTestId('close-modal');
  expect(closeModal).toBeInTheDocument();
  fireEvent.click(closeModal, {
    button: 0
  });
});
