import React from 'react';
import { PatientForm } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('PatientForm', () => {
  test('renders PatientForm', () => {
    render(<PatientForm patientDetails={[]} setPatientDetails={jest.fn()}/>);
    expect(screen.getByTestId('patient-form')).toBeInTheDocument();
    const chip1 = screen.getByTestId('chip-1');
    fireEvent.click(chip1);
    const chip0 = screen.getByTestId('chip-0');
    fireEvent.click(chip0);
    const radioButton1 = screen.getByTestId('radio-button-1');
    fireEvent.click(radioButton1);

    const input = screen
      .getByTestId('input-field')
      .querySelector('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Patrick' } });
    expect(input?.value).toBe('Patrick');

    const dateInput = screen
      .getByTestId('text-field')
      .querySelector('input') as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '02/10/2000' } });
    expect(dateInput?.value).toBe('02/10/2000');
    fireEvent.change(dateInput, { target: { value: '89/28/3221' } });

    
  });
});
