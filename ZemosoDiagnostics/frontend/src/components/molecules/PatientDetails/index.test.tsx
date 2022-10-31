import React from 'react';
import { PatientDetails } from '.';
import { render, screen } from '@testing-library/react';
import { PATIENT_DETAILS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('PatientDetails', () => {
  test('renders PatientDetails', () => {
    render(<PatientDetails patientDetails={PATIENT_DETAILS} />);
    expect(screen.getByTestId('patient-details')).toBeInTheDocument();
  });
});
