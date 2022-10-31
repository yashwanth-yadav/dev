import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddPatient from '.';
import { PATIENT_LIST } from '../../../utils/Messages';

describe('AddPatient', () => {
  test('renders AddPatient', () => {
    render(
      <AddPatient
        patientList={PATIENT_LIST}
        noOfPatients={1}
        setNoOfPatients={jest.fn()}
        setIsInSelectPatientform={jest.fn()}
        handlePatientsList={jest.fn()}
      />
    );
    expect(screen.getByTestId('add-patient')).toBeInTheDocument();
    const option1 = screen.getByTestId('Patrick Smith-checkbox');
    const option2 = screen.getByTestId('Will Smith-checkbox');
    const addPatient = screen.getByTestId('add-patient-button');
    fireEvent.click(option1);
    fireEvent.click(option2);
    fireEvent.click(option1);
    fireEvent.click(addPatient);
  });
});
