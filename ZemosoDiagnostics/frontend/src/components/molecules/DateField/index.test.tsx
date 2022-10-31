import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateField from '.';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

describe('DateFiled Test', () => {
  test('renders date field', () => {
    render(<DateField label="Date of Birth" handleChange={jest.fn}/>);
    const element = screen.getByTestId('date-field');
    expect(element).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('calendar-icon_'));
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
   
  });
});

