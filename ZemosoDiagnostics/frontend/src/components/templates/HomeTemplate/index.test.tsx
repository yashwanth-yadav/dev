/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeTemplate from '.';

const Element = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <h1>Child Component</h1>
    </div>
  );
};

test('checks whether component renders', () => {
  render(
    <MemoryRouter>
      <HomeTemplate mainComponent={<Element />} />
    </MemoryRouter>
  );

  const element = screen.getByTestId('home-template');
  expect(element).toBeInTheDocument();

  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();

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
