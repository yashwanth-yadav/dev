/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormControl from '.';
import { MemoryRouter } from 'react-router-dom';

test('checks whether component renders for step 0', () => {
  render(
    <MemoryRouter>

    <FormControl
      activeStep={0}
      buttonText="Save"
      day="Wednesday"
      month="March"
      toTime="7.00"
      fromTime="6.00"
      date="23"
      numberOfPatients={1}
      islabs={false}
      handleButton={() => {
        console.log('Handle button');
      }}
      />
      </MemoryRouter>
  );

  const element = screen.getByTestId('form-control');
  expect(element).toBeInTheDocument();
  const buttonElement = screen.getByTestId('form-control-button');
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement, {
    button: 0
  });
});

test('checks whether component renders for step 1', () => {
  render(
    <MemoryRouter>

    <FormControl
      activeStep={1}
      buttonText="Save"
      day="Wednesday"
      month="March"
      toTime="7.00"
      fromTime="6.00"
      date="23"
      numberOfPatients={1}
      islabs={false}
      handleButton={() => {
        console.log('Handle button');
      }}
      />
      </MemoryRouter>
  );

  const element = screen.getByTestId('form-control');
  expect(element).toBeInTheDocument();
  const buttonElement = screen.getByTestId('form-control-button');
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement, {
    button: 0
  });
});

test('checks whether component renders for step 2', () => {
  render(
    <MemoryRouter>

    <FormControl
      activeStep={2}
      buttonText="Save"
      day="Wednesday"
      month="March"
      toTime="7.00"
      fromTime="6.00"
      date="23"
      numberOfPatients={1}
      islabs={true}
      handleButton={() => {
        console.log('Handle button');
      }}
      />
      </MemoryRouter>
  );

  const element = screen.getByTestId('form-control');
  expect(element).toBeInTheDocument();
  const buttonElement = screen.getByTestId('form-control-button');
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement, {
    button: 0
  });
});
