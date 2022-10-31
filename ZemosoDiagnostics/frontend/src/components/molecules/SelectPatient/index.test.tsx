import React from 'react';
import SelectPatient from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

describe('Icon', () => {
  test('renders select patient ', () => {
    render(<SelectPatient name="Patrik Smith" details="Self, Male, 30 years" />);
    expect(screen.getByTestId('patient-option')).toBeInTheDocument();
  });
});